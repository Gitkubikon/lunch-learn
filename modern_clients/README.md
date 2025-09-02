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
7. Global store vs local rune state (3 min)
8. Build-time constants & environment (3 min)
9. Vite plugin anatomy (3 min)
10. Packaging / library build concept (3 min)
11. Caveats & gotchas (3 min)
12. Q&A / Next steps (2 min)

## Key Demos (open `src/App.svelte`)

| Feature | File | Highlight |
|---------|------|-----------|
| Rune basics | `src/lib/Counter.svelte` | `$state` for primitive counter |
| Derived state & filters | `src/lib/runes/ReactiveTodo.svelte` | `$state`, `$derived`, `$effect` |
| Dynamic import | `src/lib/DynamicChart.svelte` | `import()` splits a chunk |
| Path alias | `vite.config.ts` + imports | `@/` points to `src/` |
| Global store | `src/lib/stores/theme.ts` + `ThemeSwitcher.svelte` | `writable` vs local `$state` |
| Build define | `EnvInfo.svelte` | `define.__BUILD_TIME__` replacement |
| Vite plugin | `vite.config.ts` | `log-build` custom plugin |

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
## Global Store vs Local Rune State

Use local `$state` for encapsulated component state. Use Svelte stores (e.g. `writable`) when multiple components need to observe or mutate a shared value (`theme` demo). Runes reduce boilerplate locally but do not replace cross-tree state mechanisms.

## Build-Time Constants

`define` in `vite.config.ts` injects constants at build. We add `__BUILD_TIME__` and display it in `EnvInfo.svelte`. Great for stamping versions or feature flags. Avoid putting secrets here—it's all public after bundling.

## Custom Vite Plugin Snapshot

Minimal plugin `log-build` demonstrates hooks: `buildStart` and `generateBundle`. Typical real-world uses: virtual modules, code transforms, custom asset manifests.

## Bun Workflow Notes

- Installs are fast (`bun install` uses lockfile `bun.lock`).
- `bun run <script>` executes scripts from `package.json` similar to npm but faster startup.
- You can run TS directly (`bun src/main.ts`) if needed for utilities.
- Publishing: Bun can build with `bun build` (not used here) but for Svelte libraries you'd often rely on `vite build --config lib.vite.config.ts` or `svelte-package` (SvelteKit). Keep runtime portability: consumers may use Node / Bun / Deno.

## Packaging Components (Outline)

For a reusable component library:
1. Create `src/lib/index.ts` exporting components.
2. Add a separate `vite.lib.config.ts` using `build.lib` with `formats: ['es','cjs']`.
3. Ensure `svelte` field or `exports` map in `package.json` for consumers.
4. Run `vite build --config vite.lib.config.ts` then publish (omit demo assets).

This repo stays as an app demo, but those steps illustrate next directions.

## Common Gotchas / Caveats

| Area | Caveat | Mitigation |
|------|--------|------------|
| Runes | `$derived` value vs function confusion | Ensure you pass a value (not a function returning array) when iterating |
| Dynamic import | Bundled path must be statically analyzable | Avoid string concatenation with unknown segments |
| Stores vs runes | Over-using stores for local state | Prefer `$state` inside one component |
| Build define | Leaks secrets if misused | Only inject safe values |
| Path aliases | Breaks if tsconfig paths missing | Keep TS `paths` in sync with Vite `alias` |
| Plugin logging | Noisy CI logs | Gate with env flag if scaling up |

## Dev Workflow (Narrative)

1. Install deps: `bun install` (fast, deterministic with `bun.lock`).
2. Start dev: `bun run dev` (Vite HMR + Svelte compile in-memory).
3. Edit a component using runes; instant reactive update. For shared state, edit a store file.
4. Inspect network: trigger dynamic chart load; observe separate JS chunk.
5. Build: `bun run build` — plugin logs chunk names, `__BUILD_TIME__` stamped.
6. Preview: `bun run preview` to simulate production server.
7. (Optional) Library build path: add a library config and verify tree-shakable exports.

## Performance Pointers

- Runes remove some subscription layers; micro benchmark only when necessary.
- Dynamic import defers cost until user intent (improves TTI for initial route).
- Keep an eye on bundle report (could add `rollup-plugin-visualizer` if teaching size analysis—omitted to stay minimal).


Configured in `vite.config.ts` with `alias: { '@': 'src' }` enabling concise absolute-style imports.

## Potential Exercises

- Persist todos to `localStorage` inside `$effect`.
- Add a derived progress bar component that animates.
- Swap Bun for pnpm and compare install times.

## References

- Svelte Runes: https://svelte.dev/docs/svelte/5/runes
- Vite Guide: https://vite.dev/guide/
- Bun Docs: https://bun.sh/docs
