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

### 1.1 — Add Tailwind CSS to `apps/web`
- **Start**: Install Tailwind, configure PostCSS
- **End**: Can use Tailwind in components

### 1.2 — Set up App Router and `/login` page
- **Start**: Add route structure
- **End**: Navigating to /login renders a basic form

---

## 📱 Mobile App Setup

### 2.1 — Add `nativewind` and Tailwind config
- **Start**: Install nativewind, link config
- **End**: Styling with Tailwind works

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