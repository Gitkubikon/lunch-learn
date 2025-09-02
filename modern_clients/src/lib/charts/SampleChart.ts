import type { SvelteComponent } from 'svelte'

// Tiny inline component factory to avoid separate .svelte for brevity
export const SampleChart: typeof SvelteComponent = class extends (class {} as any) {
  // Svelte will compile a fragment from the markup string in a real .svelte file.
  // For a lunch & learn demo we keep this lightweight; normally define a .svelte component.
  $$render() { return `<div style="padding:1rem;border:1px dashed #555;border-radius:6px">Dynamic module loaded ✅ (chunk split)<\/div>` }
} as any
