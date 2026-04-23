---
title: Feature Boundaries — Only Import Root Exports
impact: HIGH
tags: feature, boundaries, encapsulation, imports
---

## Feature Boundaries — Only Import Root Exports

Features are self-contained. One feature **must never** reach into the internals of another feature. Only import the root component export.

**Incorrect (importing a sub-component of another feature):**

```tsx
// ❌ WidgetSystem is reaching into Sidebar's internals
import { RobotItem } from '@/components/features/Sidebar/components/RobotItem'
import { useViewStore } from '@/components/features/Sidebar/stores/useViewStore'
```

**Correct (only import the public root):**

```tsx
// ✅ Only the root Sidebar component is imported
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
```

**Features are composed in `App.tsx`:**

```tsx
// src/App.tsx — only place that composes features together
import { Sidebar } from '@/components/features/Sidebar/Sidebar'
import { WidgetSystem } from '@/components/features/WidgetSystem/WidgetSystem'
import { ConnectNewPluginModal } from '@/components/features/ConnectNewPluginModal/ConnectNewPluginModal'

function App() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar ... />
      <WidgetSystem ... />
      <ConnectNewPluginModal ... />
    </div>
  )
}
```

**Can features use other features?**
Yes — a feature may render another feature inside itself. It must still only import the other feature's root export, not its internals.

```tsx
// ✅ WidgetSystem importing SettingsPanel's root is fine
import { SettingsPanel } from '@/components/features/SettingsPanel/SettingsPanel'
```

**Feature grouping (large projects only):**
Once you have many tightly-related features, you MAY create a sub-folder grouping:
```
src/components/features/
└── robot-management/
    ├── Sidebar/
    └── ConnectNewPluginModal/
```
Do **not** pre-emptively group. Only group when the need is obvious.
