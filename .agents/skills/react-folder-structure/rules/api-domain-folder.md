---
title: API Domain Folder — One Folder Per Domain
impact: HIGH
tags: api, domain, folder, structure, types
---

## API Domain Folder — One Folder Per Domain

Every backend resource (entity/domain) gets its own sub-folder inside `src/api/` with exactly two files.

```
src/api/
├── client.ts             ← Shared Axios instance
├── endpoints.ts          ← All URL constants
├── robots/
│   ├── useRobotApi.ts    ← TanStack Query hooks for robots
│   └── types.ts          ← Request/response TypeScript types for robots
├── views/
│   ├── useViewApi.ts
│   └── types.ts
├── tools/
│   ├── useToolApi.ts
│   └── types.ts
└── programs/
    ├── useProgramApi.ts
    └── types.ts
```

**`types.ts` — request and response shapes only:**

```ts
// src/api/robots/types.ts
export interface Robot {
  robot_id: string
  robot_name: string
  robot_type_id: string
  ip_address: string
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

**Incorrect (mixing types and hooks in one file):**

```ts
// ❌ Don't mix types and querying logic in the same file
export interface Robot { ... }
export function useRobots() { ... }
```

**Correct (separate files, single responsibility):**

```ts
// ✅ types.ts — only types
export interface Robot { ... }

// ✅ useRobotApi.ts — only hooks that import from types.ts
import type { Robot, RobotsResponse } from './types'
```

**Cross-feature types (e.g. `RobotDisplay` used in both Sidebar and App):**

These go in the API types file if they are derived from API data, or in a feature's own `types.ts` if they are UI-presentation shapes.
