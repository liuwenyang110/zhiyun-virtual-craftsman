<template>
  <svg class="corner-ornament" :class="position" viewBox="0 0 120 120" aria-hidden="true">
    <path d="M0 0h120v24H42c-10 0-18 8-18 18v78H0V0Z" fill="currentColor" />
    <circle cx="56" cy="56" r="18" fill="var(--color-paper)" />
    <path d="M56 18c8 15 8 26 0 34-8-8-8-19 0-34ZM18 56c15-8 26-8 34 0-8 8-19 8-34 0Z" fill="var(--color-paper)" />
  </svg>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: 'top-left',
  },
})
</script>

<style scoped>
.corner-ornament {
  position: absolute;
  width: 92px;
  height: 92px;
  color: rgba(200, 16, 46, 0.78);
  pointer-events: none;
}

.top-left { top: 0; left: 0; }
.top-right { top: 0; right: 0; transform: scaleX(-1); }
.bottom-left { bottom: 0; left: 0; transform: scaleY(-1); }
.bottom-right { right: 0; bottom: 0; transform: scale(-1); }
</style>
