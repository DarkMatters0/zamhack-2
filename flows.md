High-Level User Flows

1.1 Student Flow
┌─────────────────────────────────────────────────────────────────────────────┐
│                           STUDENT JOURNEY                                   │
└─────────────────────────────────────────────────────────────────────────────┘

ONBOARDING
    │
    ├─→ Landing Page (Web/Mobile)
    │       └─→ [Sign Up] or [Login] or [Continue with Google]
    │
    ├─→ Sign Up Form
    │       └─→ Email, Password, Full Name, Confirm Password
    │               └─→ Email Verification Sent
    │                       └─→ Verify Email (click link)
    │
    ├─→ Profile Setup (First-time only)
    │       └─→ Step 1: Basic Info (Bio, Profile Photo)
    │       └─→ Step 2: Education (School, Degree, Year)
    │       └─→ Step 3: Skills (Add up to 15, assign levels)
    │       └─→ Step 4: Work Experience (Optional)
    │       └─→ Step 5: Social Links + Resume Link
    │       └─→ [Complete Setup] → Dashboard
    │
MAIN USAGE
    │
    ├─→ Dashboard (Home)
    │       ├─→ Active Challenges (cards showing progress)
    │       ├─→ Recommended Challenges
    │       ├─→ Notifications Summary
    │       └─→ Quick Stats (Completed, In Progress, Skills Earned)
    │
    ├─→ Browse Challenges
    │       ├─→ Filter: Skill Level, Industry, Time Commitment, Team/Solo
    │       ├─→ Search bar
    │       └─→ Challenge Cards → [View Details]
    │               └─→ Challenge Detail Page
    │                       ├─→ Overview, Milestones, Skills Offered
    │                       ├─→ Company Info
    │                       ├─→ [Join Solo] or [Join with Team]
    │                       │       └─→ If Team: Select existing team or create new
    │                       └─→ Confirmation → Added to "My Challenges"
    │
    ├─→ My Challenges
    │       ├─→ Tabs: Active | Completed | Cancelled
    │       └─→ Challenge Card → [View Progress]
    │               └─→ Challenge Progress Page
    │                       ├─→ Milestone Checklist (with status)
    │                       ├─→ Submission Section per Milestone
    │                       │       └─→ [Add Submission] → GitHub Link, URL, Written Response
    │                       ├─→ Feedback from Company (if any)
    │                       ├─→ [Message Company] (if conversation exists or applied)
    │                       └─→ [Withdraw from Challenge] → Confirmation Modal
    │
    ├─→ My Team
    │       ├─→ Current Team Card (if any)
    │       │       ├─→ Team Name, Members List (with roles)
    │       │       ├─→ [Team Chat] → In-app messaging
    │       │       ├─→ [Invite Member] → Generate Link/Code
    │       │       ├─→ [Leave Team] (if not leader)
    │       │       └─→ [Transfer Leadership] (if leader) → Select member → Await approval
    │       │
    │       ├─→ No Team State
    │       │       ├─→ [Create Team] → Team Name → Generate Invite
    │       │       └─→ [Join Team] → Enter Code/Link
    │       │
    │       └─→ Pending Invites (if any)
    │
    ├─→ Messages
    │       ├─→ Conversation List (Companies, Team Chat)
    │       └─→ Chat View → Real-time messaging
    │
    ├─→ Portfolio / Profile
    │       ├─→ View Mode (Public Preview)
    │       ├─→ Edit Mode
    │       │       ├─→ Basic Info, Bio, Photo
    │       │       ├─→ Education (Add/Edit/Remove)
    │       │       ├─→ Work Experience (Add/Edit/Remove)
    │       │       ├─→ Portfolio Skills (max 15, leveled)
    │       │       ├─→ Challenge Skills (auto-populated, view only)
    │       │       ├─→ Projects Section
    │       │       │       └─→ [Add Project] → Title, Description, Link
    │       │       └─→ Social Links + Resume Link
    │       └─→ [Save Changes]
    │
    ├─→ Notifications
    │       ├─→ All Notifications List
    │       │       ├─→ Challenge Updates (edits, cancellations)
    │       │       ├─→ New Feedback Received
    │       │       ├─→ New Message
    │       │       ├─→ Team Invites / Leadership Transfer Requests
    │       │       └─→ Challenge Milestones Due Soon
    │       └─→ Mark as Read / Mark All Read
    │
    └─→ Settings
            ├─→ Account Settings (Email, Password Change)
            ├─→ Notification Preferences
            └─→ [Logout]

