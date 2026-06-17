<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="传承人物" seal="人" desc="非遗的生命，在于人。师徒口传心授、社区共同守护，让纸上花样不断生长。" />
      <div class="grid two">
        <article v-for="master in masters" :key="master.name" class="card master-card">
          <div class="avatar">{{ master.name.slice(0, 1) }}</div>
          <div>
            <span class="tag">{{ master.school }}</span>
            <h3>{{ master.name }}</h3>
            <strong>{{ master.title }}</strong>
            <p>{{ master.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { masters } from '../data/masters'
</script>

<style scoped>
.master-card {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 24px;
  padding: 30px;
}

.avatar {
  display: grid;
  width: 92px;
  height: 92px;
  color: #fff;
  border: 5px double rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  background: var(--color-cinnabar);
  place-items: center;
  font-family: var(--font-title);
  font-size: 42px;
}

h3 {
  margin: 14px 0 8px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 32px;
}

strong {
  color: var(--color-gold);
}

p {
  color: var(--color-brown);
  line-height: 1.85;
}

@media (max-width: 560px) {
  .master-card {
    grid-template-columns: 1fr;
  }
}
</style>
