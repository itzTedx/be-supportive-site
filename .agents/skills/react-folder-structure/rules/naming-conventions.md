---
title: Naming Conventions
impact: MEDIUM
tags: naming, conventions, files, components, hooks, stores
---

## Naming Conventions

Consistent naming makes the codebase predictable and allows any agent or developer to locate files without searching.

| Item | Convention | Example |
|------|-----------|---------|
| React components | PascalCase `.tsx` | `RobotItem.tsx` |
| Feature root | Same name as folder | `Sidebar/Sidebar.tsx` |
| Hooks | `use` prefix, camelCase `.ts` | `useRobotManagement.ts` |
| API hooks files | `use<Domain>Api.ts` | `useRobotApi.ts` |
| Zustand stores | `use` prefix, camelCase `.ts` | `useProgrammingStore.ts` |
| Types files | `types.ts` (always this name) | `types.ts` |
| Utility files | camelCase `.ts` | `gridUtils.ts` |
| Path alias | Always use `@/` | `import { Button } from "@/components/ui/button"` |
| Barrel files | **Not used** | — |

**No barrel files (`index.ts`):**

```ts
// ❌ Don't create index.ts re-exports
// src/components/features/Sidebar/index.ts
export { Sidebar } from './Sidebar'

// ❌ Then importing like this
import { Sidebar } from '@/components/features/Sidebar'
```

```ts
// ✅ Import directly from the file
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
```

Direct imports are faster (no barrel resolution), clearer (the full path shows exactly where things live), and avoid accidental circular dependencies.

**Named exports, not default exports for components:**

```tsx
// ❌ Default export — harder to rename during refactoring
export default function Sidebar() { ... }

// ✅ Named export — import name matches component name, easier to find with grep
export function Sidebar() { ... }
```

**Exception:** `App.tsx` and `main.tsx` use default exports because Vite/React conventions require it.
