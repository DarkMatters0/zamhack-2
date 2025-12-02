import { createClient } from "@/utils/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database } from "@/types/supabase"
import { redirect } from "next/navigation"
import Link from "next/link"

type Challenge = Database["public"]["Tables"]["challenges"]["Row"]
// Remove unused types if you want, or keep for future reference

interface RecentSubmission {
  id: string
  submitted_at: string | null
  milestone: {
    id: string
    title: string
  } | null
  challenge: {
    id: string
    title: string
  } | null
  participant: {
    id: string
    profile: {
      id: string
      first_name: string | null
      last_name: string | null
      avatar_url: string | null
    } | null
  } | null
}

interface DashboardData {
  organizationName: string
  activeChallenges: Challenge[]
  activeChallengesCount: number
  totalParticipants: number
  pendingReviews: number
  recentSubmissions: RecentSubmission[]
}

async function getCompanyDashboardData(): Promise<DashboardData> {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect("/login")
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, organization_id")
    .eq("id", user.id)
    .single()

  if (profileError || !profile) {
    redirect("/login")
  }

  if (profile.role !== "company_admin" && profile.role !== "company_member") {
    redirect("/dashboard")
  }

  if (!profile.organization_id) {
    throw new Error("User does not have an organization assigned")
  }

  const { data: organization, error: orgError } = await supabase
    .from("organizations")
    .select("name")
    .eq("id", profile.organization_id)
    .single()

  if (orgError || !organization) {
    throw new Error("Organization not found in database")
  }

  // Active Challenges
  const { data: activeChallenges } = await supabase
    .from("challenges")
    .select("*")
    .eq("organization_id", profile.organization_id)
    .in("status", ["approved", "in_progress"])
    .order("created_at", { ascending: false })

  const activeChallengesList = (activeChallenges as Challenge[]) || []
  const activeChallengesCount = activeChallengesList.length
  const challengeIds = activeChallengesList.map((c) => c.id)

  // Total Participants
  let totalParticipants = 0
  if (challengeIds.length > 0) {
    const { count } = await supabase
      .from("challenge_participants")
      .select("*", { count: "exact", head: true })
      .in("challenge_id", challengeIds)
    totalParticipants = count || 0
  }

  // Pending Reviews
  let pendingReviews = 0
  if (challengeIds.length > 0) {
    const { data: participants } = await supabase
      .from("challenge_participants")
      .select("id")
      .in("challenge_id", challengeIds)

    if (participants && participants.length > 0) {
      const participantIds = participants.map((p) => p.id)
      const { data: submissions } = await supabase
        .from("submissions")
        .select("id")
        .in("participant_id", participantIds)

      if (submissions && submissions.length > 0) {
        const submissionIds = submissions.map((s) => s.id)
        const { data: evaluations } = await supabase
          .from("evaluations")
          .select("submission_id, is_draft")
          .in("submission_id", submissionIds)

        const evaluatedSubmissionIds = new Set(
          (evaluations || [])
            .filter((e) => e.is_draft === false)
            .map((e) => e.submission_id)
        )
        pendingReviews = submissionIds.filter(
          (id) => !evaluatedSubmissionIds.has(id)
        ).length
      }
    }
  }

  // Recent Submissions
  let recentSubmissions: RecentSubmission[] = []
  if (challengeIds.length > 0) {
    const { data: participants } = await supabase
      .from("challenge_participants")
      .select("id, challenge_id")
      .in("challenge_id", challengeIds)

    if (participants && participants.length > 0) {
      const participantIds = participants.map((p) => p.id)
      const participantMap = new Map(
        participants.map((p) => [p.id, p.challenge_id])
      )

      const { data: submissions } = await supabase
        .from("submissions")
        .select("id, submitted_at, milestone_id, participant_id")
        .in("participant_id", participantIds)
        .order("submitted_at", { ascending: false })
        .limit(5)

      if (submissions && submissions.length > 0) {
        // Fetch related data
        const milestoneIds = submissions
          .map((s) => s.milestone_id)
          .filter(Boolean) as string[]
        
        // FIX: Handle potential null participant_id safely
        const challengeIdsFromSubs = submissions
          .map((s) => s.participant_id ? participantMap.get(s.participant_id) : null)
          .filter(Boolean) as string[]
        
        const profileIds = participants
          .map((p) => p.id)
          .filter((id) =>
            submissions.some((s) => s.participant_id === id)
          ) as string[]

        // Batch fetches
        const { data: milestones } = milestoneIds.length
          ? await supabase.from("milestones").select("id, title").in("id", milestoneIds)
          : { data: null }

        const { data: challenges } = challengeIdsFromSubs.length
          ? await supabase.from("challenges").select("id, title").in("id", [...new Set(challengeIdsFromSubs)])
          : { data: null }

        const { data: participantData } = profileIds.length
          ? await supabase.from("challenge_participants").select("id, user_id").in("id", profileIds)
          : { data: null }

        const userIds = [
          ...new Set((participantData || []).map((p) => p.user_id).filter(Boolean)),
        ] as string[]

        const { data: profiles } = userIds.length
          ? await supabase.from("profiles").select("id, first_name, last_name, avatar_url").in("id", userIds)
          : { data: null }

        // Maps
        const milestoneMap = new Map((milestones || []).map((m) => [m.id, m]))
        const challengeMap = new Map((challenges || []).map((c) => [c.id, c]))
        const profileMap = new Map((profiles || []).map((p) => [p.id, p]))
        const participantToUserIdMap = new Map((participantData || []).map((p) => [p.id, p.user_id]))

        // Build result
        recentSubmissions = submissions.map((sub) => {
          const userId = sub.participant_id ? participantToUserIdMap.get(sub.participant_id) : null
          const profile = userId ? profileMap.get(userId) : null
          const challengeId = sub.participant_id ? participantMap.get(sub.participant_id) : null
          const challenge = challengeId ? challengeMap.get(challengeId) : null
          const milestone = sub.milestone_id ? milestoneMap.get(sub.milestone_id) : null

          return {
            id: sub.id,
            submitted_at: sub.submitted_at,
            milestone: milestone ? { id: milestone.id, title: milestone.title } : null,
            challenge: challenge ? { id: challenge.id, title: challenge.title } : null,
            participant: profile
              ? {
                  id: sub.participant_id as string,
                  profile: {
                    id: profile.id,
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    avatar_url: profile.avatar_url,
                  },
                }
              : null,
          }
        })
      }
    }
  }

  return {
    organizationName: organization.name,
    activeChallenges: activeChallengesList,
    activeChallengesCount,
    totalParticipants,
    pendingReviews,
    recentSubmissions,
  }
}