1.2 Company Flow
┌─────────────────────────────────────────────────────────────────────────────┐
│                           COMPANY JOURNEY                                   │
└─────────────────────────────────────────────────────────────────────────────┘

ONBOARDING
    │
    ├─→ Landing Page (Web/Mobile)
    │       └─→ [Sign Up as Company] or [Login]
    │
    ├─→ Sign Up Form
    │       └─→ Company Name, Admin Email, Password
    │               └─→ Email Verification Sent
    │                       └─→ Verify Email → Pending Admin Approval State
    │                               └─→ Admin approves org → Access granted
    │
    ├─→ Organization Setup (First-time, after approval)
    │       └─→ Company Logo, Description, Industry, Website
    │       └─→ [Complete Setup] → Dashboard
    │
MAIN USAGE
    │
    ├─→ Dashboard (Home)
    │       ├─→ Active Challenges Summary
    │       ├─→ Pending Approvals Count
    │       ├─→ Recent Submissions (across all challenges)
    │       ├─→ Quick Stats (Total Participants, Challenges Created)
    │       └─→ Admin Support Card (Message Admin / View Support Email)
    │
    ├─→ Challenges
    │       ├─→ Tabs: Draft | Pending | Active | In Progress | Under Review | Completed | Cancelled
    │       ├─→ [Create Challenge] (two paths)
    │       │       ├─→ Option A: "Submit Brief for Admin Setup"
    │       │       │       └─→ Upload/Write Problem Brief → Submit → Status: Pending Admin Setup
    │       │       │
    │       │       └─→ Option B: "Create Manually"
    │       │               └─→ Step 1: Basic Info
    │       │               │       └─→ Title, Description, Industry, Difficulty Level
    │       │               │       └─→ Participation Type: Solo / Team / Both
    │       │               │       └─→ Team Size Limit (if applicable)
    │       │               │       └─→ Capacity Limit (participants/teams)
    │       │               └─→ Step 2: Timeline
    │       │               │       └─→ Start Date, End Date
    │       │               └─→ Step 3: Milestones
    │       │               │       └─→ [Add Milestone] → Name, Description, Due Date, Submission Type
    │       │               │       └─→ Reorder milestones (drag/drop)
    │       │               └─→ Step 4: Skills & Requirements
    │       │               │       └─→ Skills Offered (tags)
    │       │               │       └─→ Required Skills (optional filter)
    │       │               └─→ Step 5: Review & Submit
    │       │                       └─→ Preview → [Save as Draft] or [Submit for Approval]
    │       │
    │       └─→ Challenge Card → [Manage Challenge]
    │               └─→ Challenge Management Page
    │                       ├─→ Overview Tab
    │                       │       └─→ Status Badge, Stats, Timeline
    │                       ├─→ Participants Tab
    │                       │       └─→ List of Students/Teams
    │                       │       └─→ [View Profile] → Student Portfolio
    │                       │       └─→ [Message] → Opens chat
    │                       ├─→ Submissions Tab
    │                       │       └─→ Filter by Milestone
    │                       │       └─→ Submission Cards → [Review] → Add Feedback/Score
    │                       ├─→ Edit Tab (if Draft or Pending)
    │                       │       └─→ Modify all fields → [Save] or [Resubmit]
    │                       └─→ Actions
    │                               └─→ [Request Cancellation] → Reason → Submit to Admin
    │
    ├─→ Talent Search
    │       ├─→ Search Bar + Filters
    │       │       └─→ Skills, Skill Level, Education, Availability
    │       ├─→ Results: Student Profile Cards
    │       │       └─→ Name, Photo, Top Skills, Completed Challenges Count
    │       │       └─→ [View Full Profile] → Portfolio Page
    │       │       └─→ [Start Conversation] → Opens Message
    │       └─→ Matching Score Badge (NLP-powered compatibility %)
    │
    ├─→ Messages
    │       ├─→ Conversation List (Students, Teams, Admin Support)
    │       └─→ Chat View
    │
    ├─→ Organization Settings
    │       ├─→ Company Profile (Logo, Description, etc.)
    │       ├─→ Team Members
    │       │       └─→ List of seats/users
    │       │       └─→ [Invite Member] → Email invite (uses seat allocation)
    │       │       └─→ Member Roles: Admin (full access), Member (limited)
    │       └─→ [Contact Admin] → Request more seats, report issues
    │
    ├─→ Notifications
    │       ├─→ Challenge Approved/Rejected
    │       ├─→ New Participant Joined
    │       ├─→ New Submission Received
    │       ├─→ Cancellation Request Response
    │       └─→ New Message
    │
    └─→ Settings
            ├─→ Account Settings
            ├─→ Notification Preferences
            └─→ [Logout]

