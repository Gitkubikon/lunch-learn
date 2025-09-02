# Lunch & Learn: Modern Vite + Bun + TypeScript + Svelte 5 (Runes)

Hands‑on demo project showcasing modern front‑end tooling with:

- Vite 7 (fast dev + smart code-splitting)
- Bun (package manager + runtime scripts)
- TypeScript 5
- Svelte 5 runes API (`$state`, `$derived`, `$effect`)

> Purpose: Teaching / exploration. Code favors clarity over production robustness.

## Agenda

1. Why this stack (5 min)
2. Project skeleton & dev server (3 min)
3. Svelte 5 runes vs legacy stores (10 min)
4. TypeScript & path aliases (5 min)
5. Dynamic imports & code splitting (5 min)
6. Reactive derivations & side effects (5 min)
7. Q&A / Next steps (2 min)

## Key Demos (open `src/App.svelte`)

| Feature | File | Highlight |
|---------|------|-----------|
| Rune basics | `src/lib/Counter.svelte` | `$state` for primitive counter |
| Derived state & filters | `src/lib/runes/ReactiveTodo.svelte` | `$state`, `$derived`, `$effect` |
| Dynamic import | `src/lib/DynamicChart.svelte` | `import()` splits a chunk |
| Path alias | `vite.config.ts` + imports | `@/` points to `src/` |

## Running

Dev server:

```bash
bun run dev
```

Production build + preview:

```bash
bun run build
bun run preview
```

Type checking only:

```bash
bun run check
```

## Runes Recap

- `$state(initial)` creates reactive local state.
- Assigning to a `$state` variable triggers updates.
- `$derived(expr)` lazily computes from other runes.
- `$effect(() => { ... })` runs after state changes (teardown by returning a function).

Benefits: less boilerplate vs writable stores for localized state; still use external stores for cross-component persistence.

## Dynamic Import

`DynamicChart` waits until the user clicks before loading `SampleChart.ts`, demonstrating code splitting (inspect network panel to see the separate chunk).

## Path Aliases

Configured in `vite.config.ts` with `alias: { '@': 'src' }` enabling concise absolute-style imports.

## Potential Exercises

- Persist todos to `localStorage` inside `$effect`.
- Add a derived progress bar component that animates.
- Swap Bun for pnpm and compare install times.

## References

- Svelte Runes: https://svelte.dev/docs/svelte/5/runes
- Vite Guide: https://vite.dev/guide/
- Bun Docs: https://bun.sh/docs
