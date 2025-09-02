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
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <ThemeSwitcher />
  <EnvInfo />

  <div class="card">
    <h2>Counter (Rune)</h2>
    <Counter />
  </div>

  <ReactiveTodo />

  <DynamicChart />

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  main.light { background:#fff; color:#222; }
  main.dark { background:#111; color:#eee; }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
