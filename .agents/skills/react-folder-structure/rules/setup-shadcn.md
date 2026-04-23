---
title: Initialize shadcn/ui — Never Edit Generated Files
impact: HIGH
tags: setup, shadcn, ui, components
---

## Initialize shadcn/ui — Never Edit Generated Files

Run the shadcn CLI to initialize and add components. Files inside `src/components/ui/` are **auto-generated** and must never be manually edited.

**Initialize (run once):**

```bash
npx shadcn@latest init
```

Choose your base color when prompted (e.g. `Neutral`). This creates `components.json` and populates `src/components/ui/`.

**Add components as needed:**

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add select
# etc.
```

**Incorrect (manually editing a generated component):**

```tsx
// ❌ src/components/ui/button.tsx — do NOT touch this file
export function Button({ ... }) {
  // adding custom logic here will be lost on next `shadcn add`
}
```

**Correct (compose shadcn components inside your feature):**

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

Customize appearance exclusively through:
1. CSS variable tokens in `src/index.css` (theme-wide changes)
2. `className` props when using the component (instance-level changes)
3. Wrapping the component in your own feature sub-component (behavioral changes)
