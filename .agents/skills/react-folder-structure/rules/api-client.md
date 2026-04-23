---
title: Single Axios Client Instance
impact: HIGH
tags: api, axios, client, interceptors
---

## Single Axios Client Instance

All HTTP communication goes through one Axios instance defined in `src/api/client.ts`. Never create ad-hoc Axios instances or call `fetch()` directly in components or hooks.

**Incorrect (ad-hoc instance inside a hook):**

```ts
// ❌ Creating a new axios instance per-hook
import axios from 'axios'

export function useRobots() {
  return useQuery({
    queryKey: ['robots'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:8000/robots') // hardcoded URL!
      return data
    }
  })
}
```

**Correct (`src/api/client.ts` — created once, imported everywhere):**

```ts
// ✅ src/api/client.ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

// Centralized error handling — runs for every response
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)
```

**Correct (hook imports the shared client):**

```ts
// ✅ src/api/robots/useRobotApi.ts
import { apiClient } from '../client'

export function useRobots() {
  return useQuery({
    queryKey: robotKeys.list(),
    queryFn: async () => {
      const { data } = await apiClient.get(API_ENDPOINTS.ROBOTS.LIST)
      return data
    }
  })
}
```

Use `import.meta.env.VITE_API_URL` so the base URL can be configured per environment via `.env` files.
