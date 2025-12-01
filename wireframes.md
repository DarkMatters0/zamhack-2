Screen Breakdowns (Wireframe Descriptions)

2.1 Web Platform — Public Landing Page

Screen: Landing Page (Public)
URL: platform.com
┌─────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky top)                                                         │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]          [How It Works]  [For Companies]  [Login]  [Sign Up ▼]  │ │
│ │                                                          └─ Student     │ │
│ │                                                          └─ Company     │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION (full width, centered)                                         │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │              "Solve Real Problems. Build Your Future."                  │ │
│ │                                                                         │ │
│ │     Subtext: "Join hackathons from top companies, showcase your        │ │
│ │              skills, and get discovered by employers."                  │ │
│ │                                                                         │ │
│ │        [Get Started as Student]     [Post a Challenge]                  │ │
│ │              (Primary CTA)            (Secondary CTA)                   │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ HOW IT WORKS SECTION (3-column layout)                                      │
│ ┌───────────────────┬───────────────────┬───────────────────┐               │
│ │    [Icon: 1]      │    [Icon: 2]      │    [Icon: 3]      │               │
│ │  "Browse & Join"  │ "Build & Submit"  │ "Get Discovered"  │               │
│ │   Description     │   Description     │   Description     │               │
│ └───────────────────┴───────────────────┴───────────────────┘               │
├─────────────────────────────────────────────────────────────────────────────┤
│ FEATURED CHALLENGES SECTION                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  "Active Challenges"                              [View All Challenges] │ │
│ │                                                                         │ │
│ │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │ │
│ │  │ Challenge 1 │  │ Challenge 2 │  │ Challenge 3 │  │ Challenge 4 │    │ │
│ │  │ [Logo]      │  │ [Logo]      │  │ [Logo]      │  │ [Logo]      │    │ │
│ │  │ Title       │  │ Title       │  │ Title       │  │ Title       │    │ │
│ │  │ Company     │  │ Company     │  │ Company     │  │ Company     │    │ │
│ │  │ Difficulty  │  │ Difficulty  │  │ Difficulty  │  │ Difficulty  │    │ │
│ │  │ [View]      │  │ [View]      │  │ [View]      │  │ [View]      │    │ │
│ │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘    │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOR COMPANIES SECTION (2-column)                                            │
│ ┌────────────────────────────┬──────────────────────────────────┐           │
│ │      [Illustration]        │  "Find Top Talent Through        │           │
│ │                            │   Real-World Challenges"         │           │
│ │                            │                                  │           │
│ │                            │   • Post challenges              │           │
│ │                            │   • Review submissions           │           │
│ │                            │   • Discover & recruit           │           │
│ │                            │                                  │           │
│ │                            │   [Learn More for Companies]     │           │
│ └────────────────────────────┴──────────────────────────────────┘           │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                      │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]    About | Privacy | Terms | Contact       © 2025 Platform      │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
Navigation:

[Get Started as Student] → Student Sign Up Page
[Post a Challenge] → Company Sign Up Page
[Login] → Login Page (role selection)
[View] on challenge card → Challenge Detail (public preview, prompts login to join)


Screen: Login Page
URL: platform.com/login
┌─────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (minimal)                                                            │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]                                              [Back to Home]      │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ LOGIN FORM (centered card, max-width 400px)                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                        "Welcome Back"                                   │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Email Address                           │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Password                        [Show]  │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │                              [Forgot Password?]                         │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │              [Login]                    │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ─────────────── OR ───────────────                                 │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │  [G] Continue with Google               │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │         Don't have an account? [Sign Up]                               │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
Logic:

On successful login, system checks user role and redirects:

Student → Student Dashboard
Company → Company Dashboard
(Admin/Evaluator use separate portals)



Navigation:

[Forgot Password?] → Forgot Password Page
[Sign Up] → Sign Up Page (with role selection)


Screen: Sign Up Page — Student
URL: platform.com/signup/student
┌─────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (minimal)                                                            │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]                                              [Back to Home]      │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ SIGNUP FORM (centered card)                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                     "Create Your Student Account"                       │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Full Name                               │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Email Address                           │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Password                        [Show]  │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │     Password strength indicator: [████░░░░░░]                          │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Confirm Password                        │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     [✓] I agree to the Terms of Service and Privacy Policy             │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │           [Create Account]              │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ─────────────── OR ───────────────                                 │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │  [G] Sign up with Google                │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     Already have an account? [Login]                                   │ │
│ │     Are you a company? [Sign up here]                                  │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
Navigation:

[Create Account] → Email Verification Pending Page
[Login] → Login Page
[Sign up here] (Company) → Company Sign Up Page


Screen: Sign Up Page — Company
URL: platform.com/signup/company
┌─────────────────────────────────────────────────────────────────────────────┐
│ SIGNUP FORM (centered card)                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                  "Register Your Company"                                │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Company Name                            │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Your Full Name (Account Admin)          │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Work Email Address                      │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Password                        [Show]  │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Confirm Password                        │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     [✓] I agree to the Terms of Service and Privacy Policy             │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │           [Register Company]            │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ─────────────── OR ───────────────                                 │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │  [G] Sign up with Google                │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     Already registered? [Login]                                        │ │
│ │     Are you a student? [Sign up here]                                  │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
Navigation:

[Register Company] → Email Verification Pending Page → then Pending Admin Approval Page


Screen: Email Verification Pending
URL: platform.com/verify-email
┌─────────────────────────────────────────────────────────────────────────────┐
│ CENTERED CONTENT                                                            │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                      [Email Icon Illustration]                          │ │
│ │                                                                         │ │
│ │                     "Check Your Email"                                  │ │
│ │                                                                         │ │
│ │     We've sent a verification link to:                                 │ │
│ │     john.doe@email.com                                                 │ │
│ │                                                                         │ │
│ │     Click the link in the email to verify your account.                │ │
│ │                                                                         │ │
│ │     Didn't receive the email?                                          │ │
│ │     [Resend Verification Email]                                        │ │
│ │                                                                         │ │
│ │     [← Back to Login]                                                  │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

Screen: Forgot Password
URL: platform.com/forgot-password
┌─────────────────────────────────────────────────────────────────────────────┐
│ FORM (centered card)                                                        │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                     "Reset Your Password"                               │ │
│ │                                                                         │ │
│ │     Enter your email address and we'll send you a link                 │ │
│ │     to reset your password.                                            │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Email Address                           │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │         [Send Reset Link]               │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     [← Back to Login]                                                  │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

Screen: Reset Password
URL: platform.com/reset-password?token=xxx
┌─────────────────────────────────────────────────────────────────────────────┐
│ FORM (centered card)                                                        │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                     "Create New Password"                               │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ New Password                    [Show]  │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │     Password strength indicator: [████████░░]                          │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Confirm New Password                    │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │         [Reset Password]                │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

2.2 Web Platform — Student Dashboard (Post-Login)

Screen: Student Dashboard
URL: platform.com/dashboard
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR (sticky)                                                         │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]    [Search Challenges...]           [🔔 3] [Profile Avatar ▼]   │ │
│ │                                                    └─ My Profile        │ │
│ │                                                    └─ Settings          │ │
│ │                                                    └─ Logout            │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR (fixed)    │ MAIN CONTENT AREA                                      │
│ ┌────────────────┐ │ ┌──────────────────────────────────────────────────────┐
│ │                │ │ │ WELCOME SECTION                                      │
│ │ [📊] Dashboard │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ "Welcome back, John!"                            │ │
│ │ [🔍] Browse    │ │ │ │                                                  │ │
│ │     Challenges │ │ │ │ You have 2 active challenges and 1 slot open.   │ │
│ │                │ │ │ │                                                  │ │
│ │ [📁] My        │ │ │ │ [Browse New Challenges]                          │ │
│ │     Challenges │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │ [👥] My Team   │ │ │ QUICK STATS (4-column cards)                        │
│ │                │ │ │ ┌────────────┬────────────┬────────────┬───────────┐ │
│ │ [💬] Messages  │ │ │ │ Active     │ Completed  │ Skills     │ Team      │ │
│ │                │ │ │ │ Challenges │ Challenges │ Earned     │ Status    │ │
│ │ [👤] Profile   │ │ │ │    2/3     │     5      │    12      │ "Alpha"   │ │
│ │                │ │ │ └────────────┴────────────┴────────────┴───────────┘ │
│ │ ────────────── │ │ │                                                      │
│ │                │ │ │ ACTIVE CHALLENGES                                    │
│ │ [⚙️] Settings  │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ Challenge Card 1                    [In Progress]│ │
│ │                │ │ │ │ "AI Customer Service Bot"                        │ │
│ │                │ │ │ │ TechCorp Inc.                                    │ │
│ │                │ │ │ │ Progress: ████████░░░░ 67% (Milestone 2/3)       │ │
│ │                │ │ │ │ Due: Dec 15, 2025                                │ │
│ │                │ │ │ │ [Continue →]                                     │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ Challenge Card 2                    [In Progress]│ │
│ │                │ │ │ │ "Mobile App Redesign"                            │ │
│ │                │ │ │ │ DesignStudio                                     │ │
│ │                │ │ │ │ Progress: ████░░░░░░░░ 33% (Milestone 1/3)       │ │
│ │                │ │ │ │ Due: Dec 20, 2025                                │ │
│ │                │ │ │ │ [Continue →]                                     │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │                │ │ │ RECOMMENDED FOR YOU                   [View All →]  │
│ │                │ │ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐     │
│ │                │ │ │ │ [Logo]      │ │ [Logo]      │ │ [Logo]      │     │
│ │                │ │ │ │ Title       │ │ Title       │ │ Title       │     │
│ │                │ │ │ │ Company     │ │ Company     │ │ Company     │     │
│ │                │ │ │ │ ⭐ Match 92%│ │ ⭐ Match 87%│ │ ⭐ Match 85%│     │
│ │                │ │ │ └─────────────┘ └─────────────┘ └─────────────┘     │
│ └────────────────┘ │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Elements:

Sidebar: Fixed left navigation, collapsible on smaller screens
Notification Bell: Shows unread count, dropdown preview
Profile Avatar Dropdown: Quick access to profile, settings, logout
Challenge Cards: Clickable, shows progress bar, deadline, company logo
Recommended Challenges: Based on student's skills (match % from NLP)

Navigation:

[Continue →] on challenge card → Challenge Progress Page
[Browse New Challenges] → Browse Challenges Page
Sidebar links → Respective pages


Screen: Browse Challenges
URL: platform.com/challenges
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR (same as Dashboard)                                    │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Browse Challenges"                                  │
│                    │ │                                                      │
│                    │ │ SEARCH & FILTERS ROW                                 │
│                    │ │ ┌─────────────────────────────────────┐              │
│                    │ │ │ 🔍 Search challenges...             │              │
│                    │ │ └─────────────────────────────────────┘              │
│                    │ │                                                      │
│                    │ │ FILTER CHIPS                                         │
│                    │ │ [Industry ▼] [Difficulty ▼] [Type ▼] [Duration ▼]   │
│                    │ │                              Solo/Team  Short/Long   │
│                    │ │                                                      │
│                    │ │ Active filters: [Design ×] [Intermediate ×] [Clear] │
│                    │ │                                                      │
│                    │ │ RESULTS COUNT                                        │
│                    │ │ Showing 24 challenges                                │
│                    │ │                                                      │
│                    │ │ CHALLENGE GRID (3 columns)                           │
│                    │ │ ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐ │
│                    │ │ │ [Company Logo]  │ │ [Company Logo]  │ │ [Logo]   │ │
│                    │ │ │                 │ │                 │ │          │ │
│                    │ │ │ Challenge Title │ │ Challenge Title │ │ Title    │ │
│                    │ │ │ Company Name    │ │ Company Name    │ │ Company  │ │
│                    │ │ │                 │ │                 │ │          │ │
│                    │ │ │ [🏷️ Design]     │ │ [🏷️ Dev]        │ │ [🏷️ Biz] │ │
│                    │ │ │ [⚡ Intermed.]  │ │ [⚡ Advanced]   │ │ [⚡Beg.] │ │
│                    │ │ │ [👥 Team]       │ │ [👤 Solo]       │ │ [👥Team] │ │
│                    │ │ │                 │ │                 │ │          │ │
│                    │ │ │ 15/50 joined    │ │ 8/20 teams      │ │ 32/50    │ │
│                    │ │ │ Ends Dec 15     │ │ Ends Dec 20     │ │ Ends Jan │ │
│                    │ │ │                 │ │                 │ │          │ │
│                    │ │ │ [View Details]  │ │ [View Details]  │ │ [View]   │ │
│                    │ │ └─────────────────┘ └─────────────────┘ └──────────┘ │
│                    │ │                                                      │
│                    │ │ (More rows...)                                       │
│                    │ │                                                      │
│                    │ │ PAGINATION                                           │
│                    │ │        [< Prev]  1  2  3  4  5  [Next >]             │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Filter Dropdowns:

Industry: Technology, Design, Business, Marketing, Healthcare, Finance, Other
Difficulty: Beginner, Intermediate, Advanced
Type: Solo Only, Team Only, Both
Duration: < 1 week, 1-2 weeks, 2-4 weeks, > 1 month

Navigation:

[View Details] → Challenge Detail Page


