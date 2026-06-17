<template>
  <svg class="window-flower" viewBox="0 0 240 240" aria-hidden="true">
    <circle cx="120" cy="120" r="108" fill="currentColor" />
    <circle cx="120" cy="120" r="72" fill="var(--color-paper)" />
    <g fill="currentColor">
      <path d="M120 26c16 32 16 56 0 72-16-16-16-40 0-72Z" />
      <path d="M120 214c-16-32-16-56 0-72 16 16 16 40 0 72Z" />
      <path d="M26 120c32-16 56-16 72 0-16 16-40 16-72 0Z" />
      <path d="M214 120c-32 16-56 16-72 0 16-16 40-16 72 0Z" />
      <path d="M54 54c34 5 55 17 61 39-22-6-34-27-61-39Z" />
      <path d="M186 186c-34-5-55-17-61-39 22 6 34 27 61 39Z" />
      <path d="M186 54c-5 34-17 55-39 61 6-22 27-34 39-61Z" />
      <path d="M54 186c5-34 17-55 39-61-6 22-27 34-39 61Z" />
    </g>
    <circle cx="120" cy="120" r="30" fill="currentColor" />
    <circle cx="120" cy="120" r="14" fill="var(--color-paper)" />
  </svg>
</template>

<style scoped>
.window-flower {
  color: var(--color-cinnabar);
  filter: drop-shadow(0 20px 30px rgba(168, 32, 26, 0.18));
}
</style>
