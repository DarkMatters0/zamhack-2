// zamhack-platform/src/app/(student)/challenges/[id]/results/page.tsx
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Define the exact shape of our joined data to satisfy TypeScript
interface WinnerData {
  rank: number
  prize: string | null
  score: number | null // FIX 1: Added score field
  profile: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    university: string | null
  } | null
}

// FIX 2: New interface for the full leaderboard
interface LeaderboardEntry {
  profile_id: string
  profile: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    university: string | null
  } | null
  totalScore: number
}

export default async function ChallengeResultsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  // 1. Fetch Challenge Status
  const { data: challenge } = await supabase
    .from("challenges")
    .select("title, status, organization:organizations(name)")
    .eq("id", id)
    .single()

  if (!challenge) redirect("/challenges")

  // Only show results if closed
  if (challenge.status !== "closed" && challenge.status !== "completed") {
    return (
      <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <div className="bg-muted p-4 rounded-full">
          <Trophy className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold">Results Pending</h1>
        <p className="text-muted-foreground max-w-md">
          The winners for <span className="font-semibold">{challenge.title}</span> have not been announced yet.
        </p>
        <Button asChild variant="outline">
          <Link href={`/challenges/${id}`}>Back to Challenge</Link>
        </Button>
      </div>
    )
  }

  // 2. Fetch Winners — FIX 1: include `score` in the select
  const { data } = await supabase
    .from("winners")
    .select(`
      rank,
      prize,
      score,
      profile:profiles (first_name, last_name, avatar_url, university)
    `)
    .eq("challenge_id", id)
    .order("rank", { ascending: true })

  const winners = data as unknown as WinnerData[] | null

  // FIX 2: Fetch ALL participants with their submissions + evaluations
  //         so we can compute the full leaderboard (every participant, not just top 3)
  const { data: allParticipants } = await supabase
    .from("challenge_participants")
    .select(`
      user_id,
      profile:profiles (first_name, last_name, avatar_url, university),
      submissions (
        evaluations (
          score
        )
      )
    `)
    .eq("challenge_id", id)

  // Compute each participant's total score and sort descending
  const leaderboard: LeaderboardEntry[] = (allParticipants || [])
    .map((p: any) => {
      const totalScore = (p.submissions || []).reduce((acc: number, sub: any) => {
        return acc + (sub.evaluations?.[0]?.score || 0)
      }, 0)
      return {
        profile_id: p.user_id,
        profile: p.profile,
        totalScore,
      }
    })
    .sort((a, b) => b.totalScore - a.totalScore)

  const getRankConfig = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          color: "text-yellow-600",
          bg: "bg-yellow-100/50 border-yellow-200",
          icon: Trophy,
          height: "h-96",
          scale: "scale-105 z-10",
        }
      case 2:
        return {
          color: "text-slate-600",
          bg: "bg-slate-100/50 border-slate-200",
          icon: Medal,
          height: "h-80",
          scale: "scale-100",
        }
      case 3:
        return {
          color: "text-amber-700",
          bg: "bg-orange-100/50 border-orange-200",
          icon: Award,
          height: "h-72",
          scale: "scale-100",
        }
      default:
        return {
          color: "text-blue-600",
          bg: "bg-card",
          icon: Award,
          height: "h-auto",
          scale: "",
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20">
      <div className="container max-w-5xl py-12 px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href={`/challenges/${id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Challenge
          </Link>
        </Button>

        <div className="text-center mb-16 space-y-2">
          <Badge
            variant="outline"
            className="mb-2 border-primary/20 text-primary bg-primary/5"
          >
            Official Results
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Winners Announced
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the top innovators for{" "}
            <span className="text-foreground font-semibold">
              {challenge.title}
            </span>
          </p>
        </div>

        {/* Podium Layout: 2nd, 1st, 3rd */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6">
          {[2, 1, 3].map((rank) => {
            const winner = winners?.find((w) => w.rank === rank)
            if (!winner) return null

            const config = getRankConfig(rank)
            const Icon = config.icon
            const profile = winner.profile

            return (
              <Card
                key={rank}
                className={`w-full md:w-1/3 border-2 flex flex-col items-center justify-between shadow-lg transition-transform ${config.bg} ${config.height} ${config.scale}`}
              >
                <div className="pt-8 flex flex-col items-center w-full px-4">
                  <div
                    className={`p-3 rounded-full bg-white shadow-sm mb-4 ${config.color}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <Avatar className="h-20 w-20 border-4 border-white shadow-md mb-4">
                    <AvatarImage src={profile?.avatar_url || undefined} />
                    <AvatarFallback className="text-lg font-bold">
                      {profile?.first_name?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="font-bold text-lg text-center leading-tight">
                    {profile?.first_name} {profile?.last_name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mt-1">
                    {profile?.university}
                  </p>
                </div>

                <div className="pb-8 flex flex-col items-center">
                  {/* FIX 1: Display the winner's stored score */}
                  <p className={`text-3xl font-extrabold ${config.color}`}>
                    {winner.score ?? 0}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      pts
                    </span>
                  </p>
                  {winner.prize && (
                    <Badge className="bg-black/90 text-white hover:bg-black/80 mt-2 mb-1">
                      {winner.prize}
                    </Badge>
                  )}
                  <div
                    className={`text-6xl font-black opacity-10 select-none ${config.color}`}
                  >
                    {rank}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* FIX 2: Full Leaderboard — all participants ranked by total score */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Full Leaderboard</h2>
            <span className="text-sm text-muted-foreground">
              {leaderboard.length} participant
              {leaderboard.length !== 1 ? "s" : ""}
            </span>
          </div>

          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground w-12">
                      #
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      Participant
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      University
                    </th>
                    <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry, index) => (
                    <tr
                      key={entry.profile_id}
                      className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        {index < 3 ? (
                          <span
                            className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold ${
                              index === 0
                                ? "bg-yellow-100 text-yellow-700"
                                : index === 1
                                ? "bg-slate-100 text-slate-600"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {index + 1}
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground pl-1">
                            {index + 1}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={entry.profile?.avatar_url || undefined}
                            />
                            <AvatarFallback className="text-xs">
                              {entry.profile?.first_name?.[0] || "U"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">
                            {entry.profile?.first_name}{" "}
                            {entry.profile?.last_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {entry.profile?.university || "—"}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold">
                        {entry.totalScore}{" "}
                        <span className="text-xs text-muted-foreground font-normal">
                          pts
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}