Screen: Challenge Detail Page
URL: platform.com/challenges/:challengeId
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT (scrollable)                              │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > AI Customer Service Bot                 │
│                    │ │                                                      │
│                    │ │ CHALLENGE HEADER                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Company Logo]                                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ "AI Customer Service Bot"                        │ │
│                    │ │ │ by TechCorp Inc.                                 │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [🏷️ Technology] [⚡ Intermediate] [👥 Team/Solo]  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ 23/50 participants  •  Ends Dec 15, 2025         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ACTION BUTTONS                                       │
│                    │ │ ┌────────────────────┐  ┌────────────────────┐       │
│                    │ │ │  [Join Solo]       │  │  [Join with Team]  │       │
│                    │ │ └────────────────────┘  └────────────────────┘       │
│                    │ │ (or if no slots: "Challenge Full" badge)             │
│                    │ │ (or if already joined: "You're enrolled ✓")          │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [Overview]  [Milestones]  [Skills]  [Company]        │
│                    │ │ ════════                                             │
│                    │ │                                                      │
│                    │ │ ── OVERVIEW TAB ──                                   │
│                    │ │                                                      │
│                    │ │ Description                                          │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Build an AI-powered customer service chatbot     │ │
│                    │ │ │ that can handle common inquiries, route complex  │ │
│                    │ │ │ issues to human agents, and learn from           │ │
│                    │ │ │ interactions to improve over time...             │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Requirements                                         │
│                    │ │ • Experience with Python or JavaScript               │
│                    │ │ • Basic understanding of NLP concepts                │
│                    │ │ • Ability to work with APIs                          │
│                    │ │                                                      │
│                    │ │ Timeline                                             │
│                    │ │ Start: Nov 15, 2025                                  │
│                    │ │ End: Dec 15, 2025 (30 days)                          │
│                    │ │                                                      │
│                    │ │ Participation Details                                │
│                    │ │ • Type: Solo or Team (max 4 members)                 │
│                    │ │ • Capacity: 50 participants / 20 teams               │
│                    │ │ • Currently enrolled: 23 participants, 8 teams       │
│                    │ │                                                      │
│                    │ │ ── MILESTONES TAB ──                                 │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ○ Milestone 1: Project Proposal                  │ │
│                    │ │ │   Due: Nov 22, 2025                              │ │
│                    │ │ │   Submit a project proposal outlining your       │ │
│                    │ │ │   approach and technical architecture.           │ │
│                    │ │ │   Submission: Written Response                   │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ ○ Milestone 2: MVP Development                   │ │
│                    │ │ │   Due: Dec 5, 2025                               │ │
│                    │ │ │   Build a working prototype with core features.  │ │
│                    │ │ │   Submission: GitHub Link + Demo URL             │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ ○ Milestone 3: Final Submission                  │ │
│                    │ │ │   Due: Dec 15, 2025                              │ │
│                    │ │ │   Complete project with documentation.           │ │
│                    │ │ │   Submission: GitHub Link + Demo URL + Writeup   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── SKILLS TAB ──                                     │
│                    │ │                                                      │
│                    │ │ Skills You'll Earn Upon Completion:                  │
│                    │ │ [Python] [NLP] [API Development] [Chatbot Design]   │
│                    │ │                                                      │
│                    │ │ ── COMPANY TAB ──                                    │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo]  TechCorp Inc.                            │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Industry: Technology                             │ │
│                    │ │ │ Website: techcorp.com                            │ │
│                    │ │ │                                                  │ │
│                    │ │ │ About: TechCorp is a leading provider of         │ │
│                    │ │ │ enterprise software solutions...                 │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [View All Challenges by TechCorp]                │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Join with Team Modal (when clicked):
┌───────────────────────────────────────────────────────────────┐
│                      Join with Team                     [×]   │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Select your team:                                           │
│                                                               │
│   ○ Team Alpha (3/4 members) - You are the leader            │
│                                                               │
│   ── OR ──                                                    │
│                                                               │
│   You don't have a team yet.                                  │
│   [Create a Team First]                                       │
│                                                               │
│                    [Cancel]    [Join as Team Alpha]           │
│                                                               │
└───────────────────────────────────────────────────────────────┘

Screen: Challenge Progress Page (My Challenge View)
URL: platform.com/my-challenges/:challengeId
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ My Challenges > AI Customer Service Bot              │
│                    │ │                                                      │
│                    │ │ CHALLENGE HEADER                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Company Logo]                                   │ │
│                    │ │ │ "AI Customer Service Bot"          [In Progress] │ │
│                    │ │ │ by TechCorp Inc.                                 │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Overall Progress: ████████░░░░ 67%               │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Participating as: Team Alpha (4 members)         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ACTION BUTTONS                                       │
│                    │ │ [💬 Message Company]    [⚠️ Withdraw from Challenge] │
│                    │ │                                                      │
│                    │ │ ── MILESTONES SECTION ──                             │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ✓ Milestone 1: Project Proposal        [Complete]│ │
│                    │ │ │   Submitted: Nov 20, 2025                        │ │
│                    │ │ │                                                  │ │
│                    │ │ │   Your Submission:                               │ │
│                    │ │ │   "Our approach leverages transformer-based..."  │ │
│                    │ │ │                                                  │ │
│                    │ │ │   Feedback from TechCorp:                        │ │
│                    │ │ │   ┌────────────────────────────────────────────┐ │ │
│                    │ │ │   │ "Great proposal! Consider adding more      │ │ │
│                    │ │ │   │  detail on your training data strategy."   │ │ │
│                    │ │ │   │                                            │ │ │
│                    │ │ │   │  Score: 85/100                             │ │ │
│                    │ │ │   └────────────────────────────────────────────┘ │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ◐ Milestone 2: MVP Development      [In Progress]│ │
│                    │ │ │   Due: Dec 5, 2025 (7 days remaining)            │ │
│                    │ │ │                                                  │ │
│                    │ │ │   Required: GitHub Link + Demo URL               │ │
│                    │ │ │                                                  │ │
│                    │ │ │   Your Submission:                               │ │
│                    │ │ │   ┌────────────────────────────────────────────┐ │ │
│                    │ │ │   │ GitHub URL:                                │ │ │
│                    │ │ │   │ ┌────────────────────────────────────────┐ │ │ │
│                    │ │ │   │ │ https://github.com/team-alpha/bot      │ │ │ │
│                    │ │ │   │ └────────────────────────────────────────┘ │ │ │
│                    │ │ │   │                                            │ │ │
│                    │ │ │   │ Demo URL:                                  │ │ │
│                    │ │ │   │ ┌────────────────────────────────────────┐ │ │ │
│                    │ │ │   │ │ https://team-alpha-bot.vercel.app      │ │ │ │
│                    │ │ │   │ └────────────────────────────────────────┘ │ │ │
│                    │ │ │   │                                            │ │ │
│                    │ │ │   │ [Save Draft]          [Submit Milestone]   │ │ │
│                    │ │ │   └────────────────────────────────────────────┘ │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ○ Milestone 3: Final Submission         [Locked]│ │
│                    │ │ │   Due: Dec 15, 2025                              │ │
│                    │ │ │   (Complete Milestone 2 to unlock)               │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Withdraw Modal:
┌───────────────────────────────────────────────────────────────┐
│                 Withdraw from Challenge?              [×]     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   ⚠️ Warning: This action cannot be undone.                   │
│                                                               │
│   If you withdraw:                                            │
│   • Your progress will be saved but marked incomplete         │
│   • This counts against your challenge limit                  │
│   • You can only join 2 more challenges in the next 30 days   │
│                                                               │
│   Are you sure you want to withdraw?                          │
│                                                               │
│              [Cancel]        [Yes, Withdraw]                  │
│                                                               │
└───────────────────────────────────────────────────────────────┘

Screen: My Challenges (List View)
URL: platform.com/my-challenges
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "My Challenges"                                      │
│                    │ │                                                      │
│                    │ │ Challenge Slots: 2/3 used                            │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [Active (2)]  [Completed (5)]  [Cancelled (1)]       │
│                    │ │ ════════════                                         │
│                    │ │                                                      │
│                    │ │ ── ACTIVE TAB ──                                     │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] AI Customer Service Bot      [In Progress]│ │
│                    │ │ │        TechCorp Inc.                             │ │
│                    │ │ │        Progress: ████████░░░░ 67%                │ │
│                    │ │ │        Next: Milestone 2 due Dec 5               │ │
│                    │ │ │        Participating as: Team Alpha              │ │
│                    │ │ │                                    [View →]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] Mobile App Redesign          [In Progress]│ │
│                    │ │ │        DesignStudio                              │ │
│                    │ │ │        Progress: ████░░░░░░░░ 33%                │ │
│                    │ │ │        Next: Milestone 1 due Dec 1               │ │
│                    │ │ │        Participating as: Solo                    │ │
│                    │ │ │                                    [View →]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── COMPLETED TAB ──                                  │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] Data Visualization Dashboard  [Completed] │ │
│                    │ │ │        DataCorp                                  │ │
│                    │ │ │        Completed: Oct 15, 2025                   │ │
│                    │ │ │        Skills Earned: [D3.js] [React] [Data Viz] │ │
│                    │ │ │        Final Score: 92/100                       │ │
│                    │ │ │                                    [View →]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── CANCELLED TAB ──                                  │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] E-commerce Platform           [Cancelled] │ │
│                    │ │ │        ShopCo (Challenge cancelled by company)   │ │
│                    │ │ │        Your progress: 50% (Milestone 1 complete) │ │
│                    │ │ │        Cancelled: Nov 1, 2025                    │ │
│                    │ │ │                                    [View →]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

Screen: My Team
URL: platform.com/team
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "My Team"                                            │
│                    │ │                                                      │
│                    │ │ ── CURRENT TEAM SECTION ──                           │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Team Alpha                           [4/4 Full]  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Members:                                         │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ [Avatar] John Doe          👑 Leader       │   │ │
│                    │ │ │ │          john@email.com                    │   │ │
│                    │ │ │ ├────────────────────────────────────────────┤   │ │
│                    │ │ │ │ [Avatar] Jane Smith         Member         │   │ │
│                    │ │ │ │          jane@email.com                    │   │ │
│                    │ │ │ ├────────────────────────────────────────────┤   │ │
│                    │ │ │ │ [Avatar] Bob Johnson        Member         │   │ │
│                    │ │ │ │          bob@email.com                     │   │ │
│                    │ │ │ ├────────────────────────────────────────────┤   │ │
│                    │ │ │ │ [Avatar] Alice Brown        Member         │   │ │
│                    │ │ │ │          alice@email.com                   │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Active Challenge: AI Customer Service Bot       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ ACTIONS (Leader View):                           │ │
│                    │ │ │ [💬 Team Chat]  [📋 Copy Invite Link]            │ │
│                    │ │ │                 (disabled if full)               │ │
│                    │ │ │ [👑 Transfer Leadership]                         │ │
│                    │ │ │                                                  │ │
│                    │ │ │ ACTIONS (Member View):                           │ │
│                    │ │ │ [💬 Team Chat]  [🚪 Leave Team]                   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── OR IF NO TEAM ──                                  │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │          [Illustration: Team collaboration]      │ │
│                    │ │ │                                                  │ │
│                    │ │ │          You're not part of a team yet.          │ │
│                    │ │ │                                                  │ │
│                    │ │ │    [Create a Team]        [Join with Code]       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── PENDING INVITES ──                                │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [!] You have a pending leadership transfer       │ │
│                    │ │ │     from Team Beta.                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │     [Accept Leadership]    [Decline]             │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Transfer Leadership Modal:
┌───────────────────────────────────────────────────────────────┐
│                  Transfer Leadership                   [×]    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Select new team leader:                                     │
│                                                               │
│   ○ Jane Smith                                                │
│   ○ Bob Johnson                                               │
│   ○ Alice Brown                                               │
│                                                               │
│   Note: The selected member must accept the transfer.         │
│   You cannot leave the team until leadership is transferred.  │
│                                                               │
│              [Cancel]        [Send Transfer Request]          │
│                                                               │
└───────────────────────────────────────────────────────────────┘
Create Team Modal:
┌───────────────────────────────────────────────────────────────┐
│                    Create a Team                       [×]    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Team Name:                                                  │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ Team Alpha                                          │     │
│   └─────────────────────────────────────────────────────┘     │
│                                                               │
│   You will be the team leader.                                │
│   Max team size: 4 members                                    │
│                                                               │
│              [Cancel]           [Create Team]                 │
│                                                               │
└───────────────────────────────────────────────────────────────┘
Join Team Modal:
┌───────────────────────────────────────────────────────────────┐
│                    Join a Team                         [×]    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Enter invite code:                                          │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ ALPHA-2025-XYZ                                      │     │
│   └─────────────────────────────────────────────────────┘     │
│                                                               │
│   Or paste the full invite link                               │
│                                                               │
│              [Cancel]           [Join Team]                   │
│                                                               │
└───────────────────────────────────────────────────────────────┘