1.3 Admin (Superadmin) Flow
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ADMIN JOURNEY                                     │
└─────────────────────────────────────────────────────────────────────────────┘

ONBOARDING
    │
    ├─→ Admin Portal Landing (Separate URL: admin.platform.com)
    │       └─→ [Login] (Email/Password only, no sign-up - accounts created internally)
    │
MAIN USAGE
    │
    ├─→ Dashboard (Home)
    │       ├─→ Key Metrics Cards
    │       │       └─→ Total Users, Active Challenges, Pending Approvals, Active Evaluators
    │       ├─→ Pending Actions Queue
    │       │       └─→ Challenge Approvals, Cancellation Requests, Company Verifications
    │       ├─→ Recent Activity Feed
    │       └─→ Quick Links to common actions
    │
    ├─→ User Management
    │       ├─→ Tabs: Students | Companies | Evaluators | Admins
    │       │
    │       ├─→ Students Tab
    │       │       ├─→ Search + Filters (Name, Email, Status, Skills)
    │       │       ├─→ Student Row → [View Profile] [Edit] [Suspend] [Delete]
    │       │       └─→ Edit Student Modal
    │       │               └─→ Override Challenge Limit
    │       │               └─→ Override Withdrawal Cooldown
    │       │               └─→ Manual Skill Adjustment
    │       │
    │       ├─→ Companies Tab
    │       │       ├─→ Search + Filters (Name, Industry, Status)
    │       │       ├─→ Company Row → [View] [Edit] [Approve] [Suspend]
    │       │       └─→ Edit Company Modal
    │       │               └─→ Seat Allocation
    │       │               └─→ Organization Details
    │       │               └─→ Verification Status
    │       │
    │       ├─→ Evaluators Tab
    │       │       ├─→ [Create Evaluator Account] → Name, Email, Assigned Challenges
    │       │       ├─→ Evaluator Row → [View] [Edit] [Deactivate]
    │       │       └─→ Assign/Unassign Challenges
    │       │
    │       └─→ Admins Tab
    │               └─→ View other admins (read-only or super-admin edit)
    │
    ├─→ Challenge Management
    │       ├─→ Tabs: All | Pending Approval | Active | Cancelled | Completed
    │       ├─→ [Create Challenge] (Admin-created)
    │       │       └─→ Same flow as Company but with additional fields:
    │       │               └─→ Assign to Company (dropdown)
    │       │               └─→ Custom Capacity Overrides
    │       │               └─→ Auto-Approve (skip pending state)
    │       │
    │       ├─→ Pending Approval Queue
    │       │       └─→ Challenge Card → [Review]
    │       │               └─→ Full Challenge Preview
    │       │               └─→ [Approve] [Reject with Reason] [Edit & Approve]
    │       │
    │       ├─→ Challenge Briefs (Submitted by Companies)
    │       │       └─→ Brief Card → [View Brief] [Create Challenge from Brief]
    │       │               └─→ Opens pre-filled challenge creation form
    │       │
    │       ├─→ Cancellation Requests
    │       │       └─→ Request Card → Company, Challenge, Reason
    │       │               └─→ [Approve Cancellation] [Reject]
    │       │
    │       └─→ Any Challenge → [Edit All Fields] [Assign Evaluator] [Override Settings]
    │
    ├─→ Analytics Dashboard
    │       ├─→ User Growth Charts (Students, Companies over time)
    │       ├─→ Challenge Metrics (Created, Completed, Avg Participants)
    │       ├─→ Engagement Metrics (Submissions, Messages, Completion Rate)
    │       ├─→ Top Skills in Demand
    │       ├─→ Top Performing Students
    │       └─→ Export Reports (CSV/PDF)
    │
    ├─→ Platform Settings
    │       ├─→ Default Configurations
    │       │       └─→ Max Team Size (default: 4)
    │       │       └─→ Max Active Challenges per Student (default: 3)
    │       │       └─→ Withdrawal Cooldown Period (default: 30 days)
    │       │       └─→ Default Challenge Capacity (default: 50/20)
    │       │       └─→ Max Skills per Proficiency Level (default: 5)
    │       ├─→ Skill Tags Management
    │       │       └─→ Add/Edit/Remove available skills
    │       ├─→ Industry Tags Management
    │       └─→ Email Templates (Notifications, Verifications)
    │
    ├─→ Messages / Support
    │       ├─→ Support Inbox (Messages from Companies)
    │       ├─→ Broadcast Messaging (Send to all users of a type)
    │       └─→ Individual Conversations
    │
    ├─→ Notifications
    │       ├─→ New Company Registrations
    │       ├─→ Challenge Submissions for Approval
    │       ├─→ Cancellation Requests
    │       ├─→ Support Messages
    │       └─→ System Alerts
    │
    └─→ Settings
            ├─→ Admin Account Settings
            ├─→ Two-Factor Authentication
            └─→ [Logout]

