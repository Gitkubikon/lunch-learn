<script lang="ts">
  // Demonstrates on-demand dynamic import with Vite code-splitting
  let ChartComponent = $state<any>(null)
  let loading = $state(false)
  async function load() {
    if (ChartComponent || loading) return
    loading = true
    // Fake dynamic module; in a real project you'd import a heavy lib
  const mod = await import('./charts/SampleChart')
  ChartComponent = mod.SampleChart
    loading = false
  }
</script>

<div class="dynamic-chart">
  {#if ChartComponent}
    <ChartComponent />
  {:else}
    <button onclick={load} disabled={loading}>{loading ? 'Loading…' : 'Load Chart (dynamic)'}</button>
  {/if}
</div>

<style>
  .dynamic-chart { margin: 1rem 0; }
</style>
