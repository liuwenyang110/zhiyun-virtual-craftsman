<template>
  <RouterLink class="ai-feature-card card" :to="link">
    <span class="icon">{{ icon }}</span>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <span class="arrow">→</span>
  </RouterLink>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  link: { type: String, default: '#' },
})
</script>

<style scoped>
.ai-feature-card {
  display: block;
  padding: 28px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.ai-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-red);
}

.icon {
  display: grid;
  width: 54px;
  height: 54px;
  margin-bottom: 16px;
  border: 2px solid var(--color-ai-border);
  border-radius: 16px;
  background: var(--color-ai-bg);
  place-items: center;
  font-size: 26px;
}

h3 {
  margin: 0 0 10px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 24px;
}

p {
  color: var(--color-brown);
  line-height: 1.8;
  font-size: 15px;
}

.arrow {
  display: inline-block;
  margin-top: 16px;
  color: var(--color-ai);
  font-weight: 700;
  font-size: 20px;
  transition: transform 0.25s ease;
}

.ai-feature-card:hover .arrow {
  transform: translateX(6px);
}
</style>
