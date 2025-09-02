import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'node:path'

function logBuildPlugin() {
  return {
    name: 'log-build',
    buildStart() {
      console.log('[log-build] build started at', new Date().toLocaleTimeString())
    },
  generateBundle(_options: any, bundle: Record<string, any>) {
      console.log('[log-build] output chunks:', Object.keys(bundle))
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), logBuildPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