export default async function CompanyDashboardPage() {
  const {
    organizationName,
    activeChallenges,
    activeChallengesCount,
    totalParticipants,
    pendingReviews,
    recentSubmissions,
  } = await getCompanyDashboardData()

  // Helper for formatting date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString()
  }

  // Helper for student name
  const getStudentName = (submission: RecentSubmission) => {
    if (submission.participant?.profile) {
      const { first_name, last_name } = submission.participant.profile
      const name = `${first_name || ""} ${last_name || ""}`.trim()
      return name || "Unknown Student"
    }
    return "Unknown Student"
  }

  const getStatusBadgeVariant = (status: string | null) => {
    switch (status) {
      case "approved": return "success"
      case "in_progress": return "default"
      case "under_review": return "warning"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Welcome, {organizationName}!</h1>
          <p className="text-muted-foreground">
            Here is what's happening with your challenges.
          </p>
        </div>
        <Link href="/company/challenges/create">
          <Button>Create New Challenge</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeChallengesCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalParticipants}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReviews}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentSubmissions.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Submissions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Submissions</h2>
        {recentSubmissions.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <p>No submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="rounded-md border bg-card">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Student</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Challenge</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Milestone</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {recentSubmissions.map((submission) => (
                    <tr key={submission.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{getStudentName(submission)}</td>
                      <td className="p-4 align-middle">{submission.challenge?.title}</td>
                      <td className="p-4 align-middle">{submission.milestone?.title}</td>
                      <td className="p-4 align-middle">{formatDate(submission.submitted_at)}</td>
                      <td className="p-4 align-middle text-right">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/company/challenges/${submission.challenge?.id}/submissions/${submission.id}`}>
                            Review
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Active Challenges List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Active Challenges</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-1" title={challenge.title}>
                    {challenge.title}
                  </CardTitle>
                  <Badge variant={getStatusBadgeVariant(challenge.status) as any}>
                    {challenge.status?.replace("_", " ")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {challenge.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/company/challenges/${challenge.id}`}>Manage Challenge</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}