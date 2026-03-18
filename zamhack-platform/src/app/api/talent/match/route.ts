import { createClient } from "@/utils/supabase/server"
import { NextRequest, NextResponse } from "next/server"
import { computeMatchScore } from "@/lib/talent/compute-match-score"

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { requiredSkills = [] } = await req.json()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  // Fetch all students with their skills, challenge history, evaluations, and challenge skills
  const { data: students, error: studentsError } = await supabase
    .from("profiles")
    .select(`
      id, first_name, last_name, bio, university, degree, updated_at,
      student_skills (
        level,
        skills ( id, name )
      ),
      challenge_participants (
        status,
        joined_at,
        submissions (
          evaluations ( score )
        ),
        challenges (
          id,
          challenge_skills (
            skills ( id, name )
          )
        )
      )
    `)
    .eq("role", "student")

  if (studentsError) {
    console.error("[api/talent/match] students query error:", studentsError)
    return NextResponse.json({ error: studentsError.message }, { status: 500 })
  }
  if (!students) return NextResponse.json({ error: "No students found" }, { status: 500 })

  // Fetch all winners
  const { data: winners } = await supabase
    .from("winners")
    .select("profile_id")

  const winnerIds = new Set((winners || []).map((w) => w.profile_id))

  const scored = students.map((student) => {
    const score = computeMatchScore(student, requiredSkills, winnerIds)
    return { ...student, matchScore: score }
  })

  // Sort by match score descending
  scored.sort((a, b) => b.matchScore - a.matchScore)

  return NextResponse.json({ students: scored })
}

