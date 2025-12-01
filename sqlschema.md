-- -----------------------------------------------------------------------------
-- 1. SETUP & EXTENSIONS
-- -----------------------------------------------------------------------------
-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Enable Vector extension for NLP matching
CREATE EXTENSION IF NOT EXISTS "vector";

-- -----------------------------------------------------------------------------
-- 2. ENUMS (defining fixed states from specs)
-- -----------------------------------------------------------------------------
CREATE TYPE public.app_role AS ENUM (
    'student', 
    'company_admin', 
    'company_member', 
    'admin', 
    'evaluator'
);

CREATE TYPE public.challenge_status AS ENUM (
    'draft', 
    'pending_approval', 
    'approved', 
    'in_progress', 
    'under_review', 
    'completed', 
    'cancelled'
);

CREATE TYPE public.proficiency_level AS ENUM (
    'beginner', 
    'intermediate', 
    'advanced'
);

CREATE TYPE public.milestone_status AS ENUM (
    'locked', 
    'open', 
    'submitted', 
    'reviewed'
);

-- -----------------------------------------------------------------------------
-- 3. ORGANIZATIONS (Companies)
-- -----------------------------------------------------------------------------
CREATE TABLE public.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    industry TEXT,
    website TEXT,
    logo_url TEXT,
    
    -- Verification & Admin
    is_verified BOOLEAN DEFAULT FALSE,
    verification_status TEXT DEFAULT 'pending', -- pending, verified, rejected
    
    -- Seat Management
    max_seats INTEGER DEFAULT 5,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 4. USERS & PROFILES
-- -----------------------------------------------------------------------------
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Basic Info
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    role public.app_role DEFAULT 'student',
    
    -- Student Specific
    university TEXT,
    degree TEXT,
    graduation_year INTEGER,
    resume_link TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    
    -- Company Specific
    organization_id UUID REFERENCES public.organizations(id),
    
    -- NLP Matching
    embedding vector(384), 
    
    -- System Limits
    max_active_challenges INTEGER DEFAULT 3,
    withdrawal_cooldown_until TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 5. SKILLS
-- -----------------------------------------------------------------------------
CREATE TABLE public.skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    category TEXT, -- Tech, Design, Business
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student Portfolio Skills
CREATE TABLE public.student_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE,
    level public.proficiency_level NOT NULL,
    UNIQUE(profile_id, skill_id)
);

-- -----------------------------------------------------------------------------
-- 6. TEAMS
-- -----------------------------------------------------------------------------
CREATE TABLE public.teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    join_code TEXT UNIQUE DEFAULT substring(md5(random()::text) from 0 for 8),
    leader_id UUID REFERENCES public.profiles(id),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(profile_id) -- Enforces "Student can only be in 1 team at a time"
);

-- -----------------------------------------------------------------------------
-- 7. CHALLENGES
-- -----------------------------------------------------------------------------
CREATE TABLE public.challenges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES public.organizations(id),
    created_by UUID REFERENCES public.profiles(id), 
    
    -- Core Content
    title TEXT NOT NULL,
    description TEXT,
    problem_brief TEXT, 
    industry TEXT,
    difficulty public.proficiency_level,
    
    -- Settings
    status public.challenge_status DEFAULT 'draft',
    participation_type TEXT CHECK (participation_type IN ('solo', 'team', 'both')),
    max_participants INTEGER DEFAULT 50,
    max_teams INTEGER DEFAULT 20,
    max_team_size INTEGER DEFAULT 4,
    
    -- Timeline
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    registration_deadline TIMESTAMP WITH TIME ZONE,
    
    -- NLP
    embedding vector(384), 
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills earned by completing challenge
CREATE TABLE public.challenge_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    challenge_id UUID REFERENCES public.challenges(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE
);

-- Evaluators assigned to challenges
CREATE TABLE public.challenge_evaluators (
    challenge_id UUID REFERENCES public.challenges(id) ON DELETE CASCADE,
    evaluator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (challenge_id, evaluator_id)
);

-- -----------------------------------------------------------------------------
-- 8. MILESTONES
-- -----------------------------------------------------------------------------
CREATE TABLE public.milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    challenge_id UUID REFERENCES public.challenges(id) ON DELETE CASCADE,
    sequence_order INTEGER NOT NULL, 
    title TEXT NOT NULL,
    description TEXT,
    due_date TIMESTAMP WITH TIME ZONE,
    
    -- Requirements schema
    requires_github BOOLEAN DEFAULT FALSE,
    requires_url BOOLEAN DEFAULT FALSE,
    requires_text BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 9. PARTICIPATION & SUBMISSIONS
-- -----------------------------------------------------------------------------
CREATE TABLE public.challenge_participants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    challenge_id UUID REFERENCES public.challenges(id) ON DELETE CASCADE,
    
    -- Polymorphic: Either a User (Solo) OR a Team joins
    user_id UUID REFERENCES public.profiles(id),
    team_id UUID REFERENCES public.teams(id),
    
    status TEXT DEFAULT 'active', 
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Validation: Must have user OR team, not both
    CONSTRAINT check_participant_type CHECK (
        (user_id IS NOT NULL AND team_id IS NULL) OR 
        (user_id IS NULL AND team_id IS NOT NULL)
    )
);

