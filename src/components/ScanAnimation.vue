<template>
  <div class="scan-animation" :class="{ active }">
    <div class="scan-area">
      <div class="scan-line"></div>
      <slot>
        <div class="placeholder-img">
          <WindowFlower />
        </div>
      </slot>
    </div>
    <p v-if="active" class="status">🔍 AI 正在识别剪纸作品…</p>
    <p v-else class="status done">✅ 识别完成</p>
  </div>
</template>

<script setup>
import WindowFlower from './WindowFlower.vue'

defineProps({
  active: { type: Boolean, default: true },
})
</script>

<style scoped>
.scan-animation {
  display: grid;
  place-items: center;
  gap: 20px;
}

.scan-area {
  position: relative;
  width: 280px;
  height: 280px;
  overflow: hidden;
  border: 2px solid var(--color-cinnabar);
  border-radius: 18px;
  background: var(--color-paper-deep);
}

.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-cinnabar), transparent);
  box-shadow: 0 0 16px rgba(200, 16, 46, 0.5);
  opacity: 0;
}

.active .scan-line {
  opacity: 1;
  animation: scan 1.8s ease-in-out infinite;
}

.placeholder-img {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
}

.placeholder-img :deep(.window-flower) {
  width: 180px;
  opacity: 0.3;
}

.status {
  font-family: var(--font-title);
  color: var(--color-rouge);
  font-size: 15px;
}

.status.done {
  color: var(--color-gold);
}

@keyframes scan {
  0% { top: 0; }
  50% { top: calc(100% - 3px); }
  100% { top: 0; }
}
</style>
