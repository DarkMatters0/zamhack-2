Hackathon Platform — Complete Feature Recap

1. User Roles & Access
RoleAccess PointDescriptionStudentPublic Landing (Web/Mobile)Participates in challenges, builds portfolio, joins teamsCompanyPublic Landing (Web/Mobile)Creates challenges, reviews submissions, searches talentAdmin (Superadmin)Separate Admin PortalManages entire platform, approves challenges, moderates usersEvaluatorSeparate Evaluator PortalThird-party expert assigned by admin to review submissions

2. Authentication & Onboarding
2.1 Authentication

Email/Password registration and login
Google OAuth (Sign up / Login)
Email verification required on first access
Forgot password / Reset password flow
Role detection on login → redirect to appropriate dashboard

2.2 Student Onboarding

Multi-step profile setup (first-time only):

Basic info (Name, Bio, Profile Photo)
Education (School, Degree, Year)
Skills (up to 15, with proficiency levels)
Work Experience (optional)
Social Links + Resume Link



2.3 Company Onboarding

Company registration (Company Name, Admin Email, Password)
Email verification → Pending Admin Approval state
Organization setup after approval (Logo, Description, Industry, Website)

2.4 Admin & Evaluator Access

No public sign-up; accounts created internally
Admin: Direct login to admin portal
Evaluator: Receives account creation email from admin → sets password


3. Student Features
3.1 Dashboard

Welcome message with challenge slot status (e.g., "2/3 slots used")
Quick stats: Active Challenges, Completed, Skills Earned, Team Status
Active challenge cards with progress bars
Recommended challenges (NLP-powered match percentage)
Notifications summary

3.2 Browse Challenges

Search bar for challenge discovery
Filters: Industry, Difficulty Level, Participation Type (Solo/Team/Both), Duration
Challenge cards displaying:

Company logo and name
Title, difficulty, type
Capacity status (e.g., "15/50 joined")
Deadline


Pagination

3.3 Challenge Detail Page

Full challenge overview (description, requirements, timeline)
Milestones list with due dates and submission types
Skills earned upon completion
Company information
Join actions:

[Join Solo]
[Join with Team] → Select existing team or create new


Capacity indicator / "Challenge Full" state

3.4 My Challenges

Tabs: Active | Completed | Cancelled
Challenge cards with:

Progress percentage and milestone status
Participation type (Solo/Team name)
Quick access to continue


Challenge slots counter with restriction info

3.5 Challenge Progress Page

Overall progress bar
Milestone checklist with statuses:

Completed (with submission and feedback)
In Progress (with submission form)
Locked (pending previous milestone)


Submission form per milestone:

GitHub Link field
URL/Demo Link field
Written Response field
[Save Draft] / [Submit Milestone]


Company feedback display (score + written feedback)
Actions: [Message Company] / [Withdraw from Challenge]

3.6 Withdrawal Rules

Confirmation modal with warnings
Counts against challenge limit
30-day cooldown on withdrawn slots
Admin can override restrictions

3.7 Team Management

Current Team View:

Team name and member list (with roles: Leader/Member)
Active challenge association
Team chat access
Invite link/code generation (if not full)
Leave team (members) / Transfer leadership (leader)


No Team State:

Create Team (enter name → become leader)
Join Team (enter invite code/link)


Team Rules:

Max 4 members (admin configurable)
Student can only be in 1 team at a time
Leader must transfer leadership before leaving
Leadership transfer requires member acceptance


Pending Invites Section:

Leadership transfer requests with Accept/Decline



3.8 Messages

Conversation list (Companies, Team Chat)
Real-time chat interface
Students can only message companies if:

Company initiated conversation, OR
Student applied/joined their challenge


Team chat for internal team communication

3.9 Portfolio / Profile

Public Profile View:

Avatar, Name, Title/Headline, Location
Bio
Social Links (LinkedIn, GitHub, Facebook)
Resume Link


Portfolio Skills (self-defined):

Max 15 total skills
Max 5 per proficiency level (Beginner, Intermediate, Advanced)
Skill + Level indicator


Challenge Skills (earned):

Auto-populated from completed challenges
No proficiency level (just skill tags)


