<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="作品赏析" seal="赏" desc="以传统题材为灵感，用 CSS 与文字构成纸上展厅。" />
      <div class="filters">
        <button v-for="cat in categories" :key="cat" :class="['btn', active === cat ? 'primary' : 'ghost']" @click="active = cat">
          {{ cat }}
        </button>
      </div>
      <div class="gallery-grid">
        <article v-for="item in filtered" :key="item.title" class="card gallery-card">
          <div class="paper-art">
            <WindowFlower />
          </div>
          <div class="card-pad">
            <span class="tag">{{ item.category }} · {{ item.school }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import WindowFlower from '../components/WindowFlower.vue'
import { galleryItems } from '../data/gallery'

const categories = ['全部', '花鸟', '民俗', '生肖', '人物']
const active = ref('全部')
const filtered = computed(() => active.value === '全部' ? galleryItems : galleryItems.filter((item) => item.category === active.value))
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 34px;
}

.gallery-grid {
  columns: 3 280px;
  column-gap: 28px;
}

.gallery-card {
  display: inline-block;
  width: 100%;
  margin: 0 0 28px;
}

.paper-art {
  display: grid;
  min-height: 240px;
  place-items: center;
  background: linear-gradient(135deg, #fff, var(--color-paper-deep));
}

.paper-art :deep(.window-flower) {
  width: 170px;
}

h3 {
  margin: 18px 0 10px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 30px;
}

p {
  color: var(--color-brown);
  line-height: 1.8;
}
</style>
