# React Folder Structure & Conventions

**Version 1.0.0**
Philipp Luchsinger

> **Note:**
> This document is for agents and LLMs to follow when setting up, maintaining,
> or building React + Vite + TypeScript + shadcn/ui projects. It defines the
> canonical project structure, API layer conventions, state management patterns,
> and styling rules used across all projects by this author.

---

## Table of Contents

1. [Project Setup](#1-project-setup)
   - 1.1 [Scaffold Vite + React + TypeScript + Tailwind v4](#11-scaffold-vite--react--typescript--tailwind-v4)
   - 1.2 [Initialize shadcn/ui — Never Edit Generated Files](#12-initialize-shadcnui--never-edit-generated-files)
2. [Top-Level Folder Structure](#2-top-level-folder-structure)
3. [Feature Architecture](#3-feature-architecture)
   - 3.1 [Feature Directory Layout](#31-feature-directory-layout)
   - 3.2 [components/ vs shared/ Inside a Feature](#32-components-vs-shared-inside-a-feature)
   - 3.3 [Feature Boundaries — Only Import Root Exports](#33-feature-boundaries--only-import-root-exports)
4. [API Layer](#4-api-layer)
   - 4.1 [Single Axios Client Instance](#41-single-axios-client-instance)
   - 4.2 [Centralized Endpoint Constants — No Hardcoded URLs](#42-centralized-endpoint-constants--no-hardcoded-urls)
   - 4.3 [API Domain Folder — One Folder Per Domain](#43-api-domain-folder--one-folder-per-domain)
   - 4.4 [TanStack Query — Key Factories and Hook Patterns](#44-tanstack-query--key-factories-and-hook-patterns)
5. [State Management — Zustand](#5-state-management--zustand)
   - 5.1 [Global Store — App-Wide State Only](#51-global-store--app-wide-state-only)
   - 5.2 [Scoped Store — Feature-Local State via React Context](#52-scoped-store--feature-local-state-via-react-context)
6. [Styling](#6-styling)
   - 6.1 [Always Use CSS Variable Tokens — Never Raw Tailwind Colors](#61-always-use-css-variable-tokens--never-raw-tailwind-colors)
7. [Naming Conventions](#7-naming-conventions)

---

## 1. Project Setup

### 1.1 Scaffold Vite + React + TypeScript + Tailwind v4

**Impact: HIGH — follow this exact sequence for new projects.**

**Step 1 — Create the Vite project:**

```bash
npm create vite@latest . -- --template react-ts
npm install
```

**Step 2 — Install Tailwind CSS (v4 Vite plugin, NOT PostCSS):**

```bash
npm install tailwindcss @tailwindcss/vite tw-animate-css
npm install -D @types/node
```

`vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

`src/index.css` — start with:

```css
@import "tailwindcss";
@import "tw-animate-css";
```

**Step 3 — Configure TypeScript path aliases:**

`tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

`tsconfig.app.json` — add inside `compilerOptions`:
```json
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

**Step 4 — Install core runtime dependencies:**

```bash
npm install axios @tanstack/react-query zustand lucide-react
```

---

### 1.2 Initialize shadcn/ui — Never Edit Generated Files

**Impact: HIGH**

```bash
npx shadcn@latest init
```

Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
```

**Incorrect (manually editing a generated component):**

```tsx
// ❌ src/components/ui/button.tsx — NEVER edit this file
export function Button({ ... }) {
  // Changes here will be overwritten by the next `npx shadcn@latest add`
}
```

**Correct (composing shadcn inside your feature):**

```tsx
// ✅ src/components/features/Sidebar/components/AddRobotButton.tsx
import { Button } from "@/components/ui/button";

export function AddRobotButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="outline" className="h-12 w-full" onClick={onClick}>
      Connect New Robot
    </Button>
  );
}
```

Customize only through: (1) CSS variable tokens in `index.css`, (2) `className` props, (3) wrapping in a feature component.

---

## 2. Top-Level Folder Structure

```
src/
├── App.tsx              # Root — composes top-level features only
├── main.tsx             # Entry point, wraps app in QueryClientProvider
├── index.css            # Global styles + CSS design tokens (theme variables)
├── api/                 # All server communication (Axios + TanStack Query)
│   ├── client.ts        # Shared Axios instance
│   ├── endpoints.ts     # All URL constants
│   └── <domain>/        # One folder per backend entity
│       ├── use<Domain>Api.ts
│       └── types.ts
├── assets/              # Static files (images, fonts, svgs)
├── components/
│   ├── features/        # Self-contained business-logic features
│   └── ui/              # Auto-generated shadcn primitives — do NOT edit
├── hooks/               # Global, app-wide hooks (used by App.tsx or 2+ features)
├── lib/                 # Utilities (e.g. lib/utils.ts from shadcn: cn(), etc.)
└── stores/              # Global Zustand stores (app-wide state only)
```

---

## 3. Feature Architecture

### 3.1 Feature Directory Layout

**Impact: HIGH**

Every feature is a self-contained directory inside `src/components/features/`:

```
src/components/features/
└── FeatureName/
    ├── FeatureName.tsx       ← Root component. The only public export.
    ├── types.ts              ← TypeScript types local to this feature.
    ├── components/           ← Sub-components imported DIRECTLY by FeatureName.tsx.
    │   └── SubComponent.tsx
    ├── shared/               ← Components used by >1 file inside this feature.
    │   └── SharedPiece.tsx
    ├── hooks/                ← Hooks scoped to this feature only.
    │   └── useFeatureLogic.ts
    └── stores/               ← Zustand store scoped to this feature (if needed).
        └── useFeatureStore.ts
```

**Real example — `Sidebar`:**

```
src/components/features/Sidebar/
├── Sidebar.tsx              ← Exported to App.tsx
├── types.ts
├── components/
│   ├── RobotItem.tsx        ← Rendered directly inside Sidebar.tsx
│   └── NoRobotsMessage.tsx
└── shared/
    └── ViewItem.tsx         ← Used by RobotItem + another sub-component
```

Not every sub-folder is required. Create `hooks/`, `shared/`, or `stores/` only when needed.

---

### 3.2 components/ vs shared/ Inside a Feature

**Impact: HIGH**

| Folder | Rule |
|--------|------|
| `components/` | Only direct children of `FeatureName.tsx` |
| `shared/` | Components used by two or more files *within* the feature (not the root) |

**Incorrect (ViewItem used inside RobotItem, placed in components/):**

```
components/
  RobotItem.tsx
  ViewItem.tsx   ← ❌ ViewItem is not a direct child of Sidebar.tsx
```

**Correct:**

```
components/
  RobotItem.tsx   ← direct child of Sidebar.tsx ✅
shared/
  ViewItem.tsx    ← used by RobotItem and ToolItem ✅
```

```tsx
// Sidebar.tsx — root
import { RobotItem } from './components/RobotItem'        // ✅ direct child

// RobotItem.tsx — sub-component
import { ViewItem } from '../shared/ViewItem'             // ✅ from shared
```

---

### 3.3 Feature Boundaries — Only Import Root Exports

**Impact: HIGH**

One feature must never import the internals of another feature. Only the root component export is public.

**Incorrect:**

```tsx
// ❌ Reaching into Sidebar's internals
import { RobotItem } from '@/components/features/Sidebar/components/RobotItem'
import { useViewStore } from '@/components/features/Sidebar/stores/useViewStore'
```

**Correct:**

```tsx
// ✅ Only the root export
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
```

**`App.tsx` composes all features:**

```tsx
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
import { WidgetSystem } from '@/components/features/WidgetSystem/WidgetSystem'
import { ConnectNewPluginModal } from '@/components/features/ConnectNewPluginModal/ConnectNewPluginModal'
import { Toaster } from '@/components/ui/sonner'
import { useRobotManagement } from '@/hooks/useRobotManagement'

function App() {
  const { robots, selectedRobotId, handleRobotSelect, ... } = useRobotManagement()

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar robots={robots} onRobotSelect={handleRobotSelect} ... />
      <WidgetSystem ... />
      <ConnectNewPluginModal ... />
      <Toaster position="bottom-right" />
    </div>
  )
}
```

---

## 4. API Layer

### 4.1 Single Axios Client Instance

**Impact: HIGH**

All HTTP calls go through one shared Axios instance in `src/api/client.ts`.

**Incorrect:**

```ts
// ❌ Ad-hoc instance with hardcoded URL
import axios from 'axios'
const { data } = await axios.get('http://localhost:8000/robots')
```

**Correct — `src/api/client.ts`:**

```ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)
```

```ts
// ✅ All hooks import the shared instance
import { apiClient } from '../client'
```

---

### 4.2 Centralized Endpoint Constants — No Hardcoded URLs

**Impact: HIGH**

All URL strings live in `src/api/endpoints.ts`. Never write a URL literal in a hook or component.

**Incorrect:**

```ts
// ❌ Hardcoded URL — breaks across the codebase if the route changes
const { data } = await apiClient.get('/robots')
const { data } = await apiClient.delete(`/robots/${id}`)
```

**Correct — `src/api/endpoints.ts`:**

```ts
export const API_ENDPOINTS = {
  ROBOTS: {
    LIST:          '/robots',
    CREATE:        '/robots',
    DELETE:        (id: string) => `/robots/${id}`,
    CONNECT:       (id: string) => `/robots/${id}/connect`,
  },
  VIEWS: {
    CREATE:        '/views',
    DELETE:        (id: string) => `/views/${id}`,
    UPDATE_LAYOUT: (id: string) => `/views/${id}/layout`,
  },
  TOOLS: {
    CREATE:        '/tools',
    DELETE:        (id: string) => `/tools/${id}`,
  },
  PROGRAMS: {
    LIST:          '/programs',
    CREATE:        '/programs',
    UPDATE:        (id: string) => `/programs/${id}`,
    DELETE:        (id: string) => `/programs/${id}`,
  },
  HEALTH: '/health',
} as const
```

```ts
// ✅ One place to update when routes change
import { API_ENDPOINTS } from '../endpoints'
await apiClient.get(API_ENDPOINTS.ROBOTS.LIST)
await apiClient.delete(API_ENDPOINTS.ROBOTS.DELETE(robotId))
```

---

### 4.3 API Domain Folder — One Folder Per Domain

**Impact: HIGH**

```
src/api/
├── client.ts
├── endpoints.ts
├── robots/
│   ├── useRobotApi.ts    ← TanStack Query hooks
│   └── types.ts          ← Request/response types ONLY
├── views/
│   ├── useViewApi.ts
│   └── types.ts
└── programs/
    ├── useProgramApi.ts
    └── types.ts
```

**`types.ts` — shapes only, no logic:**

```ts
// src/api/robots/types.ts
export interface Robot {
  robot_id: string
  robot_name: string
  connected: boolean
  views: View[]
  tools: Tool[]
}

export interface CreateRobotRequest {
  robot_name: string
  robot_type_id: string
  ip_address: string
}

export interface RobotsResponse {
  robots: Robot[]
}
```

---

### 4.4 TanStack Query — Key Factories and Hook Patterns

**Impact: HIGH**

**Incorrect (no key factory, inline URL, mismatched invalidation):**

```ts
// ❌ Inconsistent keys — invalidation will silently fail
export function useRobots() {
  return useQuery({ queryKey: ['robots', 'all'], queryFn: () => apiClient.get('/robots') })
}
export function useDeleteRobot() {
  return useMutation({
    mutationFn: (id) => apiClient.delete(`/robots/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['robots'] }) // ❌ won't match!
  })
}
```

**Correct — full example `src/api/robots/useRobotApi.ts`:**

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { Robot, RobotsResponse, CreateRobotRequest } from './types'

// Query key factory — single source of truth for all cache keys
export const robotKeys = {
  all:    ['robots'] as const,
  list:   () => [...robotKeys.all, 'list'] as const,
  detail: (id: string) => [...robotKeys.all, 'detail', id] as const,
}

export function useRobots() {
  return useQuery({
    queryKey: robotKeys.list(),
    queryFn: async () => {
      const { data } = await apiClient.get<RobotsResponse>(API_ENDPOINTS.ROBOTS.LIST)
      return data
    },
  })
}

export function useCreateRobot() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: CreateRobotRequest) => {
      const { data } = await apiClient.post<Robot>(API_ENDPOINTS.ROBOTS.CREATE, payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: robotKeys.all }) // ✅ always matches
    },
  })
}

export function useDeleteRobot() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (robotId: string) => {
      await apiClient.delete(API_ENDPOINTS.ROBOTS.DELETE(robotId))
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: robotKeys.all })
    },
  })
}
```

**`main.tsx` — wrap app with QueryClientProvider:**

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
```

---

## 5. State Management — Zustand

### 5.1 Global Store — App-Wide State Only

**Impact: MEDIUM**

Use `src/stores/` only for state that truly crosses feature boundaries. Use the simple `create()` API.

**When to use a global store:**
- Theme / dark mode
- Global notifications or toasts (if not using `sonner`)
- App-level session state

**Incorrect (feature-specific state in the global store):**

```ts
// ❌ Too specific — belongs inside a feature
export const useAppStore = create((set) => ({
  selectedRobotId: null,
  programmingBlocks: [],
}))
```

**Correct:**

```ts
// ✅ src/stores/useThemeStore.ts
import { create } from 'zustand'

interface ThemeStore {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
}))
```

---

### 5.2 Scoped Store — Feature-Local State via React Context

**Impact: HIGH**

When a feature needs shared internal state, use a **context-scoped Zustand store** (`createStore()` + React context). This gives each mounted instance of the feature its own isolated store.

**Why not global `create()`?** It's a singleton — if the same feature mounts twice, both instances share one store.

**Full pattern — `stores/useMyFeatureStore.ts`:**

```ts
import { createStore, useStore } from 'zustand'
import { createContext, useContext } from 'react'

export interface MyFeatureStore {
  count: number
  increment: () => void
}

// Factory — fresh store every mount
export const createMyFeatureStore = () =>
  createStore<MyFeatureStore>((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
  }))

type MyFeatureStoreApi = ReturnType<typeof createMyFeatureStore>
export const MyFeatureStoreContext = createContext<MyFeatureStoreApi | null>(null)

export function useMyFeatureStore<T>(selector: (state: MyFeatureStore) => T): T {
  const store = useContext(MyFeatureStoreContext)
  if (!store) throw new Error('useMyFeatureStore must be inside MyFeatureStoreContext.Provider')
  return useStore(store, selector)
}
```

**Provide from the feature root:**

```tsx
import { useRef } from 'react'
import { createMyFeatureStore, MyFeatureStoreContext } from './stores/useMyFeatureStore'

export function MyFeature() {
  const storeRef = useRef(createMyFeatureStore()) // created once per mount
  return (
    <MyFeatureStoreContext.Provider value={storeRef.current}>
      {/* children */}
    </MyFeatureStoreContext.Provider>
  )
}
```

**Consume in sub-components:**

```tsx
import { useMyFeatureStore } from '../stores/useMyFeatureStore'

export function Counter() {
  const count = useMyFeatureStore((s) => s.count)       // only re-renders when count changes
  const increment = useMyFeatureStore((s) => s.increment)
  return <button onClick={increment}>Count: {count}</button>
}
```

---

## 6. Styling

### 6.1 Always Use CSS Variable Tokens — Never Raw Tailwind Colors

**Impact: HIGH**

All colors reference CSS design-token variables defined in `src/index.css`. This ensures theme changes propagate everywhere automatically.

**`src/index.css` — full token setup:**

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background:           var(--background);
  --color-foreground:           var(--foreground);
  --color-primary:              var(--primary);
  --color-primary-foreground:   var(--primary-foreground);
  --color-secondary:            var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted:                var(--muted);
  --color-muted-foreground:     var(--muted-foreground);
  --color-accent:               var(--accent);
  --color-accent-foreground:    var(--accent-foreground);
  --color-destructive:          var(--destructive);
  --color-border:               var(--border);
  --color-input:                var(--input);
  --color-ring:                 var(--ring);
  --color-success:              var(--success);
  --color-error:                var(--error);
}

:root {
  --radius: 0.625rem;
  --background: #ffffff;
  --foreground: #1f2937;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #1f2937;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --accent: #eff6ff;
  --accent-foreground: #1d4ed8;
  --destructive: oklch(0.577 0.245 27.325);
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #2563eb;
  --success: oklch(0.723 0.219 149.579);
  --error: oklch(0.628 0.258 29.234);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(1 0 0 / 10%);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

**Incorrect (hardcoded Tailwind colors):**

```tsx
// ❌ Won't change with the theme
<div className="bg-white text-gray-900 border-gray-200">
<p className="text-gray-500">
<button className="bg-blue-600 text-white">
```

**Correct (CSS variable tokens):**

```tsx
// ✅ Responds to theme changes automatically
<div className="bg-background text-foreground border border-border">
<p className="text-muted-foreground">
<button className="bg-primary text-primary-foreground">
```

**Adding a new semantic token:**

```css
/* ✅ Add to index.css — both @theme inline and :root/.dark */
@theme inline { --color-warning: var(--warning); }
:root  { --warning: oklch(0.85 0.18 85); }
.dark  { --warning: oklch(0.75 0.18 85); }
```

```tsx
<span className="text-warning">Caution</span>
```

---

## 7. Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| React components | PascalCase `.tsx` | `RobotItem.tsx` |
| Feature root | Same name as folder | `Sidebar/Sidebar.tsx` |
| Hooks | `use` prefix, camelCase `.ts` | `useRobotManagement.ts` |
| API hooks files | `use<Domain>Api.ts` | `useRobotApi.ts` |
| Zustand stores | `use` prefix, camelCase `.ts` | `useProgrammingStore.ts` |
| Types files | `types.ts` | `types.ts` |
| Utility files | camelCase `.ts` | `gridUtils.ts` |
| Path alias | Always `@/` | `import { Button } from "@/components/ui/button"` |
| Barrel files | **Not used** | — |

**No barrel `index.ts` files:**

```ts
// ❌ Don't create barrel re-exports
// src/components/features/Sidebar/index.ts  ← don't create this

// ❌ Don't import like this
import { Sidebar } from '@/components/features/Sidebar'
```

```ts
// ✅ Import directly from the file
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
```

**Named exports (not default) for all components:**

```tsx
// ❌ Default export
export default function Sidebar() { ... }

// ✅ Named export
export function Sidebar() { ... }
```

Exception: `App.tsx` and `main.tsx` use default exports per Vite convention.