Education:

School, Degree, Year range
Add/Edit/Remove


Work Experience:

Role, Company, Location (or Remote)
Start Date, End Date
Up to 3 bullet points per entry
Add/Edit/Remove


Projects Section:

Personal Projects: Title, Description, Link (user-added)
Challenge Projects: Auto-linked from completed challenges with scores



3.10 Notifications

Categories:

Challenge updates (edits, cancellations)
New feedback received
New messages
Team invites / Leadership transfer requests
Milestone deadline reminders


Filter: All, Unread, by category
Mark as Read / Mark All Read
Real-time delivery

3.11 Settings

Account: Email change, Password change
Connected accounts (Google)
Notification preferences (email toggles per category)
Delete account


4. Company Features
4.1 Dashboard

Welcome message with summary
Quick stats: Active Challenges, Total Participants, Pending Reviews, New Submissions
Recent submissions queue with quick review access
Active challenges cards
Admin Support card (message admin / view support email)

4.2 Challenge Management
Challenge List View

Tabs: Draft | Pending Approval | Active | In Progress | Under Review | Completed | Cancelled
Search and sort options
Challenge cards with status, dates, participant counts

Create Challenge — Two Paths:
Path A: Submit Brief (Admin-Assisted)

Brief Title
Problem Description (min 200 chars)
Desired Outcome
Preferred Timeline (1-2 weeks / 2-4 weeks / 1+ month / Flexible)
Preferred Difficulty
Additional Documents (file upload)
Additional Notes
Submit → Admin creates challenge structure

Path B: Create Manually (Self-Service)

Step 1: Basic Information

Title, Description (rich text)
Industry, Difficulty Level
Participation Type: Solo / Team / Both
Team Size Limit (if applicable)
Capacity Limits (max participants, max teams)
Requirements (optional)


Step 2: Timeline

Start Date, End Date
Registration Deadline (optional)


Step 3: Milestones

Add multiple milestones
Per milestone: Name, Description, Due Date, Submission Types (checkboxes)
Reorder via drag/drop


Step 4: Skills

Skills Offered (earned upon completion)
Required Skills (optional filter)


Step 5: Review & Submit

Preview all details
[Save as Draft] / [Submit for Approval]



Challenge States Flow:
Draft → Pending Approval → Approved/Live → In Progress → Under Review → Completed
                                ↓
                           (Request Cancel) → Admin Approves → Cancelled
Challenge Management Page (Per Challenge)

Overview Tab: Stats, milestone progress bars
Participants Tab: List of students/teams, profile links, message option
Submissions Tab: Filter by milestone/status, review submissions
Edit Tab (if Draft/Pending): Modify all fields
Actions: Request Cancellation (requires admin approval)

4.3 Review Submissions

Submission detail view:

Student/Team info with profile link
Submitted content (links, written responses)
Previous milestone reviews


Scoring section:

Numeric score (out of 100)
Written feedback (required)


[Save as Draft] / [Submit Review]
Feedback automatically delivered to student with notification

4.4 Talent Search

Search by name, skills, keywords
Advanced filters:

Skills (multi-select with levels)
Education
Min Completed Challenges


Results display:

Student cards with avatar, name, school
Match Score (NLP-powered): Compatibility percentage based on skills, performance, company needs
Top skills with proficiency indicators
Completed challenges count and average score


Actions: [View Full Profile] / [Start Conversation]

4.5 Messages

Conversation list (Students, Teams, Admin Support)
Chat interface
Company can:

Initiate conversations with any student
Message entire team (if team-based challenge)
Contact admin support



4.6 Organization Settings

Company Profile:

Logo upload
Company Name, Industry, Website
About description


Team Members:

Seat allocation display (e.g., "3/5 used")
Member list with roles (Org Admin / Member)
Invite member via email
Remove members
Request more seats (→ Admin)



4.7 Admin Support Access

Direct messaging to platform admins
View admin support email
Common request shortcuts (seat requests, setup help, issue reporting)

4.8 Settings

Account settings
Notification preferences
Logout


5. Admin (Superadmin) Features
5.1 Dashboard

Key metrics cards: Total Students, Total Companies, Active Challenges, Pending Approvals
Pending Actions Queue:

