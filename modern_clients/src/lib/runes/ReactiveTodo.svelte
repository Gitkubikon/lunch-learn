<script lang="ts">
  // Demonstrates Svelte 5 runes: $state, $derived, $effect
  type Todo = { id: number; text: string; done: boolean }

  let todos = $state<Todo[]>([
    { id: 1, text: 'Explore Svelte 5 runes', done: true },
    { id: 2, text: 'Add a new todo', done: false }
  ])

  let filter = $state<'all' | 'open' | 'done'>('all')
  const nextId = $derived(todos.reduce((m, t) => Math.max(m, t.id), 0) + 1)
  const remaining = $derived(todos.filter(t => !t.done).length)

  function add(text: string) {
    if (!text.trim()) return
    todos = [...todos, { id: nextId, text: text.trim(), done: false }]
  }

  function toggle(id: number) {
    todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
  }

  function remove(id: number) {
    todos = todos.filter(t => t.id !== id)
  }

  let newText = $state('')

  // Effect placeholder (no noisy logging)
  $effect(() => { /* side effects here (e.g. persistence) */ })

  const visible: Todo[] = $derived(
    filter === 'open' ? todos.filter(t => !t.done)
    : filter === 'done' ? todos.filter(t => t.done)
    : todos
  )
</script>

<section class="todo-demo">
  <h2>Rune-powered Todos</h2>
  <form onsubmit={(e) => { e.preventDefault(); add(newText); newText = '' }}>
    <input bind:value={newText} placeholder="Add todo" aria-label="Add todo" />
    <button type="submit" disabled={!newText.trim()}>Add</button>
  </form>
  <div class="filters">
    {#each ['all','open','done'] as f}
      <button type="button" class:active={filter===f} onclick={() => filter = f as any}>{f}</button>
    {/each}
  </div>
  <ul>
    {#each visible as t (t.id)}
      <li>
        <label>
          <input type="checkbox" checked={t.done} onchange={() => toggle(t.id)} />
          <span class:done={t.done}>{t.text}</span>
        </label>
        <button type="button" onclick={() => remove(t.id)} aria-label="Remove">×</button>
      </li>
    {/each}
  </ul>
  <p>{remaining} remaining</p>
</section>

<style>
  .todo-demo { border: 1px solid #333; padding: 1rem; border-radius: 8px; }
  form { display: flex; gap: .5rem; margin-bottom: .5rem; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { display: flex; align-items: center; gap: .5rem; margin-bottom: .25rem; }
  .done { text-decoration: line-through; opacity: .6; }
  .filters { display: flex; gap: .25rem; margin-bottom: .5rem; }
  .filters button.active { background: #333; color: #fff; }
</style>
