<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="资讯动态" seal="闻" desc="记录福建剪纸在当代的展览、研学、传播与文创实践。" />
      <div class="news-list">
        <article v-for="item in news" :key="item.title" class="card news-item">
          <time>{{ item.date }}</time>
          <div>
            <span class="tag">{{ item.category }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { news } from '../data/news'
</script>

<style scoped>
.news-list {
  display: grid;
  gap: 22px;
}

.news-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 26px;
  padding: 28px;
}

time {
  color: var(--color-cinnabar);
  font-family: var(--font-title);
  font-size: 24px;
}

h3 {
  margin: 14px 0 8px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 30px;
}

p {
  color: var(--color-brown);
  line-height: 1.8;
}

@media (max-width: 650px) {
  .news-item {
    grid-template-columns: 1fr;
  }
}
</style>