CREATE TABLE public.submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    milestone_id UUID REFERENCES public.milestones(id),
    participant_id UUID REFERENCES public.challenge_participants(id),
    
    -- Content
    github_link TEXT,
    demo_url TEXT,
    written_response TEXT,
    
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 10. REVIEWS (Evaluations)
-- -----------------------------------------------------------------------------
CREATE TABLE public.evaluations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID REFERENCES public.submissions(id),
    reviewer_id UUID REFERENCES public.profiles(id), 
    
    score INTEGER CHECK (score >= 0 AND score <= 100),
    feedback TEXT,
    is_draft BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 11. MESSAGING
-- -----------------------------------------------------------------------------
CREATE TABLE public.conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    challenge_id UUID REFERENCES public.challenges(id), 
    type TEXT CHECK (type IN ('direct', 'team', 'support')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.conversation_participants (
    conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    PRIMARY KEY (conversation_id, profile_id)
);

CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES public.profiles(id),
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 12. ROW LEVEL SECURITY (RLS) SETUP
-- -----------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

-- -----------------------------------------------------------------------------
-- 13. POLICIES (The Rules)
-- -----------------------------------------------------------------------------

-- --- PROFILES ---
CREATE POLICY "Profiles are viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- --- CHALLENGES ---
CREATE POLICY "Public read active challenges" 
ON public.challenges FOR SELECT 
USING (status IN ('approved', 'in_progress', 'completed'));

CREATE POLICY "Companies view own challenges" 
ON public.challenges FOR SELECT 
USING (organization_id IN (
    SELECT organization_id FROM public.profiles WHERE id = auth.uid()
));

CREATE POLICY "Companies edit own challenges" 
ON public.challenges FOR ALL 
USING (organization_id IN (
    SELECT organization_id FROM public.profiles WHERE id = auth.uid()
));

-- --- PARTICIPANTS ---
CREATE POLICY "View own participation" 
ON public.challenge_participants FOR SELECT 
USING (user_id = auth.uid() OR team_id IN (
    SELECT team_id FROM public.team_members WHERE profile_id = auth.uid()
));

CREATE POLICY "Companies view participants" 
ON public.challenge_participants FOR SELECT 
USING (challenge_id IN (
    SELECT id FROM public.challenges WHERE organization_id IN (
        SELECT organization_id FROM public.profiles WHERE id = auth.uid()
    )
));

-- --- TEAMS ---
CREATE POLICY "Teams are viewable by everyone" 
ON public.teams FOR SELECT USING (true);

CREATE POLICY "Users can create teams" 
ON public.teams FOR INSERT WITH CHECK (auth.uid() = leader_id);

CREATE POLICY "Leader can update team" 
ON public.teams FOR UPDATE USING (auth.uid() = leader_id);

-- --- TEAM MEMBERS ---
CREATE POLICY "View team memberships" 
ON public.team_members FOR SELECT USING (true);

CREATE POLICY "Join team" 
ON public.team_members FOR INSERT WITH CHECK (auth.uid() = profile_id);

-- --- SUBMISSIONS ---
CREATE POLICY "View own submissions" 
ON public.submissions FOR SELECT 
USING (participant_id IN (
    SELECT id FROM public.challenge_participants 
    WHERE user_id = auth.uid() OR team_id IN (
        SELECT team_id FROM public.team_members WHERE profile_id = auth.uid()
    )
));

CREATE POLICY "Create submissions" 
ON public.submissions FOR INSERT 
WITH CHECK (participant_id IN (
    SELECT id FROM public.challenge_participants 
    WHERE user_id = auth.uid() OR team_id IN (
        SELECT team_id FROM public.team_members WHERE profile_id = auth.uid()
    )
));

CREATE POLICY "Companies view submissions" 
ON public.submissions FOR SELECT 
USING (milestone_id IN (
    SELECT id FROM public.milestones WHERE challenge_id IN (
        SELECT id FROM public.challenges WHERE organization_id IN (
            SELECT organization_id FROM public.profiles WHERE id = auth.uid()
        )
    )
));

-- --- MESSAGES ---
CREATE POLICY "Read conversation messages" 
ON public.messages FOR SELECT 
USING (conversation_id IN (
    SELECT conversation_id FROM public.conversation_participants WHERE profile_id = auth.uid()
));

CREATE POLICY "Send messages" 
ON public.messages FOR INSERT 
WITH CHECK (conversation_id IN (
    SELECT conversation_id FROM public.conversation_participants WHERE profile_id = auth.uid()
));

-- -----------------------------------------------------------------------------
-- 14. TRIGGERS & FUNCTIONS
-- -----------------------------------------------------------------------------

[cite_start]-- Auto-create profile on Auth Signup [cite: 38, 39]
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', (new.raw_user_meta_data->>'role')::public.app_role);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

[cite_start]-- Auto-update updated_at timestamp [cite: 40, 41]
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_challenges_modtime BEFORE UPDATE ON public.challenges FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();