Screen: Messages
URL: platform.com/messages
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT (2-panel layout)                          │
│                    │ ┌─────────────────────┬────────────────────────────────┐
│                    │ │ CONVERSATIONS LIST  │ CHAT VIEW                      │
│                    │ │ (left panel, 300px) │ (right panel, flex)            │
│                    │ │                     │                                │
│                    │ │ [🔍 Search...]      │ ┌────────────────────────────┐ │
│                    │ │                     │ │ CHAT HEADER                │ │
│                    │ │ ┌─────────────────┐ │ │ [Logo] TechCorp Inc.       │ │
│                    │ │ │ [Logo] TechCorp │ │ │ Re: AI Customer Service    │ │
│                    │ │ │ "Thanks for..." │ │ └────────────────────────────┘ │
│                    │ │ │ 2 min ago    ●  │ │                                │
│                    │ │ └─────────────────┘ │ ┌────────────────────────────┐ │
│                    │ │                     │ │ MESSAGE AREA (scrollable)  │ │
│                    │ │ ┌─────────────────┐ │ │                            │ │
│                    │ │ │ [Avatar] Team   │ │ │ [Company] Nov 28, 10:30 AM │ │
│                    │ │ │ Alpha Chat      │ │ │ ┌────────────────────────┐ │ │
│                    │ │ │ "See you at..." │ │ │ │ Great progress on your │ │ │
│                    │ │ │ 1 hr ago        │ │ │ │ milestone 1 submission!│ │ │
│                    │ │ └─────────────────┘ │ │ │ We have a few follow-  │ │ │
│                    │ │                     │ │ │ up questions...        │ │ │
│                    │ │ ┌─────────────────┐ │ │ └────────────────────────┘ │ │
│                    │ │ │ [Logo] Design   │ │ │                            │ │
│                    │ │ │ Studio          │ │ │ [You] Nov 28, 11:15 AM     │ │
│                    │ │ │ "Your submission│ │ │           ┌──────────────┐ │ │
│                    │ │ │ looks..."       │ │ │           │ Thanks! We'd │ │ │
│                    │ │ │ Yesterday       │ │ │           │ be happy to  │ │ │
│                    │ │ └─────────────────┘ │ │           │ clarify...   │ │ │
│                    │ │                     │ │           └──────────────┘ │ │
│                    │ │                     │ │                            │ │
│                    │ │                     │ └────────────────────────────┘ │
│                    │ │                     │                                │
│                    │ │                     │ ┌────────────────────────────┐ │
│                    │ │                     │ │ MESSAGE INPUT              │ │
│                    │ │                     │ │ ┌────────────────────────┐ │ │
│                    │ │                     │ │ │ Type a message...      │ │ │
│                    │ │                     │ │ └────────────────────────┘ │ │
│                    │ │                     │ │              [Send →]      │ │
│                    │ │                     │ └────────────────────────────┘ │
│                    │ └─────────────────────┴────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘
Empty State (no conversations):
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│            [Illustration: Chat bubbles]                        │
│                                                                │
│            No messages yet                                     │
│                                                                │
│            Messages from companies and your team               │
│            will appear here.                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Screen: Student Profile / Portfolio
URL: platform.com/profile
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "My Profile"                    [👁️ Preview] [✏️ Edit]│
│                    │ │                                                      │
│                    │ │ ── PROFILE HEADER ──                                 │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Large Avatar]                                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ John Doe                                         │ │
│                    │ │ │ Full Stack Developer                             │ │
│                    │ │ │ San Francisco, CA                                │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [LinkedIn] [GitHub] [Facebook]                   │ │
│                    │ │ │ [📄 View Resume]                                 │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── BIO ──                                            │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Passionate software developer with 2 years of   │ │
│                    │ │ │ experience building web applications. Love       │ │
│                    │ │ │ solving complex problems and learning new tech.  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── PORTFOLIO SKILLS ──                               │
│                    │ │ (Self-defined, max 15)                               │
│                    │ │                                                      │
│                    │ │ Advanced (5 max):                                    │
│                    │ │ [JavaScript ⭐⭐⭐] [React ⭐⭐⭐] [Node.js ⭐⭐⭐]         │
│                    │ │                                                      │
│                    │ │ Intermediate (5 max):                                │
│                    │ │ [Python ⭐⭐] [PostgreSQL ⭐⭐] [Docker ⭐⭐]             │
│                    │ │ [TypeScript ⭐⭐]                                      │
│                    │ │                                                      │
│                    │ │ Beginner (5 max):                                    │
│                    │ │ [Go ⭐] [Rust ⭐] [GraphQL ⭐]                          │
│                    │ │                                                      │
│                    │ │ ── CHALLENGE SKILLS ──                               │
│                    │ │ (Earned from completed challenges)                   │
│                    │ │                                                      │
│                    │ │ [D3.js] [Data Visualization] [API Development]      │
│                    │ │ [NLP] [Chatbot Design]                               │
│                    │ │                                                      │
│                    │ │ ── EDUCATION ──                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ 🎓 Stanford University                           │ │
│                    │ │ │    B.S. Computer Science                         │ │
│                    │ │ │    2020 - 2024                                   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── WORK EXPERIENCE ──                                │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ 💼 Software Engineer Intern                      │ │
│                    │ │ │    Google • Mountain View, CA                    │ │
│                    │ │ │    Jun 2023 - Sep 2023                           │ │
│                    │ │ │    • Built microservices for Cloud Platform      │ │
│                    │ │ │    • Improved API response time by 40%           │ │
│                    │ │ │    • Collaborated with 5-person team             │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── PROJECTS ──                                       │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Personal Projects:                      [+ Add]  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ Weather Dashboard                          │   │ │
│                    │ │ │ │ A React-based weather app with D3.js       │   │ │
│                    │ │ │ │ visualizations and real-time data.         │   │ │
│                    │ │ │ │ [🔗 View Project]                          │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Challenge Projects:                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ [DataCorp Logo] Data Visualization Dashboard│  │ │
│                    │ │ │ │ Built for DataCorp Challenge               │   │ │
│VContinue                │ │ │ │ Score: 92/100                              │   │ │
│                    │ │ │ │ [🔗 View Submission]                        │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

**Edit Profile View (same URL with edit mode):**
- All sections become editable with form fields
- Add/Remove buttons for skills, education, experience, projects
- Save/Cancel buttons at bottom
- Validation for skill limits (5 per level, 15 total)

---

#### **Screen: Notifications**
**URL:** `platform.com/notifications`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Notifications"                    [Mark All Read]   │
│                    │ │                                                      │
│                    │ │ FILTER CHIPS                                         │
│                    │ │ [All] [Unread] [Challenges] [Messages] [Team]        │
│                    │ │                                                      │
│                    │ │ NOTIFICATION LIST                                    │
│                    │ │                                                      │
│                    │ │ Today                                                │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ● [Logo] TechCorp Inc.                  2 hrs ago│ │
│                    │ │ │   New feedback on your Milestone 1 submission    │ │
│                    │ │ │   "AI Customer Service Bot"                      │ │
│                    │ │ │                            [View Feedback →]     │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ● [Avatar] Jane Smith                   5 hrs ago│ │
│                    │ │ │   Sent you a message in Team Alpha chat          │ │
│                    │ │ │                            [Open Chat →]         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Yesterday                                            │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ○ [📅] Milestone Reminder                         │ │
│                    │ │ │   Milestone 2 for "AI Customer Service Bot"      │ │
│                    │ │ │   is due in 7 days.                              │ │
│                    │ │ │                            [View Challenge →]    │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ○ [⚠️] Challenge Update                           │ │
│                    │ │ │   "Mobile App Redesign" details have been        │ │
│                    │ │ │   updated. Review the changes.                   │ │
│                    │ │ │                            [View Changes →]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Earlier                                              │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ ○ [👑] Leadership Transfer Request               │ │
│                    │ │ │   Bob from Team Beta wants to transfer           │ │
│                    │ │ │   leadership to you.                             │ │
│                    │ │ │                    [Accept]    [Decline]         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ LOAD MORE                                            │
│                    │ │         [Load More Notifications]                    │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Settings (Student)**
**URL:** `platform.com/settings`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Settings"                                           │
│                    │ │                                                      │
│                    │ │ ── ACCOUNT SETTINGS ──                               │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Email Address                                    │ │
│                    │ │ │ john.doe@email.com                    [Change]   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Password                                         │ │
│                    │ │ │ ••••••••••                            [Change]   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Connected Accounts                               │ │
│                    │ │ │ [G] Google: Connected as john@gmail.com          │ │
│                    │ │ │                                   [Disconnect]   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── NOTIFICATION PREFERENCES ──                       │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Email Notifications                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Challenge updates            [Toggle: ON ]       │ │
│                    │ │ │ New feedback received        [Toggle: ON ]       │ │
│                    │ │ │ Milestone reminders          [Toggle: ON ]       │ │
│                    │ │ │ Messages from companies      [Toggle: ON ]       │ │
│                    │ │ │ Team activity                [Toggle: OFF]       │ │
│                    │ │ │ Marketing & announcements    [Toggle: OFF]       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── DANGER ZONE ──                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Delete Account                                   │ │
│                    │ │ │ Permanently delete your account and all data.    │ │
│                    │ │ │                            [Delete Account]      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

### 2.3 Web Platform — Company Dashboard

---

#### **Screen: Company Dashboard**
**URL:** `platform.com/company/dashboard`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR (Company variant)                                                │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo]    [Search...]                 [🔔 5] [Company Logo ▼] TechCorp  │ │
│ │                                              └─ Organization Settings   │ │
│ │                                              └─ Switch User             │ │
│ │                                              └─ Logout                  │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│ ┌────────────────┐ │ ┌──────────────────────────────────────────────────────┐
│ │                │ │ │ WELCOME SECTION                                      │
│ │ [📊] Dashboard │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ "Welcome, TechCorp!"                             │ │
│ │ [📋] Challenges│ │ │ │                                                  │ │
│ │                │ │ │ │ You have 3 active challenges and 2 pending       │ │
│ │ [🔍] Talent    │ │ │ │ approvals.                                       │ │
│ │     Search     │ │ │ │                                                  │ │
│ │                │ │ │ │ [Create New Challenge]                           │ │
│ │ [💬] Messages  │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │ [🏢] Org       │ │ │ QUICK STATS (4-column cards)                        │
│ │     Settings   │ │ │ ┌────────────┬────────────┬────────────┬───────────┐ │
│ │                │ │ │ │ Active     │ Total      │ Pending    │ New       │ │
│ │ ────────────── │ │ │ │ Challenges │ Partic.    │ Reviews    │ Submiss.  │ │
│ │                │ │ │ │     3      │    127     │     12     │    8      │ │
│ │ [❓] Admin     │ │ │ └────────────┴────────────┴────────────┴───────────┘ │
│ │     Support    │ │ │                                                      │
│ │                │ │ │ RECENT SUBMISSIONS                    [View All →]  │
│ │ [⚙️] Settings  │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ [Avatar] John Doe           AI Customer Service   │ │
│ │                │ │ │ │ Milestone 2: MVP Development        2 hours ago  │ │
│ │                │ │ │ │                             [Review Submission →] │ │
│ │                │ │ │ ├──────────────────────────────────────────────────┤ │
│ │                │ │ │ │ [Avatar] Team Alpha         AI Customer Service   │ │
│ │                │ │ │ │ Milestone 1: Project Proposal       Yesterday    │ │
│ │                │ │ │ │                             [Review Submission →] │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │                │ │ │ ACTIVE CHALLENGES                                    │
│ │                │ │ │ ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐ │
│ │                │ │ │ │ AI Customer     │ │ Mobile App      │ │ Data     │ │
│ │                │ │ │ │ Service Bot     │ │ Redesign        │ │ Pipeline │ │
│ │                │ │ │ │                 │ │                 │ │          │ │
│ │                │ │ │ │ [In Progress]   │ │ [Live]          │ │ [Under   │ │
│ │                │ │ │ │ 23 participants │ │ 15 participants │ │ Review]  │ │
│ │                │ │ │ │ 8 teams         │ │ 5 teams         │ │ 10 parts │ │
│ │                │ │ │ │                 │ │                 │ │          │ │
│ │                │ │ │ │ [Manage →]      │ │ [Manage →]      │ │ [Manage] │ │
│ │                │ │ │ └─────────────────┘ └─────────────────┘ └──────────┘ │
│ └────────────────┘ │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

**Admin Support Section (expanded when clicked):**
┌─────────────────────────────────────────────────────────────────────────────┐
│ Admin Support                                                               │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ Need help? Contact our admin team.                                      │ │
│ │                                                                         │ │
│ │ [💬 Message Admin]    📧 support@platform.com                           │ │
│ │                                                                         │ │
│ │ Common requests:                                                        │ │
│ │ • Request additional seats                                              │ │
│ │ • Challenge setup assistance                                            │ │
│ │ • Report an issue                                                       │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: Company Challenges List**
**URL:** `platform.com/company/challenges`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Challenges"                    [+ Create Challenge] │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [All(12)] [Draft(2)] [Pending(2)] [Active(3)]       │
│                    │ │ [In Progress(3)] [Under Review(1)] [Completed(1)]   │
│                    │ │ ═══                                                  │
│                    │ │                                                      │
│                    │ │ SEARCH & FILTER                                      │
│                    │ │ [🔍 Search challenges...]           [Sort: Newest ▼] │
│                    │ │                                                      │
│                    │ │ CHALLENGE LIST                                       │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ AI Customer Service Bot                          │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │In Prog.│  Created: Nov 15, 2025                │ │
│                    │ │ │ └────────┘  Ends: Dec 15, 2025                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Participants: 23/50  •  Teams: 8/20              │ │
│                    │ │ │ Milestones: 3  •  Pending Reviews: 5             │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Edit] [View Participants] [Review Submissions]  │ │
│                    │ │ │                            [Manage →]            │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Mobile App Redesign                              │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │Pending │  Submitted: Nov 20, 2025              │ │
│                    │ │ │ │Approval│  Awaiting admin review                │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Edit] [Preview]                                 │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ E-commerce Platform Overhaul                     │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │ Draft  │  Last edited: Nov 18, 2025            │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Continue Editing] [Delete Draft]                │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Create Challenge — Method Selection**
**URL:** `platform.com/company/challenges/create`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > Create New Challenge                    │
│                    │ │                                                      │
│                    │ │ PAGE HEADER                                          │
│                    │ │ "How would you like to create your challenge?"       │
│                    │ │                                                      │
│                    │ │ METHOD SELECTION (2-column cards)                    │
│                    │ │                                                      │
│                    │ │ ┌─────────────────────────┐ ┌─────────────────────────┐
│                    │ │ │                         │ │                         │
│                    │ │ │  [Illustration: Form]   │ │  [Illustration: Brief]  │
│                    │ │ │                         │ │                         │
│                    │ │ │  "Create Manually"      │ │  "Submit a Brief"       │
│                    │ │ │                         │ │                         │
│                    │ │ │  Set up your challenge  │ │  Describe your problem  │
│                    │ │ │  step-by-step with full │ │  and let our admin team │
│                    │ │ │  control over all       │ │  create the challenge   │
│                    │ │ │  details and milestones.│ │  for you.               │
│                    │ │ │                         │ │                         │
│                    │ │ │  Best for: Companies    │ │  Best for: Companies    │
│                    │ │ │  with specific          │ │  who want assistance    │
│                    │ │ │  requirements           │ │  with structure         │
│                    │ │ │                         │ │                         │
│                    │ │ │  [Start Creating →]     │ │  [Submit Brief →]       │
│                    │ │ │                         │ │                         │
│                    │ │ └─────────────────────────┘ └─────────────────────────┘
│                    │ │                                                      │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Create Challenge — Manual (Multi-Step Form)**
**URL:** `platform.com/company/challenges/create/manual`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > Create > Manual Setup                   │
│                    │ │                                                      │
│                    │ │ PROGRESS STEPPER                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ (1)━━━━(2)━━━━(3)━━━━(4)━━━━(5)                  │ │
│                    │ │ │ Basic  Timeline Milestones Skills  Review        │ │
│                    │ │ │  ●                                               │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── STEP 1: BASIC INFORMATION ──                      │
│                    │ │                                                      │
│                    │ │ Challenge Title *                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ AI Customer Service Bot                          │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Description *                                        │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Build an AI-powered customer service chatbot     │ │
│                    │ │ │ that can handle common inquiries, route complex  │ │
│                    │ │ │ issues to human agents, and learn from...        │ │
│                    │ │ │                                                  │ │
│                    │ │ │                                                  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │ Rich text editor toolbar: [B] [I] [Link] [List]      │
│                    │ │                                                      │
│                    │ │ Industry *                     Difficulty Level *    │
│                    │ │ ┌─────────────────────┐       ┌─────────────────────┐ │
│                    │ │ │ Technology        ▼ │       │ Intermediate      ▼ │ │
│                    │ │ └─────────────────────┘       └─────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Participation Type *                                 │
│                    │ │ ○ Solo only                                          │
│                    │ │ ○ Team only                                          │
│                    │ │ ● Both (Solo and Team)                               │
│                    │ │                                                      │
│                    │ │ ── If Team enabled: ──                               │
│                    │ │ Max Team Size: [4 ▼]  (Platform default: 4)          │
│                    │ │                                                      │
│                    │ │ Capacity Limits                                      │
│                    │ │ Max Participants: ┌──────┐  Max Teams: ┌──────┐      │
│                    │ │                   │ 50   │             │ 20   │      │
│                    │ │                   └──────┘             └──────┘      │
│                    │ │ (Leave blank for platform defaults)                  │
│                    │ │                                                      │
│                    │ │ Requirements (Optional)                              │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ What skills or experience should participants    │ │
│                    │ │ │ have before joining?                             │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ NAVIGATION                                           │
│                    │ │        [Cancel]                    [Next: Timeline →]│
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

