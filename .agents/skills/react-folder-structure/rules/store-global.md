---
title: Global Zustand Store — App-Wide State Only
impact: MEDIUM
tags: store, zustand, global, state
---

## Global Zustand Store — App-Wide State Only

Put a Zustand store in `src/stores/` only when the state is truly shared across multiple features or needed at the `App.tsx` level. Use the simple `create()` API.

**When to use a global store:**
- Theme / dark mode toggle
- Global notification queue
- App-level auth state (if not handled by a library)
- State needed by more than two unrelated features

**Incorrect (feature-specific state polluting the global store):**

```ts
// ❌ src/stores/useAppStore.ts — too specific to one feature
export const useAppStore = create((set) => ({
  selectedRobotId: null,       // belongs in a feature or local hook
  programmingBlocks: [],       // belongs in ProgrammingWidget's scoped store
  setSelectedRobotId: (id) => set({ selectedRobotId: id }),
}))
```

**Correct (only cross-cutting concerns):**

```ts
// ✅ src/stores/useThemeStore.ts
import { create } from 'zustand'

interface ThemeStore {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
}))
```

**Consume in any component:**

```tsx
import { useThemeStore } from '@/stores/useThemeStore'

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()
  return <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
}
```
