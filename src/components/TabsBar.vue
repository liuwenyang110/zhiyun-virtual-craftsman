<template>
  <div class="tabs-bar">
    <button v-for="tab in tabs" :key="tab.key" :class="['tab', { active: modelValue === tab.key }]" @click="$emit('update:modelValue', tab.key)">
      <span class="tab-icon">{{ tab.icon }}</span>
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.tabs-bar {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(200, 16, 46, 0.06);
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--color-brown);
  font-family: var(--font-title);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab.active {
  color: #fff;
  background: linear-gradient(135deg, var(--color-cinnabar), var(--color-rouge));
  box-shadow: 0 4px 16px rgba(200, 16, 46, 0.25);
}

.tab:not(.active):hover {
  background: rgba(200, 16, 46, 0.08);
}

.tab-icon {
  font-size: 18px;
}
</style>