**Step 2: Timeline**
┌──────────────────────────────────────────────────────────────────────────────┐
│ ── STEP 2: TIMELINE ──                                                       │
│                                                                              │
│ Start Date *                           End Date *                            │
│ ┌─────────────────────┐               ┌─────────────────────┐                │
│ │ 📅 Nov 15, 2025     │               │ 📅 Dec 15, 2025     │                │
│ └─────────────────────┘               └─────────────────────┘                │
│                                                                              │
│ Duration: 30 days                                                            │
│                                                                              │
│ Registration Deadline (Optional)                                             │
│ ┌─────────────────────┐                                                      │
│ │ 📅 Nov 20, 2025     │  Students can join until this date                  │
│ └─────────────────────┘                                                      │
│                                                                              │
│ [← Back: Basic Info]                             [Next: Milestones →]        │
└──────────────────────────────────────────────────────────────────────────────┘

**Step 3: Milestones**
┌──────────────────────────────────────────────────────────────────────────────┐
│ ── STEP 3: MILESTONES ──                                                     │
│                                                                              │
│ Define the milestones participants must complete.                            │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ MILESTONE 1                                               [↕] [🗑️]       │ │
│ │                                                                          │ │
│ │ Name *                                                                   │ │
│ │ ┌────────────────────────────────────────────────────────────────────┐   │ │
│ │ │ Project Proposal                                                   │   │ │
│ │ └────────────────────────────────────────────────────────────────────┘   │ │
│ │                                                                          │ │
│ │ Description *                                                            │ │
│ │ ┌────────────────────────────────────────────────────────────────────┐   │ │
│ │ │ Submit a project proposal outlining your approach and technical    │   │ │
│ │ │ architecture. Include your team's planned approach...              │   │ │
│ │ └────────────────────────────────────────────────────────────────────┘   │ │
│ │                                                                          │ │
│ │ Due Date *                        Submission Types *                     │ │
│ │ ┌────────────────┐               [✓] Written Response                    │ │
│ │ │ 📅 Nov 22, 2025│               [✓] URL/Link                            │ │
│ │ └────────────────┘               [ ] GitHub Repository                   │ │
│ │                                                                          │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ MILESTONE 2                                               [↕] [🗑️]       │ │
│ │ ...                                                                      │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│ [+ Add Milestone]                                                            │
│                                                                              │
│ [← Back: Timeline]                                  [Next: Skills →]         │
└──────────────────────────────────────────────────────────────────────────────┘

**Step 4: Skills**
┌──────────────────────────────────────────────────────────────────────────────┐
│ ── STEP 4: SKILLS ──                                                         │
│                                                                              │
│ Skills Earned Upon Completion *                                              │
│ Participants who complete this challenge will earn these skills.             │
│                                                                              │
│ ┌────────────────────────────────────────────────────────────────────────┐   │
│ │ 🔍 Search skills...                                                    │   │
│ └────────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│ Selected: [Python ×] [NLP ×] [API Development ×] [Chatbot Design ×]          │
│                                                                              │
│ Suggested skills:                                                            │
│ [+ Machine Learning] [+ TensorFlow] [+ REST APIs] [+ Dialog Systems]         │
│                                                                              │
│ ──────────────────────────────────────────────────────────────────────────   │
│                                                                              │
│ Required Skills (Optional)                                                   │
│ Only show this challenge to students with these skills.                      │
│                                                                              │
│ ┌────────────────────────────────────────────────────────────────────────┐   │
│ │ 🔍 Search skills...                                                    │   │
│ └────────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│ Selected: (none)                                                             │
│                                                                              │
│ [← Back: Milestones]                                [Next: Review →]         │
└──────────────────────────────────────────────────────────────────────────────┘

**Step 5: Review & Submit**
┌──────────────────────────────────────────────────────────────────────────────┐
│ ── STEP 5: REVIEW & SUBMIT ──                                                │
│                                                                              │
│ Review your challenge before submitting for approval.                        │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ CHALLENGE PREVIEW                                                        │ │
│ │                                                                          │ │
│ │ Title: AI Customer Service Bot                                           │ │
│ │ Industry: Technology | Difficulty: Intermediate                          │ │
│ │ Type: Solo & Team (max 4) | Capacity: 50 participants, 20 teams          │ │
│ │ Timeline: Nov 15 - Dec 15, 2025 (30 days)                                │ │
│ │                                                                          │ │
│ │ Milestones: 3                                                            │ │
│ │ 1. Project Proposal - Nov 22                                             │ │
│ │ 2. MVP Development - Dec 5                                               │ │
│ │ 3. Final Submission - Dec 15                                             │ │
│ │                                                                          │ │
│ │ Skills Earned: Python, NLP, API Development, Chatbot Design              │ │
│ │                                                                          │ │
│ │ [Edit Basic Info] [Edit Timeline] [Edit Milestones] [Edit Skills]        │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│ ⚠️ Note: Challenges require admin approval before going live.                │
│                                                                              │
│ [← Back: Skills]    [Save as Draft]    [Submit for Approval]                 │
└──────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: Submit Brief (Alternative Creation Method)**
**URL:** `platform.com/company/challenges/create/brief`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > Create > Submit Brief                   │
│                    │ │                                                      │
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Submit Your Challenge Brief"                        │
│                    │ │                                                      │
│                    │ │ Describe your problem or challenge idea, and our     │
│                    │ │ admin team will create a structured challenge for    │
│                    │ │ you. We'll reach out if we need any clarification.   │
│                    │ │                                                      │
│                    │ │ ── BRIEF FORM ──                                     │
│                    │ │                                                      │
│                    │ │ Brief Title *                                        │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Customer Service Automation                      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Problem Description *                                │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ We're looking to automate our customer service   │ │
│                    │ │ │ workflows. Currently, our support team handles   │ │
│                    │ │ │ 500+ tickets daily, with 60% being repetitive    │ │
│                    │ │ │ inquiries. We want participants to build...      │ │
│                    │ │ │                                                  │ │
│                    │ │ │                                                  │ │
│                    │ │ │                                                  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │ Min 200 characters                                   │
│                    │ │                                                      │
│                    │ │ Desired Outcome *                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ A working chatbot prototype that can handle      │ │
│                    │ │ │ common inquiries and integrate with our CRM...   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Preferred Timeline                                   │
│                    │ │ ○ 1-2 weeks                                          │
│                    │ │ ● 2-4 weeks                                          │
│                    │ │ ○ 1+ month                                           │
│                    │ │ ○ Flexible                                           │
│                    │ │                                                      │
│                    │ │ Preferred Difficulty                                 │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Intermediate                                   ▼ │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Additional Documents (Optional)                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [📎 Drag files here or click to upload]          │ │
│                    │ │ │    PDF, DOC, DOCX (max 10MB)                     │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ Additional Notes                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Any specific requirements or preferences...      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │        [Cancel]              [Submit Brief →]        │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

