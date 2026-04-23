---
title: TanStack Query — Query Key Factories and Hook Patterns
impact: HIGH
tags: api, tanstack-query, react-query, query-keys, mutations, cache
---

## TanStack Query — Query Key Factories and Hook Patterns

Each API domain defines a **query key factory** and exports one hook per operation (query or mutation). This keeps cache management predictable.

**Query key factory pattern:**

```ts
// Defines all cache key shapes for this domain in one place
export const robotKeys = {
  all:    ['robots'] as const,
  list:   () => [...robotKeys.all, 'list'] as const,
  detail: (id: string) => [...robotKeys.all, 'detail', id] as const,
}
```

**Full example — `src/api/robots/useRobotApi.ts`:**

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { Robot, RobotsResponse, CreateRobotRequest } from './types'

export const robotKeys = {
  all:    ['robots'] as const,
  list:   () => [...robotKeys.all, 'list'] as const,
  detail: (id: string) => [...robotKeys.all, 'detail', id] as const,
}

// --- Queries ---

export function useRobots() {
  return useQuery({
    queryKey: robotKeys.list(),
    queryFn: async () => {
      const { data } = await apiClient.get<RobotsResponse>(API_ENDPOINTS.ROBOTS.LIST)
      return data
    },
  })
}

// --- Mutations ---

export function useCreateRobot() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: CreateRobotRequest) => {
      const { data } = await apiClient.post<Robot>(API_ENDPOINTS.ROBOTS.CREATE, payload)
      return data
    },
    onSuccess: () => {
      // Invalidate the list so it refetches
      queryClient.invalidateQueries({ queryKey: robotKeys.all })
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

**Wrapping the app — `src/main.tsx`:**

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

**Incorrect (no query key factory, inline URL):**

```ts
// ❌ Inconsistent cache keys and hardcoded URLs
export function useRobots() {
  return useQuery({
    queryKey: ['robots', 'all'],
    queryFn: async () => {
      const { data } = await apiClient.get('/robots')
      return data
    }
  })
}

export function useDeleteRobot() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/robots/${id}`)
    },
    onSuccess: () => {
      // ❌ String doesn't match — cache won't invalidate!
      queryClient.invalidateQueries({ queryKey: ['robots'] })
    }
  })
}
```

The query key factory ensures that `invalidateQueries` always targets the correct keys without typos.
