---
title: Scoped Zustand Store — Feature-Local State via React Context
impact: HIGH
tags: store, zustand, scoped, context, feature, encapsulation
---

## Scoped Zustand Store — Feature-Local State via React Context

When a feature has internal state that must be shared between its own sub-components (but must NOT leak outside the feature), use a **context-scoped Zustand store**. This uses Zustand's vanilla `createStore()` + a React context so that each feature instance gets its own isolated store.

**Why not `create()` for feature-local state?**
`create()` creates a singleton. If the same feature is mounted twice, both instances share the same store. The context-scoped pattern creates a fresh store per mount.

**Pattern — `src/components/features/MyFeature/stores/useMyFeatureStore.ts`:**

```ts
import { createStore, useStore } from 'zustand'
import { createContext, useContext } from 'react'

// 1. Define the store shape
export interface MyFeatureStore {
  count: number
  label: string
  increment: () => void
  setLabel: (label: string) => void
}

// 2. Factory function — creates a FRESH store instance each time
export const createMyFeatureStore = () =>
  createStore<MyFeatureStore>((set) => ({
    count: 0,
    label: '',
    increment: () => set((s) => ({ count: s.count + 1 })),
    setLabel: (label) => set({ label }),
  }))

// 3. React context to scope the store instance
type MyFeatureStoreApi = ReturnType<typeof createMyFeatureStore>
export const MyFeatureStoreContext = createContext<MyFeatureStoreApi | null>(null)

// 4. Hook for child components — throws if used outside the Provider
export function useMyFeatureStore<T>(selector: (state: MyFeatureStore) => T): T {
  const store = useContext(MyFeatureStoreContext)
  if (!store) throw new Error('useMyFeatureStore must be used inside MyFeatureStoreContext.Provider')
  return useStore(store, selector)
}
```

**Provide from the feature root — `MyFeature.tsx`:**

```tsx
import { useRef } from 'react'
import { createMyFeatureStore, MyFeatureStoreContext } from './stores/useMyFeatureStore'
import { MyFeatureContent } from './components/MyFeatureContent'

export function MyFeature() {
  // useRef ensures the store instance is created once per mount, not on every render
  const storeRef = useRef(createMyFeatureStore())

  return (
    <MyFeatureStoreContext.Provider value={storeRef.current}>
      <MyFeatureContent />
    </MyFeatureStoreContext.Provider>
  )
}
```

**Consume in any sub-component:**

```tsx
// src/components/features/MyFeature/components/Counter.tsx
import { useMyFeatureStore } from '../stores/useMyFeatureStore'

export function Counter() {
  // Only subscribes to `count` — won't re-render when `label` changes
  const count = useMyFeatureStore((s) => s.count)
  const increment = useMyFeatureStore((s) => s.increment)

  return <button onClick={increment}>Count: {count}</button>
}
```

**Incorrect (using global `create()` for feature-specific state):**

```ts
// ❌ Singleton — broken if the feature mounts more than once
import { create } from 'zustand'

export const useProgrammingStore = create((set) => ({
  blocks: [],
  addBlock: (block) => set((s) => ({ blocks: [...s.blocks, block] })),
}))
```