1.4 Evaluator Flow
┌─────────────────────────────────────────────────────────────────────────────┐
│                          EVALUATOR JOURNEY                                  │
└─────────────────────────────────────────────────────────────────────────────┘

ONBOARDING
    │
    ├─→ Receives Account Creation Email from Admin
    │       └─→ Click link → Set Password
    │               └─→ Login → Dashboard
    │
MAIN USAGE
    │
    ├─→ Dashboard (Home)
    │       ├─→ Assigned Challenges List
    │       ├─→ Pending Reviews Count
    │       ├─→ Completed Reviews Count
    │       └─→ Quick Stats
    │
    ├─→ My Assignments
    │       ├─→ Challenge Cards (only assigned challenges)
    │       └─→ [View Challenge] → Challenge Evaluation Page
    │               ├─→ Challenge Overview (read-only)
    │               ├─→ Participants List
    │               │       └─→ [View Profile] → Student Portfolio (read-only)
    │               └─→ Submissions Tab
    │                       └─→ Filter by Milestone, Status (Pending Review, Reviewed)
    │                       └─→ Submission Card → [Review]
    │                               └─→ Submission Detail View
    │                                       ├─→ Student/Team Info
    │                                       ├─→ Submission Content (Links, Responses)
    │                                       ├─→ Scoring Section
    │                                       │       └─→ Score Input (numeric or rubric)
    │                                       │       └─→ Written Feedback (required)
    │                                       └─→ [Submit Review] → Confirmation
    │
    ├─→ Review History
    │       └─→ List of all completed reviews
    │               └─→ [View] → Read-only review detail
    │
    ├─→ Notifications
    │       ├─→ New Challenge Assigned
    │       ├─→ New Submissions to Review
    │       └─→ Deadline Reminders
    │
    └─→ Settings
            ├─→ Account Settings (Password Change)
            ├─→ Notification Preferences
            └─→ [Logout]
