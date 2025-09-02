<script lang="ts">
  import { theme, toggleTheme } from './stores/theme'
  $: current = $theme
</script>

<button onclick={toggleTheme} aria-label="Toggle theme">
  {current === 'light' ? '🌞 Light' : '🌙 Dark'}
</button>

<style>
  button { margin: .5rem 0; }
</style>
