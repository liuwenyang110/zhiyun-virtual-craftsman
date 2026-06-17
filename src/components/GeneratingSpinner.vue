<template>
  <div class="generating-spinner" :class="{ active }">
    <WindowFlower />
    <p v-if="active" class="label">AI 正在生成剪纸图案…</p>
    <p v-else class="label done">✨ 生成完成</p>
  </div>
</template>

<script setup>
import WindowFlower from './WindowFlower.vue'

defineProps({
  active: { type: Boolean, default: true },
})
</script>

<style scoped>
.generating-spinner {
  display: grid;
  place-items: center;
  gap: 20px;
  padding: 40px;
}

.generating-spinner :deep(.window-flower) {
  width: 140px;
}

.generating-spinner.active :deep(.window-flower) {
  animation: spin-slow 3s linear infinite;
  color: var(--color-cinnabar);
}

.generating-spinner:not(.active) :deep(.window-flower) {
  color: var(--color-cinnabar);
}

.label {
  font-family: var(--font-title);
  font-size: 16px;
  color: var(--color-rouge);
  letter-spacing: 0.08em;
}

.label.done {
  color: var(--color-gold);
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
