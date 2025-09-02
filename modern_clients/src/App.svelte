<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import ReactiveTodo from '@/lib/runes/ReactiveTodo.svelte'
  import DynamicChart from '@/lib/DynamicChart.svelte'
  import EnvInfo from '@/lib/EnvInfo.svelte'
  import ThemeSwitcher from '@/lib/ThemeSwitcher.svelte'
  import { theme } from '@/lib/stores/theme'
  $: currentTheme = $theme
</script>

<main class={currentTheme}>
  <aside>
    <div class="logos">
      <a href="https://vite.dev" target="_blank" rel="noreferrer" aria-label="Vite website"><img src={viteLogo} alt="Vite" /></a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer" aria-label="Svelte website"><img src={svelteLogo} alt="Svelte" /></a>
    </div>
    <div class="panel">
      <h2>Theme</h2>
      <ThemeSwitcher />
      <EnvInfo />
    </div>
    <div class="panel">
      <h2>Docs</h2>
      <ul style="margin:.2rem 0 0; padding:0; list-style:none; display:flex; flex-direction:column; gap:.35rem; font-size:.72rem">
        <li><a href="https://svelte.dev/docs/svelte/5/runes" target="_blank" rel="noreferrer">Runes</a></li>
        <li><a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">Vite Guide</a></li>
        <li><a href="https://bun.sh/docs" target="_blank" rel="noreferrer">Bun Docs</a></li>
      </ul>
    </div>
  </aside>
  <section style="display:flex; flex-direction:column; gap:1.1rem;">
    <header>
      <h1>Modern Client</h1>
    </header>
    <div class="grid">
      <div class="panel" aria-labelledby="counter-heading">
        <header><h2 id="counter-heading">Counter</h2></header>
        <p>Local <code>$state</code>.</p>
        <Counter />
      </div>
      <div class="panel" aria-labelledby="todo-heading">
        <header><h2 id="todo-heading">Todos</h2></header>
        <p>Runes interplay.</p>
        <ReactiveTodo />
      </div>
      <div class="panel" aria-labelledby="dynamic-heading">
        <header><h2 id="dynamic-heading">Lazy Chunk</h2></header>
        <p>Dynamic import on click.</p>
        <DynamicChart />
      </div>
    </div>
    <footer>
      <p class="muted">Toggle theme • Inspect network after loading chart • Edit components to see HMR.</p>
    </footer>
  </section>
</main>

<style>
  /* component-specific overrides if needed */
</style>