**After Submission:**
┌───────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│                        [✓ Checkmark Illustration]                             │
│                                                                               │
│                      "Brief Submitted Successfully!"                          │
│                                                                               │
│     Our admin team will review your brief and create a challenge             │
│     structure for you. You'll be notified when it's ready for review.        │
│                                                                               │
│     Expected response time: 2-3 business days                                 │
│                                                                               │
│              [View My Challenges]       [Submit Another Brief]                │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: Challenge Management Page**
**URL:** `platform.com/company/challenges/:challengeId`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > AI Customer Service Bot                 │
│                    │ │                                                      │
│                    │ │ CHALLENGE HEADER                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ "AI Customer Service Bot"           [In Progress]│ │
│                    │ │ │                                                  │ │
│                    │ │ │ 23/50 participants  •  8/20 teams                │ │
│                    │ │ │ Started: Nov 15  •  Ends: Dec 15, 2025           │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Edit Challenge]  [Request Cancellation]         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [Overview] [Participants] [Submissions] [Messages]   │
│                    │ │ ═════════════                                        │
│                    │ │                                                      │
│                    │ │ ── OVERVIEW TAB ──                                   │
│                    │ │                                                      │
│                    │ │ STATS CARDS (3-column)                               │
│                    │ │ ┌────────────────┬────────────────┬────────────────┐ │
│                    │ │ │ Participants   │ Submissions    │ Avg Progress   │ │
│                    │ │ │    23 / 50     │      45        │     52%        │ │
│                    │ │ │ (+3 this week) │ (12 pending)   │                │ │
│                    │ │ └────────────────┴────────────────┴────────────────┘ │
│                    │ │                                                      │
│                    │ │ MILESTONE PROGRESS                                   │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Milestone 1: Project Proposal    [Due: Nov 22]   │ │
│                    │ │ │ ████████████████████░░░░░ 85% submitted          │ │
│                    │ │ │ 20 submitted • 3 pending • 20 reviewed           │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ Milestone 2: MVP Development     [Due: Dec 5]    │ │
│                    │ │ │ ████████░░░░░░░░░░░░░░░░░ 35% submitted          │ │
│                    │ │ │ 8 submitted • 15 pending • 5 reviewed            │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ Milestone 3: Final Submission    [Due: Dec 15]   │ │
│                    │ │ │ ░░░░░░░░░░░░░░░░░░░░░░░░░ 0% submitted           │ │
│                    │ │ │ Locked until Milestone 2                         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── PARTICIPANTS TAB ──                               │
│                    │ │                                                      │
│                    │ │ FILTER ROW                                           │
│                    │ │ [🔍 Search...] [Type: All ▼] [Progress: All ▼]       │
│                    │ │                                                      │
│                    │ │ PARTICIPANT TABLE                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Name          │ Type │ Progress │ Actions        │ │
│                    │ │ ├───────────────┼──────┼──────────┼────────────────┤ │
│                    │ │ │ [Av] John Doe │ Solo │ ██░░ 67% │ [Profile][Msg] │ │
│                    │ │ │ [Av] Team Alpha│Team │ ████ 85% │ [Members][Msg] │ │
│                    │ │ │ [Av] Jane S.  │ Solo │ █░░░ 33% │ [Profile][Msg] │ │
│                    │ │ │ ...                                              │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── SUBMISSIONS TAB ──                                │
│                    │ │                                                      │
│                    │ │ FILTER ROW                                           │
│                    │ │ [Milestone: All ▼] [Status: All ▼] [🔍 Search...]    │
│                    │ │                                                      │
│                    │ │ SUBMISSION LIST                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Av] John Doe           Milestone 2    [Pending] │ │
│                    │ │ │      MVP Development                             │ │
│                    │ │ │      Submitted: Nov 28, 2025                     │ │
│                    │ │ │                                  [Review →]      │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ [Av] Team Alpha         Milestone 1   [Reviewed] │ │
│                    │ │ │      Project Proposal                            │ │
│                    │ │ │      Submitted: Nov 20  •  Score: 92/100         │ │
│                    │ │ │                                  [View Review]   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Review Submission**
**URL:** `platform.com/company/challenges/:challengeId/submissions/:submissionId`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > AI Bot > Submissions > John Doe         │
│                    │ │                                                      │
│                    │ │ ── SUBMISSION HEADER ──                              │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Avatar]  John Doe                               │ │
│                    │ │ │           Solo Participant                       │ │
│                    │ │ │           [View Full Profile]                    │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Milestone: MVP Development                       │ │
│                    │ │ │ Submitted: Nov 28, 2025 at 3:45 PM               │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── SUBMISSION CONTENT ──                             │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ GitHub Repository:                               │ │
│                    │ │ │ 🔗 https://github.com/johndoe/ai-customer-bot    │ │
│                    │ │ │                                  [Open in new tab]│ │
│                    │ │ │                                                  │ │
│                    │ │ │ Demo URL:                                        │ │
│                    │ │ │ 🔗 https://ai-bot-demo.vercel.app                │ │
│                    │ │ │                                  [Open in new tab]│ │
│                    │ │ │                                                  │ │
│                    │ │ │ Written Response:                                │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ Our MVP implements the core chatbot        │   │ │
│                    │ │ │ │ functionality using a transformer-based    │   │ │
│                    │ │ │ │ model fine-tuned on customer service data. │   │ │
│                    │ │ │ │ Key features include:                      │   │ │
│                    │ │ │ │ - Intent classification                    │   │ │
│                    │ │ │ │ - FAQ matching                             │   │ │
│                    │ │ │ │ - Escalation routing...                    │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── YOUR REVIEW ──                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Score *                                          │ │
│                    │ │ │ ┌────────────────────────┐                       │ │
│                    │ │ │ │ 85                     │  / 100                │ │
│                    │ │ │ └────────────────────────┘                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Feedback *                                       │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ Great work on the MVP! The intent          │   │ │
│                    │ │ │ │ classification works well. A few           │   │ │
│                    │ │ │ │ suggestions for improvement:               │   │ │
│                    │ │ │ │ - Add more robust error handling           │   │ │
│                    │ │ │ │ - Consider adding conversation context...  │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │       [Save as Draft]        [Submit Review]     │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── PREVIOUS REVIEWS (if any) ──                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Milestone 1: Project Proposal                    │ │
│                    │ │ │ Score: 88/100                                    │ │
│                    │ │ │ "Solid proposal with clear technical approach...│ │
│                    │ │ │                                                  │ │
│                    │ │ │ Reviewed: Nov 23, 2025                           │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Talent Search**
**URL:** `platform.com/company/talent`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Find Talent"                                        │
│                    │ │                                                      │
│                    │ │ SEARCH & FILTERS                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ 🔍 Search by name, skills, or keywords...        │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ADVANCED FILTERS (collapsible)                       │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Skills:                                          │ │
│                    │ │ │ ┌──────────────────────────────────────────────┐ │ │
│                    │ │ │ │ [Python ×] [React ×] [+ Add skill]           │ │ │
│                    │ │ │ └──────────────────────────────────────────────┘ │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Skill Level:  [Any ▼]                            │ │
│                    │ │ │ Education:    [Any ▼]                            │ │
│                    │ │ │ Min Completed Challenges: [0 ▼]                  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Apply Filters]  [Clear All]                     │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ RESULTS (showing 24 matches)                         │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Avatar]  John Doe                               │ │
│                    │ │ │           Full Stack Developer                   │ │
│                    │ │ │           Stanford University                    │ │
│                    │ │ │                                                  │ │
│                    │ │ │  ┌─────────────────────────────────────────────┐ │ │
│                    │ │ │  │ 🎯 Match Score: 94%                         │ │ │
│                    │ │ │  │    Based on skills and challenge performance│ │ │
│                    │ │ │  └─────────────────────────────────────────────┘ │ │
│                    │ │ │                                                  │ │
│                    │ │ │  Top Skills:                                     │ │
│                    │ │ │  [Python ⭐⭐⭐] [React ⭐⭐⭐] [NLP ⭐⭐]           │ │
│                    │ │ │                                                  │ │
│                    │ │ │  Challenges: 5 completed  •  Avg Score: 89/100  │ │
│                    │ │ │                                                  │ │
│                    │ │ │  [View Full Profile]     [💬 Start Conversation] │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Avatar]  Jane Smith                             │ │
│                    │ │ │           Backend Engineer                       │ │
│                    │ │ │           MIT                                    │ │
│                    │ │ │                                                  │ │
│                    │ │ │  🎯 Match Score: 87%                              │ │
│                    │ │ │  ...                                             │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ PAGINATION                                           │
│                    │ │        [< Prev]  1  2  3  4  5  [Next >]             │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Organization Settings (Company)**
**URL:** `platform.com/company/organization`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Organization Settings"                              │
│                    │ │                                                      │
│                    │ │ ── COMPANY PROFILE ──                                │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Company Logo                                     │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │ [Logo] │  [Change Logo]                        │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Company Name *                                   │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ TechCorp Inc.                              │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Industry *                                       │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ Technology                               ▼ │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Website                                          │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ https://techcorp.com                       │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ About Company *                                  │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ TechCorp is a leading provider of          │   │ │
│                    │ │ │ │ enterprise software solutions...           │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │                            [Save Changes]        │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── TEAM MEMBERS ──                                   │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Seats: 3 / 5 used                [Request More]  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ [Av] Sarah Johnson     sarah@techcorp.com  │   │ │
│                    │ │ │ │      Org Admin                      [You]  │   │ │
│                    │ │ │ ├────────────────────────────────────────────┤   │ │
│                    │ │ │ │ [Av] Mike Chen         mike@techcorp.com   │   │ │
│                    │ │ │ │      Member                     [Remove]   │   │ │
│                    │ │ │ ├────────────────────────────────────────────┤   │ │
│                    │ │ │ │ [Av] Lisa Park         lisa@techcorp.com   │   │ │
│                    │ │ │ │      Member                     [Remove]   │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [+ Invite Team Member]                           │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

**Invite Team Member Modal:**
┌───────────────────────────────────────────────────────────────┐
│                  Invite Team Member                    [×]    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Email Address:                                              │
│   ┌─────────────────────────────────────────────────────┐     │
│   │ newmember@techcorp.com                              │     │
│   └─────────────────────────────────────────────────────┘     │
│                                                               │
│   Role:                                                       │
│   ○ Org Admin (Full access)                                   │
│   ● Member (Can manage challenges, no org settings)           │
│                                                               │
│   An invitation email will be sent to this address.           │
│   They'll need to create a password to access the platform.   │
│                                                               │
│              [Cancel]           [Send Invitation]             │
│                                                               │
└───────────────────────────────────────────────────────────────┘

---

### 2.4 Web Platform — Admin Portal

---

#### **Screen: Admin Login**
**URL:** `admin.platform.com` or `platform.com/admin/login`
┌─────────────────────────────────────────────────────────────────────────────┐
│ MINIMAL NAVBAR                                                              │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo] Admin Portal                                                     │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ LOGIN FORM (centered card)                                                  │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                    "Admin Portal Login"                                 │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Email Address                           │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │ Password                        [Show]  │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     ┌─────────────────────────────────────────┐                        │ │
│ │     │              [Login]                    │                        │ │
│ │     └─────────────────────────────────────────┘                        │ │
│ │                                                                         │ │
│ │     [Forgot Password?]                                                 │ │
│ │                                                                         │ │
│ │     Note: Admin accounts are created internally.                       │ │
│ │     Contact IT if you need access.                                     │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: Admin Dashboard**
**URL:** `admin.platform.com/dashboard`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR (Admin variant)                                                  │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo] Admin                                  [🔔 12] [Admin Name ▼]   │ │
│ │                                                       └─ Settings       │ │
│ │                                                       └─ Logout         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│ ┌────────────────┐ │ ┌──────────────────────────────────────────────────────┐
│ │                │ │ │ PAGE HEADER                                          │
│ │ [📊] Dashboard │ │ │ "Admin Dashboard"                                    │
│ │                │ │ │                                                      │
│ │ [👥] User      │ │ │ KEY METRICS (4-column cards)                         │
│ │     Management │ │ │ ┌────────────┬────────────┬────────────┬───────────┐ │
│ │                │ │ │ │ Total      │ Total      │ Active     │ Pending   │ │
│ │ [📋] Challenge │ │ │ │ Students   │ Companies  │ Challenges │ Approvals │ │
│ │     Management │ │ │ │   1,245    │     87     │     34     │    12     │ │
│ │                │ │ │ │ (+45 week) │ (+3 week)  │            │           │ │
│ │ [📈] Analytics │ │ │ └────────────┴────────────┴────────────┴───────────┘ │
│ │                │ │ │                                                      │
│ │ [⚙️] Platform  │ │ │ PENDING ACTIONS                        [View All →] │
│ │     Settings   │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ ⏳ PENDING QUEUE                                  │ │
│ │ [💬] Support   │ │ │ │                                                  │ │
│ │     Messages   │ │ │ │ Challenge Approvals (5)                          │ │
│ │                │ │ │ │ ┌────────────────────────────────────────────┐   │ │
│ │ ────────────── │ │ │ │ │ [Logo] Mobile App Redesign - DesignStudio │   │ │
│ │                │ │ │ │ │        Submitted 2 hours ago   [Review →] │   │ │
│ │ [🔧] Settings  │ │ │ │ └────────────────────────────────────────────┘   │ │
│ │                │ │ │ │ ┌────────────────────────────────────────────┐   │ │
│ │                │ │ │ │ │ [Logo] Data Pipeline Challenge - DataCo   │   │ │
│ │                │ │ │ │ │        Submitted 1 day ago     [Review →] │   │ │
│ │                │ │ │ │ └────────────────────────────────────────────┘   │ │
│ │                │ │ │ │                                                  │ │
│ │                │ │ │ │ Company Verifications (3)                        │ │
│ │                │ │ │ │ ┌────────────────────────────────────────────┐   │ │
│ │                │ │ │ │ │ NewStartup Inc.  •  startup@newco.com      │   │ │
│ │                │ │ │ │ │ Registered 3 hours ago    [Verify →]       │   │ │
│ │                │ │ │ │ └────────────────────────────────────────────┘   │ │
│ │                │ │ │ │                                                  │ │
│ │                │ │ │ │ Challenge Briefs (2)                             │ │
│ │                │ │ │ │ ┌────────────────────────────────────────────┐   │ │
│ │                │ │ │ │ │ [Logo] "Customer Service Automation"       │   │ │
│ │                │ │ │ │ │        TechCorp  •  2 days ago             │   │ │
│ │                │ │ │ │ │                   [Create Challenge →]     │   │ │
│ │                │ │ │ │ └────────────────────────────────────────────┘   │ │
│ │                │ │ │ │                                                  │ │
│ │                │ │ │ │ Cancellation Requests (2)                        │ │
│ │                │ │ │ │ ┌────────────────────────────────────────────┐   │ │
│ │                │ │ │ │ │ E-commerce Platform - ShopCo               │   │ │
│ │                │ │ │ │ │ Reason: "Project pivot"  [Review →]        │   │ │
│ │                │ │ │ │ └────────────────────────────────────────────┘   │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │                │ │ │ RECENT ACTIVITY                                      │
│ │                │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ • New company registered: InnovateCorp    2m ago │ │
│ │                │ │ │ │ • Challenge approved: AI Bot             15m ago │ │
│ │                │ │ │ │ • User John Doe completed challenge      1hr ago │ │
│ │                │ │ │ │ • New support message from TechCorp      2hr ago │ │
│ │                │ │ │ │ • ...                                            │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ └────────────────┘ │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: User Management — Students**
**URL:** `admin.platform.com/users/students`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "User Management"                                    │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [Students (1,245)] [Companies (87)] [Evaluators (12)]│
│                    │ │ [Admins (4)]                                         │
│                    │ │ ════════════════                                     │
│                    │ │                                                      │
│                    │ │ SEARCH & FILTERS                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ 🔍 Search by name, email...                      │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │ [Status: All ▼] [Has Restrictions ▼] [Export CSV]    │
│                    │ │                                                      │
│                    │ │ STUDENT TABLE                                        │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ □ Name         │Email       │Status│Chall│Actions│ │
│                    │ │ ├────────────────┼────────────┼──────┼─────┼───────┤ │
│                    │ │ │ □ [Av] John D. │john@...    │Active│ 2/3 │[⋮]    │ │
│                    │ │ │ □ [Av] Jane S. │jane@...    │Active│ 1/3 │[⋮]    │ │
│                    │ │ │ □ [Av] Bob J.  │bob@...     │Restri│ 3/3 │[⋮]    │ │
│                    │ │ │                │            │cted  │     │       │ │
│                    │ │ │ □ [Av] Alice B.│alice@...   │Suspen│ 0/3 │[⋮]    │ │
│                    │ │ │                │            │ded   │     │       │ │
│                    │ │ │ ...                                              │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ [⋮] Actions dropdown:                                │
│                    │ │  • View Profile                                      │
│                    │ │  • Edit User                                         │
│                    │ │  • View Challenges                                   │
│                    │ │  • Suspend User                                      │
│                    │ │  • Delete User                                       │
│                    │ │                                                      │
│                    │ │ PAGINATION                                           │
│                    │ │ Showing 1-25 of 1,245    [< Prev] 1 2 3 ... [Next >] │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Edit Student Modal (Admin)**
┌───────────────────────────────────────────────────────────────────────────────┐
│                           Edit Student: John Doe                        [×]   │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│   ── ACCOUNT STATUS ──                                                        │
│                                                                               │
│   Status:  ○ Active  ○ Suspended  ○ Banned                                    │
│                                                                               │
│   ── CHALLENGE LIMITS ──                                                      │
│                                                                               │
│   Max Active Challenges:                                                      │
│   ┌────────────────────┐                                                      │
│   │ 3                  │  (Platform default: 3)                               │
│   └────────────────────┘                                                      │
│                                                                               │
│   Current Active: 2                                                           │
│                                                                               │
│   ── WITHDRAWAL RESTRICTION ──                                                │
│                                                                               │
│   Has Withdrawal Cooldown: [Toggle: ON]                                       │
│   Cooldown Expires: Dec 15, 2025                                              │
│                                                                               │
│   [Clear Cooldown]  (Allow user to join new challenges immediately)           │
│                                                                               │
│   ── MANUAL SKILL ADJUSTMENT ──                                               │
│                                                                               │
│   Challenge Skills (earned):                                                  │
│   [Python ×] [NLP ×] [D3.js ×]                                               │
│   [+ Add Skill]                                                               │
│                                                                               │
│   ── ADMIN NOTES ──                                                           │
│   ┌─────────────────────────────────────────────────────────────────────┐     │
│   │ User requested cooldown reset due to family emergency...            │     │
│   └─────────────────────────────────────────────────────────────────────┘     │
│                                                                               │
│                       [Cancel]                [Save Changes]                  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: User Management — Companies**
**URL:** `admin.platform.com/users/companies`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TAB: Companies                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ SEARCH & FILTERS                                                            │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search by company name, email...                                     │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│ [Status: All ▼] [Industry: All ▼] [Verification: All ▼]                     │
│                                                                             │
│ COMPANY TABLE                                                               │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ □ Company      │Industry   │Verified│Seats│Challenges│Actions          │ │
│ ├────────────────┼───────────┼────────┼─────┼──────────┼─────────────────┤ │
│ │ □ [Lo]TechCorp │Technology │   ✓    │ 3/5 │    12    │ [View][Edit]    │ │
│ │ □ [Lo]DesignSt │Design     │   ✓    │ 2/3 │    5     │ [View][Edit]    │ │
│ │ □ [Lo]NewStart │Technology │   ⏳    │ 1/2 │    0     │ [View][Verify]  │ │
│ │ ...                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ [⏳] = Pending Verification                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

