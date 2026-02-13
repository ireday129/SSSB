# Secret Society of Service Bureaus - Development Instructions

## PROJECT OVERVIEW
Membership platform for tax software resellers with onboarding, trainings, member profiles, and premium add-ons.

## TECH STACK
- **Frontend**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **Styling**: Tailwind CSS

## BRAND COLORS
- Primary: #224e33 (dark green)
- Accent: #ae8e33 (gold)

## DEVELOPMENT RULES

### Code Quality
- Always use TypeScript
- Follow Next.js 14 App Router conventions
- Use server components by default, client components only when needed
- Keep components small and focused

### Database Operations
- Never expose service_role key in frontend
- Always use RLS policies
- Use Supabase client for all database operations
- Handle errors gracefully with user-friendly messages

### Authentication
- Protect all routes except login/signup
- Check user authentication status on every page
- Redirect unauthenticated users to login
- Store minimal user data in localStorage/cookies

### File Structure
```
/app
  /(auth)
    /login
    /signup
  /(dashboard)
    /layout.tsx (protected layout)
    /page.tsx (home/welcome)
    /onboarding
    /trainings
    /profile
    /premium
  /api
    /auth
/components
  /ui (reusable components)
  /dashboard (dashboard-specific)
/lib
  /supabase (client config)
  /utils
/types
```

### Styling Guidelines
- Use Tailwind CSS exclusively
- Dark backgrounds with gold accents
- Maintain minimal luxury aesthetic
- Ensure high readability
- Mobile-first responsive design

### Features to Implement

#### Authentication
- Email/password signup
- Email/password login
- Password reset
- Protected routes
- Session management

#### Onboarding
- Display steps from database
- Allow checkbox completion
- Track progress percentage
- Show completion status
- Prevent forced completion after first time

#### Trainings
- Search functionality
- Category/subcategory navigation
- Video player integration
- Progress tracking with checkmarks
- Badge awarding system
- Downloadable resources

#### Profile
- Display: name, business, join date, badges
- Editable profile information
- Badge showcase

#### Premium Add-ons
- Product grid from database
- Product cards with images/prices
- Integration ready for GHL payments
- Shopping cart (future)

#### Admin Dashboard (Separate)
- View all members
- Track member progress
- Manage content (trainings, badges, products)

### Testing Requirements
- Test all authentication flows
- Verify RLS policies work correctly
- Test responsive design on mobile/tablet/desktop
- Ensure smooth scrolling navigation
- Verify all database operations

### Deployment
- Push to main branch triggers Vercel deployment
- Environment variables must be set in Vercel
- Never commit .env files

### Performance
- Optimize images
- Lazy load videos
- Use Next.js Image component
- Minimize JavaScript bundle size
- Enable caching where appropriate

## ENVIRONMENT VARIABLES NEEDED
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

## COMMON TASKS

### Adding New Training
1. Insert into training_categories table
2. Insert into trainings table with category_id
3. Upload video/resources to Supabase Storage

### Adding New Badge
1. Insert into badges table
2. Upload badge icon to Supabase Storage
3. Set up logic for when badge is awarded

### Adding New Product
1. Insert into products table
2. Upload product image to Supabase Storage
3. Add Stripe price_id when available

## NOTES
- Keep user experience smooth and premium
- Prioritize readability and ease of use
- Maintain the "exclusive society" feel
- All changes must preserve existing functionality
```

---

## PHASE 3: VERCEL SETUP

**Step 1: Connect GitHub to Vercel**
1. Go to vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Authorize Vercel to access your repo

**Step 2: Configure Project**
1. Framework Preset: Next.js
2. Root Directory: ./
3. Build Command: `npm run build`
4. Output Directory: .next
5. Install Command: `npm install`

**Step 3: Add Environment Variables**
In Vercel project settings → Environment Variables, add:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=your_vercel_url
