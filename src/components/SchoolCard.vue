<template>
  <RouterLink class="school-card card cutout-card" :to="`/schools/${school.id}`">
    <div class="symbol" :style="{ background: school.color }">{{ school.icon }}</div>
    <span class="tag">{{ school.badge }}</span>
    <h3>{{ school.name }}</h3>
    <p class="location">{{ school.location }}</p>
    <p class="summary">{{ school.summary }}</p>
    <div class="features">
      <span v-for="feature in school.features" :key="feature">{{ feature }}</span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  school: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.school-card {
  display: block;
  min-height: 360px;
  padding: 30px;
  transition: transform 0.24s ease, box-shadow 0.24s ease;
}

.school-card:hover {
  box-shadow: var(--shadow-red);
  transform: translateY(-8px);
}

.symbol {
  display: grid;
  width: 74px;
  height: 74px;
  margin-bottom: 20px;
  color: #fff;
  border: 4px double rgba(255, 255, 255, 0.72);
  border-radius: 18px;
  place-items: center;
  font-family: var(--font-title);
  font-size: 34px;
  box-shadow: 0 12px 24px rgba(168, 32, 26, 0.2);
}

h3 {
  margin: 18px 0 8px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 32px;
  letter-spacing: 0.08em;
}

.location {
  margin: 0 0 14px;
  color: var(--color-muted);
}

.summary {
  color: var(--color-brown);
  line-height: 1.85;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 18px;
}

.features span {
  padding: 6px 10px;
  color: var(--color-rouge);
  border-radius: 999px;
  background: rgba(200, 16, 46, 0.08);
  font-size: 13px;
}
</style>
