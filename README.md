# ZamHack Platform

> A full-stack hackathon & challenge management platform connecting students, companies, and evaluators — with NLP-powered talent matching and a milestone-based submission workflow.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [User Roles](#user-roles)
5. [Core Features](#core-features)
6. [Database Schema](#database-schema)
7. [Challenge Lifecycle](#challenge-lifecycle)
8. [ML / NLP Service](#ml--nlp-service)
9. [Getting Started](#getting-started)
10. [Environment Variables](#environment-variables)
11. [Deployment](#deployment)
12. [Project Structure](#project-structure)

---

## Overview

ZamHack is a hackathon platform built on **Next.js 14 (App Router)** and **Supabase**. It allows:

- **Students** to discover and join challenges, build a skills portfolio, and collaborate in teams.
- **Companies** to create and manage challenges, review student submissions, and search for talent using AI-powered matching.
- **Evaluators** (third-party experts) to review and score student submissions assigned to them by admins.
- **Admins** to moderate the entire platform — approving challenges, managing users, and configuring global settings.

A separate **FastAPI microservice** powers the NLP matching engine (TF-IDF + Cosine Similarity) for challenge recommendations and talent discovery.

---

## Architecture

```
┌─────────────────────────────────────────┐
│         NEXT.JS 14 (APP ROUTER)         │
│   - Frontend (React + TypeScript)       │
│   - API Routes (/app/api/*)             │
│   - Server Components                   │
│   - shadcn/ui + Tailwind                │
└──────────┬────────────────┬─────────────┘
           │                │
           ▼                ▼
┌──────────────────┐  ┌──────────────────┐
│   SUPABASE       │  │  FastAPI ML      │
│ - PostgreSQL     │  │  Service         │
│ - Auth           │  │  - scikit-learn  │
│ - Storage        │  │  - TF-IDF        │
│ - Realtime       │  │  - Cosine Sim.   │
└──────────────────┘  └──────────────────┘
```

- The **Next.js app** handles all UI, server-side rendering, and API routes.
- **Supabase** provides the database, authentication, file storage, and real-time messaging/notifications.
- The **FastAPI ML service** is a separate microservice deployed independently (Render / Railway) and consumed by the Next.js API routes.

---

## Tech Stack

### Frontend & Main Application

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Forms | React Hook Form + Zod |
| State Management | Zustand |
| Data Fetching | TanStack Query (React Query) |
| Rich Text Editor | Tiptap |
| Tables | TanStack Table |
| Charts | Recharts |

### Backend

| Layer | Technology |
|---|---|
| API Routes | Next.js App Router (`/app/api/*`) |
| Validation | Zod (shared with frontend) |
| Auth Middleware | Supabase SSR (`@supabase/ssr`) |

### ML Service (Microservice)

| Layer | Technology |
|---|---|
| Framework | FastAPI |
| Language | Python 3.11+ |
| ML | scikit-learn |
| NLP | TF-IDF + Cosine Similarity |
| Data | numpy, pandas |
| Vectors | pgvector (via Supabase) |

### Database & Infrastructure

| Service | Purpose |
|---|---|
| Supabase PostgreSQL | Primary database |
| Supabase Auth | Authentication (email/password + Google OAuth) |
| Supabase Storage | File uploads (avatars, attachments) |
| Supabase Realtime | Live chat and notifications |

---

## User Roles

The platform has four distinct roles, each with its own access point and permissions:

| Role | Access Point | Description |
|---|---|---|
| `student` | `/dashboard` | Joins challenges, builds a portfolio, forms teams |
| `company_admin` / `company_member` | `/company/dashboard` | Creates challenges, reviews submissions, searches talent |
| `admin` | `/admin/dashboard` | Superadmin — manages the entire platform |
| `evaluator` | `/evaluator/dashboard` | Third-party reviewer assigned to specific challenges |

> **Note:** Admin and Evaluator accounts are created internally (no public sign-up). Students and Companies register via the public landing page.

### Role-Based Routing

Roles are stored in the `profiles.role` column (Supabase `app_role` enum). The Next.js `middleware.ts` reads this on every request and redirects users to their correct dashboard automatically.

---

## Core Features

### Student
- Multi-step onboarding (profile, education, skills, experience)
- Browse & search challenges with filters (industry, difficulty, type, duration)
- Join challenges solo or as a team (max 3 active challenges at a time)
- Milestone-based submission workflow (GitHub link, URL, or written response)
- View received feedback and scores per milestone
- Team management (create, invite via link/code, transfer leadership)
- NLP-powered challenge recommendations with match percentage

### Company
- Create and manage challenges with milestone definitions
- Challenge lifecycle management (Draft → Pending Approval → Live → Completed)
- Review student/team submissions with scoring rubrics and written feedback
- Analytics dashboard (participants, submissions, avg score, weekly trends)
- NLP-powered talent search with match percentage displayed on student cards
- Organization profile management (logo, description, team members)
- Direct messaging with students and teams

### Admin
- Approve or reject company-submitted challenges
- Moderate users (suspend, ban, override limits)
- Assign evaluators to specific challenges
- Manage global settings (maintenance mode, signup toggle, platform limits)
- Manage skill/industry taxonomy used across the platform
- Analytics and exportable reports

### Evaluator
- View assigned challenges and their submissions
- Score submissions (0–100) with written feedback
- Review history and deadline tracking

### Messaging System
- Company ↔ Student (direct), Company ↔ Team, Team internal chat, Admin ↔ Any User
- Real-time delivery via Supabase Realtime
- Students can only initiate contact with companies they've joined a challenge from

---

## Database Schema

Key tables in the `public` schema:

| Table | Purpose |
|---|---|
| `profiles` | All users — extends Supabase `auth.users` with role, bio, education, skills |
| `organizations` | Company profiles with verification status |
| `challenges` | Challenge definitions with status, dates, capacity |
| `milestones` | Sequential steps within a challenge |
| `challenge_participants` | Student/team enrollments per challenge |
| `submissions` | Student milestone submissions (GitHub, URL, text) |
| `scores` | Rubric-based scores per submission |
| `rubrics` | Scoring criteria per challenge/milestone |
| `teams` | Team definitions with leader assignment |
| `team_members` | Team membership records |
| `skills` | Platform-wide skill taxonomy |
| `student_skills` | Student portfolio skills with proficiency level |
| `challenge_skills` | Skills awarded on challenge completion |
| `messages` | Chat messages per conversation |
| `conversations` | Conversation threads between users/teams |
| `notifications` | In-app notification records |
| `winners` | Final rankings and prizes for completed challenges |
| `challenge_evaluators` | Evaluator-to-challenge assignments |

### Key Enums

```sql
-- User roles
app_role: 'student' | 'company_admin' | 'company_member' | 'admin' | 'evaluator'

-- Challenge states
challenge_status: 'draft' | 'pending_approval' | 'approved' | 'in_progress'
                | 'under_review' | 'completed' | 'cancelled' | 'closed' | 'rejected'

-- Milestone states
milestone_status: 'locked' | 'open' | 'submitted' | 'reviewed'

-- Skill proficiency
proficiency_level: 'beginner' | 'intermediate' | 'advanced'
```

### Leaderboard View

A `challenge_leaderboard` view aggregates `total_score` and `milestones_completed` per participant for each challenge.

---

## Challenge Lifecycle

```
COMPANY CREATES → PENDING APPROVAL → ADMIN REVIEWS
                                          │
                    ← REJECTED (with reason) ←
                                          │
                                     APPROVED / LIVE
                                          │
                              Students can join & submit
                                          │
                                    IN PROGRESS
                              (Start date reached)
                                          │
                                   UNDER REVIEW
                              (End date reached)
                                          │
                                     COMPLETED
                              (All reviews done)

CANCELLATION:
Company requests → Admin approves → CANCELLED
                                   (Students notified, progress preserved)
```

**Rules:**
- Students can join a maximum of **3 active challenges** (configurable per user by admin).
- Withdrawing triggers a **30-day cooldown** (admin can clear).
- Default capacity: **50 participants** or **20 teams**.
- Teams have a maximum of **4 members**.
- Milestones are **sequential** — later milestones are locked until the previous is reviewed.

---

## ML / NLP Service

The FastAPI ML microservice powers two features:

### 1. Challenge Recommendations (for Students)
- Triggered on the student dashboard and browse page.
- Computes a **match percentage** between the student's skills/interests and each challenge's required skills.
- Uses **TF-IDF vectorization** and **cosine similarity**.

### 2. Talent Search (for Companies)
- Triggered on-demand when a company searches for talent.
- Factors: skill overlap, proficiency levels, challenge performance, education alignment.
- Returns a **match percentage** displayed on student profile cards.
- Uses **pgvector** (via Supabase) for embedding-based lookups.

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- A Supabase project (with the schema applied)
- Python 3.11+ (for the ML service)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/zamhack-platform.git
cd zamhack-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

See [Environment Variables](#environment-variables) below.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Set up the ML service (optional for full functionality)

```bash
cd ml-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# ML Service
ML_SERVICE_URL=http://localhost:8000

# (Optional) Google OAuth — configure in Supabase Auth settings
# No additional env vars needed if configured via Supabase dashboard
```

### Setting User Roles

New users default to the `student` role. To assign a different role, update the `profiles` table directly via Supabase Studio or SQL:

```sql
UPDATE profiles
SET role = 'company_admin'
WHERE id = 'USER_UUID';
```

---

## Deployment

| Service | Platform | Notes |
|---|---|---|
| Next.js App | **Vercel** | Automatic deploys from `main` branch |
| ML Service | **Render** or **Railway** | Free tier; set `ML_SERVICE_URL` in Vercel env vars |
| Database | **Supabase** | Managed PostgreSQL; already set up |

Add all environment variables to Vercel's **Environment Variables** settings before deploying.

---

## Project Structure

```
zamhack-platform/
├── src/
│   ├── app/
│   │   ├── (admin)/admin/          # Admin portal pages
│   │   ├── (company)/company/      # Company portal pages
│   │   ├── (evaluator)/evaluator/  # Evaluator portal pages
│   │   ├── (student)/dashboard/    # Student dashboard pages
│   │   └── api/                    # Next.js API routes
│   ├── components/
│   │   └── ui/                     # shadcn/ui components
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utilities, Supabase client helpers
│   └── types/
│       └── supabase.ts             # Auto-generated Supabase types
├── middleware.ts                   # Role-based route protection
├── components.json                 # shadcn/ui config
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Development Tools Used

| Tool | Purpose |
|---|---|
| Claude Code | Backend logic |
| Cursor AI | Frontend development |
| Gemini Pro | Component generation |
| Thunder Client / Postman | API testing |
| Supabase Studio | Database management |

---

## License

Private — all rights reserved.
