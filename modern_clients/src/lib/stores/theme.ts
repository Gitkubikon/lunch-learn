import { writable } from 'svelte/store'

// Simple global store (contrast with local $state runes)
export type Theme = 'light' | 'dark'
export const theme = writable<Theme>('light')

export function toggleTheme() {
  theme.update(t => t === 'light' ? 'dark' : 'light')
}
