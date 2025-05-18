# 📱💻 Financial Tracking App Architecture

## 📁 File + Folder Structure (Monorepo)

```
/
├── apps/
│   ├── mobile/               # React Native app (iOS target)
│   ├── web/                  # Next.js web app
│
├── packages/
│   ├── ui/                   # Shared UI components (buttons, charts)
│   ├── utils/                # Shared utilities (formatters, validators)
│   ├── services/             # API logic, HTTP clients
│   ├── auth/                 # Auth flows, JWT hooks, user context
│
├── backend/                  # NestJS backend API
│   ├── src/
│   │   ├── modules/          # Modular features (transactions, stats, auth)
│   │   ├── common/           # Shared DTOs, guards, interceptors
│   │   └── main.ts           # Application entry point
│
├── prisma/                   # Prisma schema and migrations
│
├── .env                      # Environment variables
├── turbo.json                # Turborepo config
└── README.md
```

---

## 🧩 What Each Part Does

### apps/mobile
- Built with React Native (Expo)
- Targets iOS (and optionally Android)
- Uses `nativewind` for styling
- UI toggles between "Easy" and "Pro" modes

### apps/web
- Next.js web app using App Router
- Public dashboard + full-featured desktop access
- Auth via NextAuth.js, protected routes

### packages/ui
- Shared UI components (inputs, cards, buttons, chart components)
- Used by both mobile and web apps

### packages/utils
- Utility functions: currency format, date helpers, math helpers

### packages/services
- API calls via Axios or Fetch
- Abstracted into `TransactionService`, `AuthService`, `StatsService` etc.

### packages/auth
- JWT decoding/refresh logic
- Custom `useAuth()` hooks
- Shared user context

### backend/
- NestJS app with modular feature-based architecture
- REST endpoints for auth, transactions, stats, sync
- Middleware, guards, DTOs for security and type safety

### prisma/
- Database schema (Postgres)
- Migration scripts and seed data

---

## 🔄 Where State Lives

| Layer         | Library / Tool           | Details |
|---------------|--------------------------|---------|
| Local UI      | Zustand or Recoil        | For toggles, modal states, mode switch |
| Server State  | React Query              | Caches responses, syncs with backend |
| Persistent    | SecureStore (Mobile)     | For tokens, preferences |
|               | localStorage (Web)       | For auth tokens and mode |

---

## 🔌 How Services Connect

### Mobile/Web Apps ⟷ API
- All API calls are handled through shared `services/` package
- Each service uses Axios or Fetch with a base URL from `.env`
- Token is injected into requests via interceptors

### API ⟷ Database
- NestJS modules use Prisma as ORM
- Services inside modules (e.g., `TransactionsService`) interact with the DB

### Auth Flow
- JWTs issued on login, stored securely
- Token refresh via `/auth/refresh`
- Apple Sign-In for mobile, Google/Email for web

---

## 🔧 Mode Switching

- Global state `appMode` toggled via a `useAppMode()` hook
- Affects which UI components are rendered (minimal vs full-featured)
- Persisted across sessions using local storage or SecureStore

---

## 💡 Future-Proof Design

- Modular services allow adding sync (Plaid, Salt Edge)
- Can plug in GraphQL layer later
- Can add offline support via SQLite on mobile