**Edit Company Modal includes:**
- Verification status toggle
- Seat allocation adjustment
- Organization details editing
- Suspend/Delete options

---

#### **Screen: User Management — Evaluators**
**URL:** `admin.platform.com/users/evaluators`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TAB: Evaluators                                           [+ Create Evaluator]
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ EVALUATOR TABLE                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ Name          │Email            │Status │Assigned   │Reviews  │Actions  │ │
│ ├───────────────┼─────────────────┼───────┼───────────┼─────────┼─────────┤ │
│ │ [Av] Dr. Lee  │lee@uni.edu      │Active │ 3 chall.  │   45    │[⋮]      │ │
│ │ [Av] Prof. K  │kim@eval.com     │Active │ 2 chall.  │   28    │[⋮]      │ │
│ │ [Av] Ms. Chen │chen@expert.com  │Inactiv│ 0 chall.  │   12    │[⋮]      │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

**Create Evaluator Modal:**
┌───────────────────────────────────────────────────────────────────────────────┐
│                           Create Evaluator Account                      [×]   │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│   Full Name *                                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐     │
│   │ Dr. Sarah Lee                                                       │     │
│   └─────────────────────────────────────────────────────────────────────┘     │
│                                                                               │
│   Email Address *                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐     │
│   │ sarah.lee@university.edu                                            │     │
│   └─────────────────────────────────────────────────────────────────────┘     │
│                                                                               │
│   Assign to Challenges (Optional):                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐     │
│   │ 🔍 Search challenges...                                             │     │
│   └─────────────────────────────────────────────────────────────────────┘     │
│   Selected: [AI Customer Service Bot ×] [Data Pipeline ×]                     │
│                                                                               │
│   A temporary password will be emailed to this address.                       │
│                                                                               │
│                       [Cancel]                [Create Account]                │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘

---

#### **Screen: Challenge Management (Admin)**
**URL:** `admin.platform.com/challenges`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Challenge Management"              [+ Create Challenge]
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [All(45)] [Pending Approval(5)] [Briefs(2)]          │
│                    │ │ [Cancellation Requests(2)] [Active(15)] [Completed(20)]
│                    │ │                                                      │
│                    │ │ ── PENDING APPROVAL TAB ──                           │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] Mobile App Redesign                       │ │
│                    │ │ │        DesignStudio                              │ │
│                    │ │ │        Submitted: Nov 28, 2025 (2 hours ago)     │ │
│                    │ │ │                                                  │ │
│                    │ │ │        Industry: Design | Difficulty: Inter.    │ │
│                    │ │ │        Duration: 21 days | Milestones: 4         │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Preview] [Approve] [Edit & Approve] [Reject]    │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── BRIEFS TAB ──                                     │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] "Customer Service Automation"             │ │
│                    │ │ │        TechCorp Inc.                             │ │
│                    │ │ │        Submitted: Nov 26, 2025                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │        Brief Summary:                            │ │
│                    │ │ │        "We're looking to automate our customer   │ │
│                    │ │ │        service workflows. Currently..."          │ │
│                    │ │ │                                                  │ │
│                    │ │ │        Preferred: 2-4 weeks | Intermediate       │ │
│                    │ │ │        Attachments: 1 file                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [View Full Brief] [Create Challenge from Brief]  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── CANCELLATION REQUESTS TAB ──                      │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] E-commerce Platform Overhaul              │ │
│                    │ │ │        ShopCo                                    │ │
│                    │ │ │        Challenge Status: In Progress (23 partic.)│ │
│                    │ │ │                                                  │ │
│                    │ │ │        Cancellation Reason:                      │ │
│                    │ │ │        "Company pivot - project no longer needed"│ │
│                    │ │ │                                                  │ │
│                    │ │ │        Impact: 23 participants will be notified  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [View Challenge] [Approve Cancellation] [Reject] │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────VContinue────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Challenge Review (Admin)**
**URL:** `admin.platform.com/challenges/:id/review`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Challenges > Pending > Mobile App Redesign           │
│                    │ │                                                      │
│                    │ │ ── CHALLENGE PREVIEW ──                              │
│                    │ │ (Full preview of challenge as students would see it) │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [DesignStudio Logo]                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ "Mobile App Redesign"                            │ │
│                    │ │ │ by DesignStudio                                  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Design] [Intermediate] [Team/Solo]              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Duration: Dec 1 - Dec 21, 2025 (21 days)         │ │
│                    │ │ │ Capacity: 50 participants / 20 teams             │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Description:                                     │ │
│                    │ │ │ Redesign our mobile banking application with     │ │
│                    │ │ │ a focus on accessibility and user experience...  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Milestones (4):                                  │ │
│                    │ │ │ 1. Research & Analysis - Dec 5                   │ │
│                    │ │ │ 2. Wireframes - Dec 10                           │ │
│                    │ │ │ 3. High-Fidelity Mockups - Dec 17                │ │
│                    │ │ │ 4. Final Presentation - Dec 21                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Skills: UI Design, UX Research, Figma, Prototyping
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── ADMIN ACTIONS ──                                  │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │                                                  │ │
│                    │ │ │ [✓ Approve]                                      │ │
│                    │ │ │ Challenge will go live immediately.              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [✏️ Edit & Approve]                               │ │
│                    │ │ │ Make changes before approving.                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [✗ Reject]                                       │ │
│                    │ │ │ Rejection Reason (required):                     │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ Please provide more detail in milestone 2  │   │ │
│                    │ │ │ │ requirements...                            │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │ [Send Rejection]                                 │ │
│                    │ │ │                                                  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── ADMIN OVERRIDES (if Edit & Approve) ──            │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Override Capacity:                               │ │
│                    │ │ │ Max Participants: [50]  Max Teams: [20]          │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Assign Evaluator:                                │ │
│                    │ │ │ ┌────────────────────────────────────────────┐   │ │
│                    │ │ │ │ 🔍 Search evaluators...                    │   │ │
│                    │ │ │ └────────────────────────────────────────────┘   │ │
│                    │ │ │ Selected: [Dr. Sarah Lee ×]                      │ │
│                    │ │ │                                                  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Analytics Dashboard (Admin)**
**URL:** `admin.platform.com/analytics`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Analytics"                     [Date Range ▼] [Export]
│                    │ │                                 Last 30 days          │
│                    │ │                                                      │
│                    │ │ ── USER GROWTH ──                                    │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │                                                  │ │
│                    │ │ │     [Line Chart: Students & Companies over time] │ │
│                    │ │ │                                                  │ │
│                    │ │ │     ────── Students (1,245 total)                │ │
│                    │ │ │     ------ Companies (87 total)                  │ │
│                    │ │ │                                                  │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── CHALLENGE METRICS ──                              │
│                    │ │ ┌───────────────────┬──────────────────────────────┐ │
│                    │ │ │ SUMMARY CARDS     │ CHALLENGE FUNNEL             │ │
│                    │ │ │                   │                              │ │
│                    │ │ │ Created: 45       │ [Funnel Chart]               │ │
│                    │ │ │ Active: 15        │ Created: 45                  │ │
│                    │ │ │ Completed: 20     │ Approved: 42                 │ │
│                    │ │ │ Avg Participants: │ Started: 38                  │ │
│                    │ │ │   28 per challenge│ Completed: 20                │ │
│                    │ │ │ Completion Rate:  │                              │ │
│                    │ │ │   73%             │                              │ │
│                    │ │ └───────────────────┴──────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── ENGAGEMENT ──                                     │
│                    │ │ ┌───────────────────┬──────────────────────────────┐ │
│                    │ │ │ TOP SKILLS        │ TOP PERFORMING STUDENTS      │ │
│                    │ │ │ (In Demand)       │                              │ │
│                    │ │ │                   │ 1. John Doe - 5 completed    │ │
│                    │ │ │ 1. Python (234)   │ 2. Jane Smith - 4 completed  │ │
│                    │ │ │ 2. React (198)    │ 3. Bob Johnson - 4 completed │ │
│                    │ │ │ 3. Machine Learning│ 4. Alice Brown - 3 completed│ │
│                    │ │ │    (156)          │ 5. Charlie Davis - 3 complete│ │
│                    │ │ │ 4. UI/UX (145)    │                              │ │
│                    │ │ │ 5. Node.js (132)  │ [View Full Leaderboard]      │ │
│                    │ │ └───────────────────┴──────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── SUBMISSIONS & REVIEWS ──                          │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Total Submissions: 1,456                         │ │
│                    │ │ │ Avg Review Time: 2.3 days                        │ │
│                    │ │ │ Pending Reviews: 45                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Bar Chart: Submissions per week]                │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Platform Settings (Admin)**
**URL:** `admin.platform.com/settings`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ PAGE HEADER                                          │
│                    │ │ "Platform Settings"                                  │
│                    │ │                                                      │
│                    │ │ ── DEFAULT CONFIGURATIONS ──                         │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Student Limits                                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Max Active Challenges per Student:               │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │   3    │                                       │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Withdrawal Cooldown Period (days):               │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │   30   │                                       │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Team Settings                                    │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Default Max Team Size:                           │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │   4    │                                       │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Challenge Defaults                               │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Default Max Participants:                        │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │   50   │                                       │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Default Max Teams:                               │ │
│                    │ │ │ ┌────────┐                                       │ │
│                    │ │ │ │   20   │                                       │ │
│                    │ │ │ └────────┘                                       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Skill Settings                                   │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Max Skills per Proficiency Level:                │ │
│                    │ │ │ Advanced: [5]  Intermediate: [5]  Beginner: [5]  │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Total Max Portfolio Skills: 15                   │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │                            [Save All Changes]        │
│                    │ │                                                      │
│                    │ │ ── SKILL TAGS MANAGEMENT ──                          │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Available Skills:                     [+ Add New]│ │
│                    │ │ │                                                  │ │
│                    │ │ │ 🔍 Search skills...                              │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Python] [React] [JavaScript] [Machine Learning] │ │
│                    │ │ │ [UI/UX Design] [Node.js] [SQL] [Docker] ...      │ │
│                    │ │ │                                                  │ │
│                    │ │ │ Click skill to edit/delete                       │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ ── INDUSTRY TAGS MANAGEMENT ──                       │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ Available Industries:                 [+ Add New]│ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Technology] [Design] [Finance] [Healthcare]     │ │
│                    │ │ │ [Marketing] [Education] [E-commerce] ...         │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Support Messages (Admin)**
**URL:** `admin.platform.com/support`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT (2-panel like Messages)                   │
│                    │ ┌─────────────────────┬────────────────────────────────┐
│                    │ │ CONVERSATION LIST   │ CHAT VIEW                      │
│                    │ │                     │                                │
│                    │ │ FILTER: [All ▼]     │ ┌────────────────────────────┐ │
│                    │ │  - All              │ │ [Logo] TechCorp Inc.       │ │
│                    │ │  - Unread           │ │ Company • 3 messages       │ │
│                    │ │  - Companies        │ │ Topic: Seat Request        │ │
│                    │ │  - Students         │ └────────────────────────────┘ │
│                    │ │                     │                                │
│                    │ │ ┌─────────────────┐ │ [Message thread...]            │
│                    │ │ │ ● [Lo] TechCorp │ │                                │
│                    │ │ │   "Can we get..."│ │ [Company] Nov 28             │
│                    │ │ │   10 min ago     │ │ "Hi, we're expanding our     │
│                    │ │ └─────────────────┘ │  team and need 3 more seats.  │
│                    │ │                     │  Is this possible?"            │
│                    │ │ ┌─────────────────┐ │                                │
│                    │ │ │ ○ [Av] Jane S.  │ │ [Admin Response Area]          │
│                    │ │ │   "Having issue" │ │ ┌────────────────────────────┐
│                    │ │ │   2 hrs ago      │ │ │ Type response...           │
│                    │ │ └─────────────────┘ │ │                            │ │
│                    │ │                     │ └────────────────────────────┘ │
│                    │ │                     │           [Send]               │
│                    │ │                     │                                │
│                    │ │                     │ QUICK ACTIONS:                 │
│                    │ │                     │ [Update Seats] [View Company]  │
│                    │ └─────────────────────┴────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

### 2.5 Web Platform — Evaluator Portal

---

