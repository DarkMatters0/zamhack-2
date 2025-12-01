Frontend & Main Application

Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
Forms: React Hook Form + Zod validation
State Management: Zustand (lightweight global state)
Data Fetching: TanStack Query (React Query)
Rich Text Editor: Tiptap (for challenge descriptions)
Tables: TanStack Table (for admin views)
Charts: Recharts (for analytics/dashboards)

Backend (Next.js API Routes)

API: Next.js App Router API routes (/app/api/*)
Runtime: Node.js
Validation: Zod schemas (shared with frontend)

ML Service (Separate Microservice)

Framework: FastAPI
Language: Python 3.11+
ML Library: scikit-learn
NLP Processing: TF-IDF + Cosine Similarity
Data Processing: numpy, pandas
Vector Operations: pgvector (via Supabase)

Database & Backend Services

Database: PostgreSQL (Supabase)
Authentication: Supabase Auth
Storage: Supabase Storage
Real-time: Supabase Realtime (for chat, notifications)
File Uploads: Supabase Storage buckets

Development Tools

AI Assistants: Claude Code (backend logic), Cursor AI (frontend), Gemini Pro (component generation)
API Testing: Thunder Client / Postman
Database Management: Supabase Studio
Version Control: Git + GitHub

Deployment

Frontend/Next.js: Vercel (free tier, automatic)
ML Service: Render / Railway (free tier)
Database: Supabase (already set up)
Environment Variables: Vercel Environment Variables + .env.local

Architecture Summary
┌─────────────────────────────────────────┐
│         NEXT.JS 14 (APP ROUTER)         │
│   - Frontend (React + TypeScript)       │
│   - API Routes (/app/api/*)             │
│   - Server Components                   │
│   - shadcn/ui + Tailwind                │
└──────────┬────────────────┬─────────────┘
           │                │
           ▼                ▼
┌──────────────────┐  ┌──────────────┐
│   SUPABASE       │  │ FastAPI ML   │
│ - PostgreSQL     │  │  Service     │
│ - Auth           │  │ - sklearn    │
│ - Storage        │  │ - TF-IDF     │
│ - Realtime       │  │ - Cosine     │
└──────────────────┘  └──────────────┘