---
title: Always Use CSS Variable Tokens — Never Raw Tailwind Colors
impact: HIGH
tags: style, tailwind, css-variables, tokens, theme, dark-mode
---

## Always Use CSS Variable Tokens — Never Raw Tailwind Colors

All colors in the app must be referenced as CSS design-token variables defined in `src/index.css`. This makes theme changes (dark mode, brand color updates) a one-line edit instead of a codebase-wide search.

**`src/index.css` — define all tokens here:**

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Map Tailwind utilities to CSS variables */
  --color-background:           var(--background);
  --color-foreground:           var(--foreground);
  --color-primary:              var(--primary);
  --color-primary-foreground:   var(--primary-foreground);
  --color-secondary:            var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted:                var(--muted);
  --color-muted-foreground:     var(--muted-foreground);
  --color-accent:               var(--accent);
  --color-accent-foreground:    var(--accent-foreground);
  --color-destructive:          var(--destructive);
  --color-border:               var(--border);
  --color-input:                var(--input);
  --color-ring:                 var(--ring);
  --color-success:              var(--success);
  --color-error:                var(--error);
}

:root {
  --radius: 0.625rem;
  --background: #ffffff;
  --foreground: #1f2937;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --border: #e5e7eb;
  --success: oklch(0.723 0.219 149.579);
  --error: oklch(0.628 0.258 29.234);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(1 0 0 / 10%);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

**Incorrect (hardcoded raw Tailwind colors):**

```tsx
// ❌ Will not change when the theme changes
<div className="bg-white text-gray-900 border-gray-200">
<p className="text-gray-500">
<button className="bg-blue-600 text-white">
```

**Correct (CSS variable tokens):**

```tsx
// ✅ Responds to light/dark theme and any token changes
<div className="bg-background text-foreground border border-border">
<p className="text-muted-foreground">
<button className="bg-primary text-primary-foreground">
```

**When is it OK to use raw Tailwind colors?**

Only when styling is truly static and has nothing to do with the app theme — e.g. a decorative illustration gradient or a third-party embed container. These are rare. When in doubt, use a token.

**Extending the token system:**

If you need a new semantic color (e.g. `--warning`), define it in `index.css` and add it to `@theme inline`. Never invent new tokens by using raw hex values directly in components.

```css
/* ✅ Add to index.css */
@theme inline {
  --color-warning: var(--warning);
}
:root {
  --warning: oklch(0.85 0.18 85);
}
.dark {
  --warning: oklch(0.75 0.18 85);
}
```

```tsx
/* ✅ Then use in components */
<span className="text-warning">Caution</span>
```
