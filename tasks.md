# ✅ Step-by-Step Plan to Build the MVP

Each task is atomic, testable, and focused on one concern.

---

## 🔧 0. Project Setup

### 0.1 — Initialize Monorepo
- **Start**: Create root directory, init Turborepo
- **End**: Turborepo workspace structure ready

### 0.2 — Create `apps/mobile` and `apps/web`
- **Start**: Run `npx create-expo-app` and `npx create-next-app`
- **End**: Both apps bootstrapped, can run independently

### 0.3 — Setup TypeScript + ESLint + Prettier
- **Start**: Install and configure across monorepo
- **End**: Shared linting and formatting rules working

---

## 🖥 Web App Setup

### 1.1 — Add CSS Modules to `apps/web`
- **Start**: Configure CSS Modules
- **End**: Can use CSS Modules in components

### 1.2 — Set up App Router and `/login` page
- **Start**: Add route structure
- **End**: Navigating to /login renders a basic form

---

## 📱 Mobile App Setup

### 2.1 — Set up React Native styling system
- **Start**: Create shared styles and theme constants
- **End**: Consistent styling system in place

### 2.2 — Implement navigation (react-navigation)
- **Start**: Install navigation libraries
- **End**: Can move between Home and Settings screens

---

## 🔐 Auth MVP

### 3.1 — Create `/auth/register` and `/auth/login` in NestJS
- **Start**: Create DTOs, controller, service
- **End**: Register/login endpoints return JWT

### 3.2 — Implement `useAuth()` hook (web)
- **Start**: Add context and provider
- **End**: Can login, token stored, context accessible

### 3.3 — Implement secure storage on mobile
- **Start**: Use `expo-secure-store` to store token
- **End**: Auth token persisted securely on device

---

## 💸 Transactions: Easy Mode

### 4.1 — Create Transaction entity + migrations
- **Start**: Add Prisma schema, run migration
- **End**: `transactions` table created

### 4.2 — Create `/transactions` API (POST, GET)
- **Start**: Add controller, service, DTO
- **End**: Can create and fetch transactions

### 4.3 — Build "Add Transaction" form (Easy Mode)
- **Start**: Form with amount, type, category
- **End**: Submits to API, clears on success

### 4.4 — Show list of recent transactions
- **Start**: Fetch from API using React Query
- **End**: Renders formatted list

---

## 📊 Basic Stats

### 5.1 — Build `/stats/summary` endpoint
- **Start**: Returns income, expense, balance
- **End**: Data served correctly from API

### 5.2 — Display stats (mobile + web)
- **Start**: Create summary UI block
- **End**: Live totals update from API

---

## 🧭 Mode Switching

### 6.1 — Create `useAppMode()` global hook
- **Start**: Implement Zustand or Recoil store
- **End**: Value accessible in both apps

### 6.2 — Add toggle in Settings screen
- **Start**: Toggle switch calls hook
- **End**: Mode updates, persists via localStorage / SecureStore

---

## 🧪 Testing Setup

### 7.1 — Add Jest to shared packages
- **Start**: Install and configure Jest
- **End**: Test utils and services in isolation

### 7.2 — Add basic e2e test (web)
- **Start**: Add Playwright or Cypress test
- **End**: Test login, add transaction, see list

---

## 🌱 Final Touches

### 8.1 — Seed categories to DB
- **Start**: Add script to insert categories
- **End**: Categories accessible via API

### 8.2 — Deploy API to Railway / Render
- **Start**: Create service, connect DB
- **End**: Accessible public URL

### 8.3 — Deploy Web to Vercel
- **Start**: Connect GitHub repo
- **End**: Live site accessible

### 8.4 — Publish Expo Dev build
- **Start**: Run `expo publish`
- **End**: Shareable link for testers

## 👥 Parallel Development Guidelines

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- Feature branches: `feature/[developer-initials]/[task-number]-[short-description]`
  Example: `feature/dn/2.1-styling-system`

### Developer Responsibilities

#### Developer 1 (DN - Mobile Focus)
- Mobile app development (apps/mobile)
- Mobile-specific UI components
- Mobile authentication flow
- Mobile-specific utilities

#### Developer 2 (Web Focus)
- Web app development (apps/web)
- Web-specific UI components
- Web authentication flow
- Web-specific utilities

#### Shared Responsibilities
- Backend development (backend/)
- Shared packages (packages/*)
- Database schema and migrations (prisma/)
- API endpoints and services

### Development Workflow
1. Create feature branch from `develop`
2. Implement feature following task guidelines
3. Write tests for new functionality
4. Create PR to `develop`
5. Code review by other developer
6. Merge to `develop` after approval
7. Regular merges from `develop` to `main` for releases

### Communication Points
- Daily sync on shared components
- API contract reviews
- Database schema changes
- Shared package updates

### Critical Paths
1. Authentication system (must be completed first)
2. Database schema and migrations
3. Core shared packages
4. API endpoints

### Independent Development Areas
- Mobile UI/UX (Developer 1)
- Web UI/UX (Developer 2)
- Mobile-specific features (Developer 1)
- Web-specific features (Developer 2)
- Mobile testing (Developer 1)
- Web testing (Developer 2)