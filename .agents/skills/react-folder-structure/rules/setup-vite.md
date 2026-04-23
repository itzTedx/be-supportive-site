---
title: Scaffold Vite + React + TypeScript + Tailwind v4
impact: HIGH
tags: setup, vite, tailwind, typescript, aliases
---

## Scaffold Vite + React + TypeScript + Tailwind v4

Use this exact sequence when starting a new project from scratch.

**Step 1 — Create the Vite project:**

```bash
npm create vite@latest . -- --template react-ts
npm install
```

**Step 2 — Install Tailwind CSS (v4 Vite plugin, NOT PostCSS):**

```bash
npm install tailwindcss @tailwindcss/vite tw-animate-css
npm install -D @types/node
```

In `vite.config.ts`, replace everything with:

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

In `src/index.css`, start with:

```css
@import "tailwindcss";
@import "tw-animate-css";
```

**Step 3 — Configure TypeScript path aliases (`@/`):**

`tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

`tsconfig.app.json` — add inside `compilerOptions`:
```json
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

**Step 4 — Install core runtime dependencies:**

```bash
npm install axios @tanstack/react-query zustand lucide-react
```
