<template>
  <section v-if="school" class="section detail-hero">
    <div class="container detail-grid">
      <div>
        <span class="tag">{{ school.badge }}</span>
        <h1 class="display-title">{{ school.name }}</h1>
        <p class="lead">{{ school.summary }}</p>
        <div class="feature-row">
          <span v-for="feature in school.features" :key="feature">{{ feature }}</span>
        </div>
      </div>
      <div class="detail-symbol card">
        <CornerOrnament position="top-left" />
        <CornerOrnament position="bottom-right" />
        <strong :style="{ color: school.color }">{{ school.icon }}</strong>
        <p>{{ school.location }}</p>
      </div>
    </div>
  </section>

  <section v-if="school" class="section alt">
    <div class="container grid two">
      <article class="card card-pad">
        <h2>历史脉络</h2>
        <p>{{ school.history }}</p>
      </article>
      <article class="card card-pad">
        <h2>艺术特征</h2>
        <ul>
          <li v-for="feature in school.features" :key="feature">{{ feature }}</li>
        </ul>
      </article>
    </div>
  </section>

  <section v-else class="section">
    <div class="container empty-state card">
      <h1>未找到该流派</h1>
      <RouterLink class="btn primary" to="/schools">返回四大流派</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CornerOrnament from '../components/CornerOrnament.vue'
import { findSchool } from '../data/schools'

const route = useRoute()
const school = computed(() => findSchool(route.params.id))
</script>

<style scoped>
.detail-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 44px;
}

.feature-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.feature-row span {
  padding: 10px 18px;
  color: var(--color-rouge);
  border: 1px solid rgba(168, 32, 26, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
}

.detail-symbol {
  position: relative;
  display: grid;
  min-height: 400px;
  place-items: center;
  text-align: center;
}

.detail-symbol strong {
  font-family: var(--font-title);
  font-size: clamp(110px, 18vw, 190px);
  line-height: 1;
}

.detail-symbol p {
  color: var(--color-brown);
  font-size: 20px;
}

h2 {
  margin-top: 0;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 34px;
}

p,
li {
  color: var(--color-brown);
  line-height: 1.9;
}

li {
  margin: 10px 0;
}

@media (max-width: 900px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
