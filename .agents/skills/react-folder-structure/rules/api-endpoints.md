---
title: Centralized Endpoint Constants — No Hardcoded URLs
impact: HIGH
tags: api, endpoints, constants, urls
---

## Centralized Endpoint Constants — No Hardcoded URLs

All API URL strings live in `src/api/endpoints.ts`. Never write a URL string literal directly inside a query hook or component.

**Incorrect (URL string hardcoded in the hook):**

```ts
// ❌ Magic string — breaks silently if the route changes
const { data } = await apiClient.get('/robots')
const { data } = await apiClient.delete(`/robots/${robotId}`)
```

**Correct (`src/api/endpoints.ts`):**

```ts
// ✅ src/api/endpoints.ts
export const API_ENDPOINTS = {
  ROBOTS: {
    LIST:         '/robots',
    CREATE:       '/robots',
    DELETE:       (id: string) => `/robots/${id}`,
    CONNECT:      (id: string) => `/robots/${id}/connect`,
  },
  VIEWS: {
    CREATE:       '/views',
    DELETE:       (id: string) => `/views/${id}`,
    UPDATE_LAYOUT:(id: string) => `/views/${id}/layout`,
  },
  TOOLS: {
    CREATE:       '/tools',
    DELETE:       (id: string) => `/tools/${id}`,
  },
  PROGRAMS: {
    LIST:         '/programs',
    CREATE:       '/programs',
    UPDATE:       (id: string) => `/programs/${id}`,
    DELETE:       (id: string) => `/programs/${id}`,
  },
  HEALTH: '/health',
} as const
```

**Correct (hook uses constants):**

```ts
// ✅ Any route change only needs updating in endpoints.ts
import { API_ENDPOINTS } from '../endpoints'

const { data } = await apiClient.get(API_ENDPOINTS.ROBOTS.LIST)
const { data } = await apiClient.delete(API_ENDPOINTS.ROBOTS.DELETE(robotId))
```

**Benefits:**
- Route renames require one change in one place
- TypeScript auto-completes endpoint paths
- Easy to audit all API surfaces the app touches
