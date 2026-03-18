export function computeMatchScore(
  student: any,
  requiredSkills: string[],
  winnerIds: Set<string>
): number {
  let score = 0

  const studentSkills = student.student_skills || []
  const participants = student.challenge_participants || []

  // Build merged skill pool: portfolio skills + challenge-earned skills
  const mergedSkillNames = new Set<string>()

  // Add portfolio skills
  for (const ss of studentSkills) {
    const skillName = ss.skills?.name?.toLowerCase()
    if (skillName) mergedSkillNames.add(skillName)
  }

  // Add challenge-earned skills (skills from completed challenges)
  for (const p of participants) {
    if (p.status === "completed" && p.challenges?.challenge_skills) {
      for (const cs of p.challenges.challenge_skills) {
        const skillName = cs.skills?.name?.toLowerCase()
        if (skillName) mergedSkillNames.add(skillName)
      }
    }
  }

  // --- Skill overlap (40%) ---
  if (requiredSkills.length > 0) {
    const mergedSkillNamesArr = Array.from(mergedSkillNames)
    const matches = requiredSkills.filter((rs) => {
      const rsLower = rs.toLowerCase()
      return mergedSkillNamesArr.some(
        (ss) => ss.includes(rsLower) || rsLower.includes(ss)
      )
    })
    score += (matches.length / requiredSkills.length) * 40
  } else {
    score += mergedSkillNames.size > 0 ? 20 : 0 // partial credit if they have any skills
  }

  // --- Proficiency levels (20%) ---
  const levelMap: Record<string, number> = {
    beginner: 1, intermediate: 2, advanced: 3
  }
  const avgLevel =
    studentSkills.length > 0
      ? studentSkills.reduce((sum: number, ss: any) => sum + (levelMap[ss.level] || 1), 0) /
        studentSkills.length
      : 0
  score += (avgLevel / 3) * 20

  // --- Completion rate (20%) ---
  const completed = participants.filter((p: any) => p.status === "completed").length
  const total = participants.length
  const completionRate = total > 0 ? completed / total : 0
  score += completionRate * 20

  // --- Avg evaluation score (15%) ---
  const allScores = participants
    .flatMap((p: any) => p.submissions || [])
    .flatMap((s: any) => s.evaluations || [])
    .map((e: any) => e.score)
    .filter((s: any) => s != null)
  const avgScore =
    allScores.length > 0
      ? allScores.reduce((a: number, b: number) => a + b, 0) / allScores.length
      : 0
  score += (avgScore / 100) * 15 // assuming scores are 0–100

  // --- Education keyword match (5%) ---
  if (requiredSkills.some((s) =>
    student.degree?.toLowerCase().includes(s.toLowerCase())
  )) {
    score += 5
  }

  // --- Winners flat bonus (+8 pts) ---
  if (winnerIds.has(student.id)) {
    score += 8
  }

  // --- Recency signal (activity in last 90 days, +5 pts max) ---
  const now = Date.now()
  const ninetyDaysAgo = now - 90 * 24 * 60 * 60 * 1000

  // Check for recent challenge participation
  let hasRecentActivity = false
  for (const p of participants) {
    if (p.joined_at) {
      const joinedDate = new Date(p.joined_at).getTime()
      if (joinedDate >= ninetyDaysAgo) {
        hasRecentActivity = true
        break
      }
    }
  }

  // Also check profile updated_at
  if (!hasRecentActivity && student.updated_at) {
    const updatedDate = new Date(student.updated_at).getTime()
    if (updatedDate >= ninetyDaysAgo) {
      hasRecentActivity = true
    }
  }

  if (hasRecentActivity) {
    score += 5
  }

  return Math.round(Math.min(score, 100))
}