Challenge approvals
Company verifications
Challenge briefs to process
Cancellation requests
Support messages


Recent activity feed
Quick action links

5.2 User Management
Students Tab

Search and filter (name, email, status, skills, restrictions)
Student table with: Name, Email, Status, Challenge Slots, Actions
Edit Student Modal:

Status toggle: Active / Suspended / Banned
Override max active challenges
Clear withdrawal cooldown
Manual skill adjustment (add/remove challenge skills)
Admin notes



Companies Tab

Search and filter (name, industry, verification status)
Company table with: Name, Industry, Verified, Seats, Challenges, Actions
Edit Company Modal:

Verification status toggle
Seat allocation adjustment
Organization details editing
Suspend/Delete options



Evaluators Tab

Evaluator list with assignment counts and review stats
Create Evaluator Account:

Full Name, Email
Assign to Challenges (optional initial assignment)
Temporary password emailed


Edit evaluator: Assign/unassign challenges, activate/deactivate

Admins Tab

View other admin accounts (read-only or super-admin edit)

5.3 Challenge Management
All Challenges View

Tabs: All | Pending Approval | Briefs | Cancellation Requests | Active | Completed
Full CRUD access to any challenge

Pending Approval Queue

Challenge preview (full detail)
Actions:

[Approve] → Challenge goes live
[Edit & Approve] → Modify then approve
[Reject with Reason] → Returns to company with feedback



Challenge Briefs

View submitted briefs from companies
[Create Challenge from Brief] → Pre-filled creation form

Cancellation Requests

View challenge, company, reason, impact (participant count)
[Approve Cancellation] → Notifies all enrolled students, marks as Cancelled
[Reject] → Returns to company

Admin Challenge Creation

Same as company manual flow, plus:

Assign to Company (dropdown)
Custom capacity overrides
Auto-approve option (skip pending state)
Assign evaluator during creation



Challenge Overrides

Edit any field on any challenge
Override capacity limits
Assign/reassign evaluators
Force status changes

5.4 Analytics Dashboard

User Growth: Line chart of students and companies over time
Challenge Metrics:

Total created, active, completed
Average participants per challenge
Completion rate
Challenge funnel (Created → Approved → Started → Completed)


Engagement Metrics:

Total submissions
Average review time
Pending reviews count
Submissions per week chart


Top Skills in Demand: Ranked list by frequency
Top Performing Students: Leaderboard by completed challenges
Export: CSV/PDF reports
Date Range Filter: Last 7 days, 30 days, 90 days, custom

5.5 Platform Settings
Default Configurations

Max Active Challenges per Student (default: 3)
Withdrawal Cooldown Period in days (default: 30)
Default Max Team Size (default: 4)
Default Max Participants per Challenge (default: 50)
Default Max Teams per Challenge (default: 20)
Max Skills per Proficiency Level (default: 5 each)

Skill Tags Management

View all available skills
Add new skills
Edit/Delete existing skills

Industry Tags Management

View all available industries
Add/Edit/Delete industries

Email Templates (future enhancement)

Customize notification emails

5.6 Support Messages

Inbox of messages from companies (and potentially students)
Conversation view with context
Quick actions based on request type (e.g., "Update Seats" button)
Broadcast messaging capability (send to all users of a type)

5.7 Settings

Admin account settings
Two-factor authentication (recommended)
Logout


6. Evaluator Features
6.1 Dashboard

Quick stats: Assigned Challenges, Pending Reviews, Completed Reviews
Pending reviews list with quick access
Assigned challenges cards

6.2 My Assignments

List of assigned challenges
Per challenge view:

Overview (read-only challenge details)
Participants list (view profiles, read-only)
Submissions tab with filter by milestone/status



6.3 Review Submission

Same interface as company review:

Student/Team info
Submission content
Score input (numeric)
Written feedback (required)
Submit review


Feedback delivered to student

6.4 Review History

List of all completed reviews
Read-only view of past reviews

6.5 Notifications

New challenge assigned
New submissions to review
Deadline reminders

6.6 Settings

Account settings (password change)
Notification preferences
Logout


7. Challenge System Rules
7.1 Participation Limits