#### **Screen: Evaluator Dashboard**
**URL:** `evaluator.platform.com/dashboard` or `platform.com/evaluator/dashboard`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR (Evaluator variant)                                              │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [Logo] Evaluator Portal                       [🔔 3] [Dr. Lee ▼]        │ │
│ │                                                      └─ Settings        │ │
│ │                                                      └─ Logout          │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR (minimal)  │ MAIN CONTENT                                           │
│ ┌────────────────┐ │ ┌──────────────────────────────────────────────────────┐
│ │                │ │ │ PAGE HEADER                                          │
│ │ [📊] Dashboard │ │ │ "Welcome, Dr. Lee"                                   │
│ │                │ │ │                                                      │
│ │ [📋] My        │ │ │ QUICK STATS (3-column)                               │
│ │     Assignments│ │ │ ┌────────────────┬────────────────┬────────────────┐ │
│ │                │ │ │ │ Assigned       │ Pending        │ Completed      │ │
│ │ [📜] Review    │ │ │ │ Challenges     │ Reviews        │ Reviews        │ │
│ │     History    │ │ │ │      3         │      12        │      45        │ │
│ │                │ │ │ └────────────────┴────────────────┴────────────────┘ │
│ │ ────────────── │ │ │                                                      │
│ │                │ │ │ PENDING REVIEWS                        [View All →] │
│ │ [⚙️] Settings  │ │ │ ┌──────────────────────────────────────────────────┐ │
│ │                │ │ │ │ [Avatar] John Doe                                │ │
│ │                │ │ │ │ AI Customer Service Bot - Milestone 2            │ │
│ │                │ │ │ │ Submitted: Nov 28, 2025                          │ │
│ │                │ │ │ │                              [Review Now →]      │ │
│ │                │ │ │ ├──────────────────────────────────────────────────┤ │
│ │                │ │ │ │ [Avatar] Team Alpha                              │ │
│ │                │ │ │ │ AI Customer Service Bot - Milestone 2            │ │
│ │                │ │ │ │ Submitted: Nov 28, 2025                          │ │
│ │                │ │ │ │                              [Review Now →]      │ │
│ │                │ │ │ └──────────────────────────────────────────────────┘ │
│ │                │ │ │                                                      │
│ │                │ │ │ MY ASSIGNMENTS                                       │
│ │                │ │ │ ┌─────────────────┐ ┌─────────────────┐ ┌──────────┐ │
│ │                │ │ │ │ AI Customer     │ │ Data Pipeline   │ │ Mobile   │ │
│ │                │ │ │ │ Service Bot     │ │ Challenge       │ │ Redesign │ │
│ │                │ │ │ │                 │ │                 │ │          │ │
│ │                │ │ │ │ TechCorp        │ │ DataCo          │ │ Design   │ │
│ │                │ │ │ │ 8 pending       │ │ 3 pending       │ │ Studio   │ │
│ │                │ │ │ │ reviews         │ │ reviews         │ │ 1 pending│ │
│ │                │ │ │ │                 │ │                 │ │          │ │
│ │                │ │ │ │ [View →]        │ │ [View →]        │ │ [View →] │ │
│ │                │ │ │ └─────────────────┘ └─────────────────┘ └──────────┘ │
│ └────────────────┘ │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Evaluator Assignment Detail**
**URL:** `evaluator.platform.com/challenges/:id`
┌─────────────────────────────────────────────────────────────────────────────┐
│ TOP NAVBAR + SIDEBAR                                                        │
├────────────────────┬────────────────────────────────────────────────────────┤
│ SIDEBAR            │ MAIN CONTENT                                           │
│                    │ ┌──────────────────────────────────────────────────────┐
│                    │ │ BREADCRUMB                                           │
│                    │ │ Assignments > AI Customer Service Bot                │
│                    │ │                                                      │
│                    │ │ CHALLENGE HEADER (Read-only)                         │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Logo] "AI Customer Service Bot"                 │ │
│                    │ │ │ by TechCorp Inc.                                 │ │
│                    │ │ │                                                  │ │
│                    │ │ │ [Technology] [Intermediate] [In Progress]        │ │
│                    │ │ │ 23 Participants • 8 Teams                        │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ │                                                      │
│                    │ │ TAB NAVIGATION                                       │
│                    │ │ [Overview] [Participants] [Submissions]              │
│                    │ │                          ════════════                │
│                    │ │                                                      │
│                    │ │ ── SUBMISSIONS TAB ──                                │
│                    │ │                                                      │
│                    │ │ FILTER ROW                                           │
│                    │ │ [Milestone: All ▼] [Status: Pending ▼]               │
│                    │ │                                                      │
│                    │ │ SUBMISSIONS LIST                                     │
│                    │ │ ┌──────────────────────────────────────────────────┐ │
│                    │ │ │ [Av] John Doe (Solo)        Milestone 2  [Pending]│ │
│                    │ │ │      MVP Development                             │ │
│                    │ │ │      Submitted: Nov 28, 2025 3:45 PM             │ │
│                    │ │ │                              [Review →]          │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ [Av] Team Alpha (4 members) Milestone 2  [Pending]│ │
│                    │ │ │      MVP Development                             │ │
│                    │ │ │      Submitted: Nov 28, 2025 2:30 PM             │ │
│                    │ │ │                              [Review →]          │ │
│                    │ │ ├──────────────────────────────────────────────────┤ │
│                    │ │ │ [Av] Jane Smith (Solo)      Milestone 1 [Reviewed]│ │
│                    │ │ │      Project Proposal                            │ │
│                    │ │ │      Score: 88/100                               │ │
│                    │ │ │                          [View Review]           │ │
│                    │ │ └──────────────────────────────────────────────────┘ │
│                    │ └──────────────────────────────────────────────────────┘
└────────────────────┴────────────────────────────────────────────────────────┘

---

#### **Screen: Evaluator Review Submission**
(Same layout as Company review, but with Evaluator branding and read-only company info)

---

### 2.6 Mobile App — All Roles

The mobile app uses a **bottom tab navigation** pattern with content adapting based on user role.

---

#### **Mobile: Login & Sign Up**
┌─────────────────────────────┐
│         [Logo]              │
│                             │
│    "Welcome to Platform"    │
│                             │
│  ┌───────────────────────┐  │
│  │ Email                 │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ Password         [👁]  │  │
│  └───────────────────────┘  │
│                             │
│  [Forgot Password?]         │
│                             │
│  ┌───────────────────────┐  │
│  │       [Login]         │  │
│  └───────────────────────┘  │
│                             │
│  ─────────── OR ──────────  │
│                             │
│  ┌───────────────────────┐  │
│  │ [G] Continue w/ Google│  │
│  └───────────────────────┘  │
│                             │
│  Don't have an account?     │
│  [Sign Up]                  │
│                             │
│  I'm a company:             │
│  [Register Company]         │
│                             │
└─────────────────────────────┘

---

#### **Mobile: Student Dashboard (Home Tab)**
┌─────────────────────────────┐
│ ☰  Dashboard           🔔 3 │
├─────────────────────────────┤
│                             │
│  Welcome back, John!        │
│  You have 2 active          │
│  challenges.                │
│                             │
│  ┌─────────────────────┐    │
│  │ 2/3     │ 5     │ 12│    │
│  │ Active  │Compl. │Skills  │
│  └─────────────────────┘    │
│                             │
│  ACTIVE CHALLENGES          │
│  ┌───────────────────────┐  │
│  │ [Logo] AI Customer    │  │
│  │ Service Bot           │  │
│  │ TechCorp              │  │
│  │ ████████░░ 67%        │  │
│  │ Due: Dec 15      [→]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Logo] Mobile App     │  │
│  │ Redesign              │  │
│  │ DesignStudio          │  │
│  │ ████░░░░░░ 33%        │  │
│  │ Due: Dec 20      [→]  │  │
│  └───────────────────────┘  │
│                             │
│  RECOMMENDED                │
│  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │     │ │     │ │     │   │
│  └─────┘ └─────┘ └─────┘   │
│  (horizontal scroll)        │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
│ Home Browse Chall Team Prof │
└─────────────────────────────┘

---

#### **Mobile: Browse Challenges Tab**
┌─────────────────────────────┐
│ ←  Browse Challenges        │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ 🔍 Search challenges  │  │
│  └───────────────────────┘  │
│                             │
│  FILTERS (horizontal scroll)│
│  [Industry▼][Level▼][Type▼] │
│                             │
│  24 results                 │
│                             │
│  ┌───────────────────────┐  │
│  │ [Logo]                │  │
│  │ Data Viz Dashboard    │  │
│  │ DataCorp              │  │
│  │                       │  │
│  │ [Tech][Intermediate]  │  │
│  │ [Team]                │  │
│  │                       │  │
│  │ 15/50 • Ends Dec 20   │  │
│  │               [View]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Logo]                │  │
│  │ Marketing Strategy    │  │
│  │ ...                   │  │
│  └───────────────────────┘  │
│                             │
│  (scrollable list)          │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Challenge Detail**
┌─────────────────────────────┐
│ ←  Challenge Details        │
├─────────────────────────────┤
│                             │
│  [Company Logo - Large]     │
│                             │
│  AI Customer Service Bot    │
│  by TechCorp Inc.           │
│                             │
│  [🏷Tech][⚡Inter.][👥Team]  │
│                             │
│  23/50 joined • Dec 15      │
│                             │
│  ┌───────────────────────┐  │
│  │    [Join Solo]        │  │
│  └───────────────────────┘  │
│  ┌───────────────────────┐  │
│  │  [Join with Team]     │  │
│  └───────────────────────┘  │
│                             │
│  ─────────────────────────  │
│                             │
│  TABS: [Overview][Milest..]│
│  ════════                   │
│                             │
│  Description                │
│  Build an AI-powered        │
│  customer service chatbot   │
│  that can handle common     │
│  inquiries...               │
│  [Read More]                │
│                             │
│  Timeline                   │
│  Nov 15 - Dec 15 (30 days)  │
│                             │
│  Skills Earned              │
│  [Python][NLP][APIs]        │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: My Challenges Tab**
┌─────────────────────────────┐
│ ←  My Challenges            │
├─────────────────────────────┤
│                             │
│  Slots: 2/3 used            │
│                             │
│  [Active(2)][Complete][Canc]│
│   ════════                  │
│                             │
│  ┌───────────────────────┐  │
│  │ AI Customer Service   │  │
│  │ TechCorp         [→]  │  │
│  │ ████████░░ 67%        │  │
│  │ Next: Milestone 2     │  │
│  │ Team: Alpha           │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ Mobile App Redesign   │  │
│  │ DesignStudio     [→]  │  │
│  │ ████░░░░░░ 33%        │  │
│  │ Next: Milestone 1     │  │
│  │ Solo                  │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Challenge Progress (Student)**
┌─────────────────────────────┐
│ ←  AI Customer Service Bot  │
├─────────────────────────────┤
│                             │
│  [Logo] TechCorp            │
│  Progress: ████████░░ 67%   │
│  Team: Alpha (4 members)    │
│                             │
│  [💬 Message] [⚠️ Withdraw]  │
│                             │
│  ─────────────────────────  │
│                             │
│  MILESTONES                 │
│                             │
│  ┌───────────────────────┐  │
│  │ ✓ Milestone 1         │  │
│  │   Project Proposal    │  │
│  │   Submitted: Nov 20   │  │
│  │   Score: 85/100       │  │
│  │             [View →]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ ◐ Milestone 2         │  │
│  │   MVP Development     │  │
│  │   Due: Dec 5 (7 days) │  │
│  │                       │  │
│  │   [Add Submission]    │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ ○ Milestone 3 [🔒]    │  │
│  │   Final Submission    │  │
│  │   Due: Dec 15         │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: My Team Tab**
┌─────────────────────────────┐
│ ←  My Team                  │
├─────────────────────────────┤
│                             │
│  Team Alpha                 │
│  4/4 members (Full)         │
│                             │
│  ┌───────────────────────┐  │
│  │ [Av] John Doe    👑   │  │
│  │      Leader           │  │
│  ├───────────────────────┤  │
│  │ [Av] Jane Smith       │  │
│  │      Member           │  │
│  ├───────────────────────┤  │
│  │ [Av] Bob Johnson      │  │
│  │      Member           │  │
│  ├───────────────────────┤  │
│  │ [Av] Alice Brown      │  │
│  │      Member           │  │
│  └───────────────────────┘  │
│                             │
│  Active Challenge:          │
│  AI Customer Service Bot    │
│                             │
│  ┌───────────────────────┐  │
│  │    [💬 Team Chat]     │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [📋 Copy Invite Link] │  │
│  └───────────────────────┘  │
│  (disabled - team full)     │
│                             │
│  ┌───────────────────────┐  │
│  │ [👑 Transfer Leader]  │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Profile Tab (Student)**
┌─────────────────────────────┐
│ ←  My Profile      [✏️ Edit] │
├─────────────────────────────┤
│                             │
│       [Large Avatar]        │
│                             │
│       John Doe              │
│    Full Stack Developer     │
│    San Francisco, CA        │
│                             │
│  [in][gh][fb]  [📄 Resume]  │
│                             │
│  ─────────────────────────  │
│                             │
│  BIO                        │
│  Passionate software        │
│  developer with 2 years...  │
│                             │
│  ─────────────────────────  │
│                             │
│  PORTFOLIO SKILLS           │
│  Advanced:                  │
│  [JS⭐⭐⭐][React⭐⭐⭐]        │
│                             │
│  Intermediate:              │
│  [Python⭐⭐][Docker⭐⭐]      │
│                             │
│  ─────────────────────────  │
│                             │
│  CHALLENGE SKILLS           │
│  [D3.js][NLP][APIs]         │
│                             │
│  ─────────────────────────  │
│                             │
│  EDUCATION                  │
│  🎓 Stanford University     │
│     B.S. Computer Science   │
│                             │
│  ─────────────────────────  │
│                             │
│  PROJECTS                   │
│  ┌───────────────────────┐  │
│  │ Weather Dashboard     │  │
│  │ React + D3.js    [🔗] │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Messages (Accessible from notification or menu)**
┌─────────────────────────────┐
│ ←  Messages                 │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ [Logo] TechCorp    ●  │  │
│  │ "Thanks for the..."   │  │
│  │ 2 min ago             │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Av] Team Alpha Chat  │  │
│  │ "See you at the..."   │  │
│  │ 1 hr ago              │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Logo] DesignStudio   │  │
│  │ "Your submission..."  │  │
│  │ Yesterday             │  │
│  └───────────────────────┘  │
│                             │
│  (scrollable list)          │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Chat View**
┌─────────────────────────────┐
│ ←  TechCorp Inc.            │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ Great progress on     │  │
│  │ your milestone 1      │  │
│  │ submission! We have   │  │
│  │ a few questions...    │  │
│  │              10:30 AM │  │
│  └───────────────────────┘  │
│                             │
│              ┌────────────┐ │
│              │ Thanks! We │ │
│              │ would be   │ │
│              │ happy to   │ │
│              │ clarify... │ │
│              │   11:15 AM │ │
│              └────────────┘ │
│                             │
│  ┌───────────────────────┐  │
│  │ Perfect, can you      │  │
│  │ elaborate on the      │  │
│  │ training data...      │  │
│  │               2:00 PM │  │
│  └───────────────────────┘  │
│                             │
│  (scrollable)               │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ Type a message...     │   │
│ └───────────────────────┘   │
│                    [Send →] │
└─────────────────────────────┘

