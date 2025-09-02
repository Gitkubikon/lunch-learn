<script lang="ts">
  // Demonstrates build-time replacement via define in vite.config.ts
  const buildTime = __BUILD_TIME__
</script>

<p style="font-size:.8rem;opacity:.7">Build time: {buildTime}</p>
