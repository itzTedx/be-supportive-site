---
title: components/ vs shared/ Inside a Feature
impact: HIGH
tags: feature, components, shared, co-location
---

## components/ vs shared/ Inside a Feature

The distinction between `components/` and `shared/` inside a feature is about **who imports whom**.

| Folder | Rule | Example |
|--------|------|---------|
| `components/` | Only sub-components that `FeatureName.tsx` imports directly | `RobotItem.tsx` is rendered in `Sidebar.tsx` |
| `shared/` | Sub-components used by two or more files *inside* the feature | `ViewItem.tsx` used in `RobotItem.tsx` and `ToolItem.tsx` |

**Incorrect (ViewItem is used inside RobotItem, not by the root):**

```tsx
// ❌ Wrong — ViewItem is not directly imported by Sidebar.tsx
src/components/features/Sidebar/components/ViewItem.tsx
```

**Correct (ViewItem is shared between multiple sub-components):**

```tsx
// ✅ Correct — ViewItem lives in shared/ because it's used by multiple internal files
src/components/features/Sidebar/shared/ViewItem.tsx
```

**Correct usage in code:**

```tsx
// src/components/features/Sidebar/Sidebar.tsx — the root
import { RobotItem } from './components/RobotItem'     // ← directly rendered here
import { NoRobotsMessage } from './components/NoRobotsMessage' // ← directly rendered here

// src/components/features/Sidebar/components/RobotItem.tsx
import { ViewItem } from '../shared/ViewItem'  // ← from shared, not components
```

**When does something go in `shared/`?**
- It is NOT imported by the root `FeatureName.tsx`
- It IS imported by two or more files within the feature

If only one file inside the feature uses a component and it's not the root, keep it co-located in that component's own file or as a local sub-component.