Students can join max 3 active challenges (admin configurable per user)
Completing a challenge frees up a slot
Withdrawing from a challenge:

Counts against the limit
Triggers 30-day cooldown (admin can clear)



7.2 Challenge Capacity

Default: 50 participants OR 20 teams (admin/company configurable)
First-come, first-served enrollment
"Challenge Full" state when capacity reached

7.3 Team Rules

Max 4 members per team (admin configurable)
Student can only be in 1 team at a time
Team leader responsibilities:

Generate invite links/codes
Cannot leave without transferring leadership
Leadership transfer requires acceptance


Teams join challenges as a unit

7.4 Milestone Workflow

Milestones defined by company (or admin)
Sequential progression (later milestones locked until previous completed)
Submission types: GitHub Link, URL, Written Response
Each submission can be reviewed by Company and/or Evaluator
Feedback includes score (out of 100) + written comments

7.5 Challenge Lifecycle
COMPANY CREATES → PENDING APPROVAL → ADMIN REVIEWS
                                          ↓
                    ← REJECTED (with reason) ← 
                                          ↓
                                     APPROVED/LIVE
                                          ↓
                              Students can join
                                          ↓
                                    IN PROGRESS
                              (Start date reached)
                                          ↓
                                   UNDER REVIEW
                              (End date reached)
                                          ↓
                                     COMPLETED
                              (All reviews done)

CANCELLATION FLOW:
Company requests → Admin approves → CANCELLED
                                   (Students notified, progress preserved)
7.6 Challenge Updates

Companies can edit challenges in Draft or Pending states freely
Active/In Progress challenges: Edits trigger notifications to all enrolled students
Edit notifications do not reveal who made the edit


8. Messaging System
8.1 Conversation Types

Company ↔ Student: 1:1 direct messages
Company ↔ Team: Company can message entire team
Team Chat: Internal team communication
Company ↔ Admin: Support requests
Admin ↔ Any User: Support responses, announcements

8.2 Messaging Rules

Students can only initiate contact with a company if:

They've joined that company's challenge, OR
The company messaged them first


Companies can message any student (for recruitment)
Real-time delivery with notifications


9. Matching & Discovery (NLP-Powered)
9.1 Talent Search Matching

Triggered: On-demand when company searches
Factors:

Skill overlap (portfolio + challenge skills)
Skill proficiency levels
Challenge performance (completion rate, scores)
Education and experience alignment


Output: Match percentage displayed on student cards

9.2 Challenge Recommendations (for Students)

Based on student's skills and interests
Displayed on dashboard and browse page
Match percentage indicator


10. Skills System
10.1 Portfolio Skills (Student-Defined)

Added/edited by student
Proficiency levels: Beginner (⭐), Intermediate (⭐⭐), Advanced (⭐⭐⭐)
Limits:

Max 5 skills per level
Max 15 total skills


Selected from platform-defined skill tags

10.2 Challenge Skills (Earned)

Defined by challenge creator (company/admin)
Auto-added to student profile upon challenge completion
No proficiency level (just tags)
Separate display from portfolio skills

10.3 Skill Tags (Admin-Managed)

Platform-wide skill taxonomy
Admin can add/edit/delete skills
Used across portfolio skills, challenge skills, and filters


11. Notification System
11.1 Notification Types
CategoryEventsChallengesEnrollment confirmation, milestone reminders, challenge updates, challenge cancellationSubmissionsSubmission received (company), feedback received (student)MessagesNew message receivedTeamInvite received, leadership transfer request, member joined/leftAdminApproval needed, new registration, support request
11.2 Delivery

In-app notifications (real-time)
Email notifications (configurable per category)
Badge counts on navigation icons


12. Platform Administration
12.1 User Moderation

View/Edit any user account
Suspend/Ban users
Override individual limits
Manual skill adjustments

12.2 Challenge Moderation

Approve/Reject challenge submissions
Edit any challenge
Force cancellations
Assign evaluators

12.3 Configuration Management

Global default settings
Skill/Industry taxonomy
Email templates

12.4 Analytics & Reporting

User growth tracking
Challenge performance metrics
Engagement analytics
Exportable reports