---

#### **Mobile: Notifications**
┌─────────────────────────────┐
│ ←  Notifications   [Mark All]│
├─────────────────────────────┤
│                             │
│  Today                      │
│                             │
│  ┌───────────────────────┐  │
│  │ ● [Logo] TechCorp     │  │
│  │   New feedback on     │  │
│  │   Milestone 1         │  │
│  │   2 hrs ago      [→]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ ● [Av] Jane Smith     │  │
│  │   New team message    │  │
│  │   5 hrs ago      [→]  │  │
│  └───────────────────────┘  │
│                             │
│  Yesterday                  │
│                             │
│  ┌───────────────────────┐  │
│  │ ○ [📅] Reminder       │  │
│  │   Milestone 2 due in  │  │
│  │   7 days              │  │
│  │   Yesterday      [→]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ ○ [⚠️] Challenge Update │
│  │   Mobile App Redesign │  │
│  │   details updated     │  │
│  │   Yesterday      [→]  │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ [🏠]  [🔍]  [📁]  [👥]  [👤] │
└─────────────────────────────┘

---

#### **Mobile: Company Dashboard**
┌─────────────────────────────┐
│ ☰  TechCorp Dashboard  🔔 5 │
├─────────────────────────────┤
│                             │
│  Welcome, TechCorp!         │
│                             │
│  ┌─────────────────────┐    │
│  │  3   │  127 │   8  │    │
│  │Active│Partic│Pending│    │
│  │Chall │ipants│Reviews│    │
│  └─────────────────────┘    │
│                             │
│  RECENT SUBMISSIONS         │
│  ┌───────────────────────┐  │
│  │ [Av] John Doe         │  │
│  │ AI Bot - Milestone 2  │  │
│  │ 2 hrs ago    [Review] │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Av] Team Alpha       │  │
│  │ AI Bot - Milestone 1  │  │
│  │ Yesterday    [Review] │  │
│  └───────────────────────┘  │
│                             │
│  ACTIVE CHALLENGES          │
│  ┌───────────────────────┐  │
│  │ AI Customer Service   │  │
│  │ 23 participants       │  │
│  │ [In Progress] [→]     │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │   [+ Create Challenge]│  │
│  └───────────────────────┘  │
│                             │
│  ─────────────────────────  │
│  [❓ Admin Support]         │
│                             │
├─────────────────────────────┤
│[🏠][📋][🔍][💬][⚙️]          │
│Home Chall Talent Msg Settings│
└─────────────────────────────┘

---

#### **Mobile: Admin Dashboard**
┌─────────────────────────────┐
│ ☰  Admin Dashboard    🔔 12 │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ 1,245 │  87  │  12   │  │
│  │Students│Compan│Pending│  │
│  └───────────────────────┘  │
│                             │
│  PENDING ACTIONS            │
│                             │
│  Challenge Approvals (5)    │
│  ┌───────────────────────┐  │
│  │ [Lo] Mobile Redesign  │  │
│  │ DesignStudio          │  │
│  │ 2 hrs ago    [Review] │  │
│  └───────────────────────┘  │
│                             │
│  Company Verifications (3)  │
│  ┌───────────────────────┐  │
│  │ NewStartup Inc.       │  │
│  │ 3 hrs ago    [Verify] │  │
│  └───────────────────────┘  │
│                             │
│  Cancellation Requests (2)  │
│  ┌───────────────────────┐  │
│  │ E-commerce Platform   │  │
│  │ ShopCo       [Review] │  │
│  └───────────────────────┘  │
│                             │
│  Support Messages (2)       │
│  ┌───────────────────────┐  │
│  │ TechCorp - Seat req.  │  │
│  │ 10 min ago    [Reply] │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│[🏠][👥][📋][📈][⚙️]          │
│Dash Users Chall Analy Sett  │
└─────────────────────────────┘

---

#### **Mobile: Evaluator Dashboard**
┌─────────────────────────────┐
│ ☰  Evaluator Portal    🔔 3 │
├─────────────────────────────┤
│                             │
│  Welcome, Dr. Lee           │
│                             │
│  ┌───────────────────────┐  │
│  │   3   │  12  │   45  │  │
│  │Assign │Pend. │Complet│  │
│  │Chall. │Review│Reviews│  │
│  └───────────────────────┘  │
│                             │
│  PENDING REVIEWS            │
│  ┌───────────────────────┐  │
│  │ [Av] John Doe         │  │
│  │ AI Bot - Milestone 2  │  │
│  │ Submitted: Nov 28     │  │
│  │           [Review →]  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [Av] Team Alpha       │  │
│  │ AI Bot - Milestone 2  │  │
│  │ Submitted: Nov 28     │  │
│  │           [Review →]  │  │
│  └───────────────────────┘  │
│                             │
│  MY ASSIGNMENTS             │
│  ┌───────┐ ┌───────┐        │
│  │AI Bot │ │Data   │        │
│  │8 pend.│ │Pipe   │        │
│  │  [→]  │ │3 pend │        │
│  └───────┘ └───────┘        │
│                             │
├─────────────────────────────┤
│  [🏠]    [📋]    [📜]    [⚙️] │
│  Dash  Assign  History  Set │
└─────────────────────────────┘

---

## Part 3: Navigation Architecture

---

### 3.1 Web Navigation Map
PUBLIC WEB (platform.com)
│
├── Landing Page (/)
│   ├── How It Works
│   ├── For Companies
│   └── Featured Challenges
│
├── Auth
│   ├── Login (/login)
│   │   └── Forgot Password (/forgot-password)
│   │       └── Reset Password (/reset-password)
│   ├── Sign Up - Student (/signup/student)
│   │   └── Email Verification (/verify-email)
│   │       └── Profile Setup (/onboarding)
│   └── Sign Up - Company (/signup/company)
│       └── Email Verification
│           └── Pending Approval → Organization Setup
│
├── STUDENT DASHBOARD (authenticated)
│   │
│   ├── Dashboard (/dashboard)
│   │
│   ├── Browse Challenges (/challenges)
│   │   └── Challenge Detail (/challenges/:id)
│   │       ├── Join Solo → My Challenges
│   │       └── Join with Team → Team Selection → My Challenges
│   │
│   ├── My Challenges (/my-challenges)
│   │   └── Challenge Progress (/my-challenges/:id)
│   │       ├── View Submission
│   │       ├── Add Submission
│   │       ├── Message Company
│   │       └── Withdraw
│   │
│   ├── My Team (/team)
│   │   ├── Create Team
│   │   ├── Join Team
│   │   ├── Team Chat
│   │   └── Transfer Leadership
│   │
│   ├── Messages (/messages)
│   │   └── Chat View (/messages/:conversationId)
│   │
│   ├── Profile (/profile)
│   │   └── Edit Profile
│   │
│   ├── Notifications (/notifications)
│   │
│   └── Settings (/settings)
│
└── COMPANY DASHBOARD (authenticated)
│
├── Dashboard (/company/dashboard)
│   └── Admin Support
│
├── Challenges (/company/challenges)
│   ├── Create Challenge
│   │   ├── Manual (/company/challenges/create/manual)
│   │   │   └── Steps 1-5 → Submit for Approval
│   │   └── Submit Brief (/company/challenges/create/brief)
│   │       └── Confirmation
│   └── Challenge Management (/company/challenges/:id)
│       ├── Overview
│       ├── Participants → View Profile
│       ├── Submissions → Review Submission
│       └── Request Cancellation
│
├── Talent Search (/company/talent)
│   ├── Search & Filter
│   ├── View Profile
│   └── Start Conversation
│
├── Messages (/company/messages)
│   └── Chat View
│
├── Organization Settings (/company/organization)
│   ├── Company Profile
│   └── Team Members → Invite
│
└── Settings (/company/settings)
ADMIN PORTAL (admin.platform.com)
│
├── Login (/login)
│
├── Dashboard (/dashboard)
│   └── Pending Actions Queue
│
├── User Management (/users)
│   ├── Students (/users/students)
│   │   └── Edit Student (modal)
│   ├── Companies (/users/companies)
│   │   └── Edit/Verify Company (modal)
│   ├── Evaluators (/users/evaluators)
│   │   └── Create Evaluator (modal)
│   └── Admins (/users/admins)
│
├── Challenge Management (/challenges)
│   ├── All Challenges
│   ├── Pending Approval
│   │   └── Review Challenge (/challenges/:id/review)
│   │       └── Approve / Edit & Approve / Reject
│   ├── Briefs
│   │   └── Create Challenge from Brief
│   ├── Cancellation Requests
│   │   └── Approve / Reject Cancellation
│   └── Create Challenge (/challenges/create)
│
├── Analytics (/analytics)
│   ├── User Growth
│   ├── Challenge Metrics
│   └── Engagement
│
├── Platform Settings (/settings/platform)
│   ├── Default Configurations
│   ├── Skill Tags Management
│   └── Industry Tags Management
│
├── Support Messages (/support)
│   └── Conversation View
│
└── Settings (/settings)
EVALUATOR PORTAL (evaluator.platform.com)
│
├── Login (/login)
│
├── Dashboard (/dashboard)
│
├── My Assignments (/assignments)
│   └── Challenge Detail (/assignments/:id)
│       ├── Overview (read-only)
│       ├── Participants → View Profile
│       └── Submissions
│           └── Review Submission
│
├── Review History (/history)
│   └── View Review (read-only)
│
├── Notifications (/notifications)
│
└── Settings (/settings)

---

### 3.2 Mobile Navigation Map
MOBILE APP
│
├── Auth Stack
│   ├── Login
│   │   └── Forgot Password
│   ├── Sign Up (Role Selection)
│   │   ├── Student Sign Up → Email Verification → Onboarding
│   │   └── Company Sign Up → Email Verification → Pending → Setup
│   └── Email Verification
│
├── STUDENT TAB NAVIGATOR
│   │
│   ├── Home Tab (🏠)
│   │   └── Dashboard
│   │       ├── → Challenge Progress (navigate)
│   │       └── → Browse Challenges (navigate)
│   │
│   ├── Browse Tab (🔍)
│   │   └── Challenge List
│   │       └── Challenge Detail (stack)
│   │           └── Join Confirmation
│   │
│   ├── Challenges Tab (📁)
│   │   └── My Challenges List
│   │       └── Challenge Progress (stack)
│   │           ├── Submission Form (modal)
│   │           ├── Feedback View (stack)
│   │           └── Withdraw Confirmation (modal)
│   │
│   ├── Team Tab (👥)
│   │   └── Team View
│   │       ├── Team Chat (stack)
│   │       ├── Create Team (modal)
│   │       ├── Join Team (modal)
│   │       └── Transfer Leadership (modal)
│   │
│   └── Profile Tab (👤)
│       └── Profile View
│           ├── Edit Profile (stack)
│           └── Settings (stack)
│
│   + Floating Access:
│   ├── Notifications (drawer or stack from header)
│   └── Messages (accessible from notifications/header)
│       └── Chat View
│
├── COMPANY TAB NAVIGATOR
│   │
│   ├── Home Tab (🏠)
│   │   └── Company Dashboard
│   │       └── Admin Support (modal)
│   │
│   ├── Challenges Tab (📋)
│   │   └── Challenge List
│   │       ├── Challenge Management (stack)
│   │       │   ├── Participants List
│   │       │   │   └── Student Profile (stack)
│   │       │   └── Submissions List
│   │       │       └── Review Submission (stack)
│   │       └── Create Challenge (stack)
│   │           ├── Manual Flow (multi-step)
│   │           └── Submit Brief
│   │
│   ├── Talent Tab (🔍)
│   │   └── Talent Search
│   │       └── Student Profile (stack)
│   │           └── Start Conversation
│   │
│   ├── Messages Tab (💬)
│   │   └── Conversations
│   │       └── Chat View (stack)
│   │
│   └── Settings Tab (⚙️)
│       ├── Organization Settings
│       │   └── Invite Member (modal)
│       └── Account Settings
│
├── ADMIN TAB NAVIGATOR
│   │
│   ├── Dashboard Tab (🏠)
│   │   └── Admin Dashboard
│   │       └── Quick Action Items
│   │
│   ├── Users Tab (👥)
│   │   └── User Management
│   │       ├── Students List → Edit (modal)
│   │       ├── Companies List → Edit/Verify (modal)
│   │       └── Evaluators List → Create (modal)
│   │
│   ├── Challenges Tab (📋)
│   │   └── Challenge Management
│   │       ├── Pending Approvals → Review (stack)
│   │       ├── Briefs → Create from Brief (stack)
│   │       └── Cancellations → Review (stack)
│   │
│   ├── Analytics Tab (📈)
│   │   └── Analytics Dashboard
│   │
│   └── Settings Tab (⚙️)
│       ├── Platform Settings
│       └── Account Settings
│
│   + Support Messages (accessible from drawer)
│
└── EVALUATOR TAB NAVIGATOR
│
├── Dashboard Tab (🏠)
│   └── Evaluator Dashboard
│
├── Assignments Tab (📋)
│   └── Assignment List
│       └── Challenge View (stack)
│           └── Submission List
│               └── Review Submission (stack)
│
├── History Tab (📜)
│   └── Review History
│       └── View Review (stack)
│
└── Settings Tab (⚙️)
└── Account Settings