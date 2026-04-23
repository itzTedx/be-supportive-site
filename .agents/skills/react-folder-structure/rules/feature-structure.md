---
title: Feature Directory Structure
impact: HIGH
tags: feature, structure, components, shared, stores, hooks, types
---

## Feature Directory Structure

Every feature lives inside `src/components/features/<FeatureName>/` and follows this exact layout:

```
src/components/features/
└── FeatureName/
    ├── FeatureName.tsx       ← Root component. The only public export.
    ├── types.ts              ← TypeScript types local to this feature only.
    ├── components/           ← Sub-components imported DIRECTLY by FeatureName.tsx.
    │   └── SubComponent.tsx
    ├── shared/               ← Components used by >1 file inside this feature.
    │   └── SharedPiece.tsx
    ├── hooks/                ← Hooks used only within this feature.
    │   └── useFeatureLogic.ts
    └── stores/               ← Zustand store scoped to this feature (if needed).
        └── useFeatureStore.ts
```

**Real example — `Sidebar` feature:**

```
src/components/features/Sidebar/
├── Sidebar.tsx              ← Exported to App.tsx
├── types.ts                 ← RobotDisplay, ViewItem types
├── components/
│   ├── RobotItem.tsx        ← Rendered directly inside Sidebar.tsx
│   └── NoRobotsMessage.tsx  ← Rendered directly inside Sidebar.tsx
└── shared/
    └── ViewItem.tsx         ← Used by RobotItem and another sub-component
```

**Not every sub-folder needs to exist.** Only create `hooks/`, `shared/`, or `stores/` when you actually need them.

**Incorrect (flat, unorganised):**

```
src/components/
├── Sidebar.tsx
├── RobotItem.tsx
├── ViewItem.tsx
├── SidebarTypes.ts
```

**Correct (self-contained feature directory):**

```
src/components/features/Sidebar/
├── Sidebar.tsx
├── types.ts
├── components/
│   └── RobotItem.tsx
└── shared/
    └── ViewItem.tsx
```
