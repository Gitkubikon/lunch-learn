import { writable } from 'svelte/store'

export type Theme = 'light' | 'dark'

const prefersLight = typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: light)').matches
const initial: Theme = prefersLight ? 'light' : 'dark'

export const theme = writable<Theme>(initial)

let animTimeout: any
theme.subscribe(v => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement
    root.classList.remove('light','dark')
    root.classList.add(v)
    // add transition helper class briefly for coordinated transitions
    root.classList.add('theme-anim')
    clearTimeout(animTimeout)
    animTimeout = setTimeout(() => root.classList.remove('theme-anim'), 400)
  }
})

export function toggleTheme() {
  theme.update(t => t === 'light' ? 'dark' : 'light')
}
