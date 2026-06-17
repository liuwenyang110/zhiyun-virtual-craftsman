<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="文化溯源" seal="源" desc="福建剪纸从刺绣底样、窗花礼俗中生长，随迁徙与民间仪式绵延千年。" />
      <div class="timeline">
        <article v-for="item in timeline" :key="item.era" class="timeline-item card">
          <div class="era">{{ item.era }}</div>
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <SectionTitle title="山海情韵" seal="闽" desc="福建剪纸的独特性，来自山海地理、移民历史与民俗生活的共同塑造。" />
      <div class="grid four">
        <article v-for="item in features" :key="item.title" class="card card-pad feature-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { timeline } from '../data/timeline'

const features = [
  { title: '南北兼容', text: '吸纳北方窗花的质朴厚重，也保有南方线条的秀美灵动。' },
  { title: '山海交融', text: '闽北山地、闽南海洋与闽东乡土共同形成丰富题材。' },
  { title: '民俗根基', text: '婚嫁、祭祀、节庆、祈福等生活仪式，皆可见红纸花样。' },
  { title: '工具简朴', text: '一把剪刀、一张红纸，便可剪出人间万象与吉祥寓意。' },
]
</script>

<style scoped>
.timeline {
  position: relative;
  display: grid;
  gap: 24px;
}

.timeline::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 112px;
  width: 2px;
  content: '';
  background: linear-gradient(var(--color-cinnabar), transparent);
}

.timeline-item {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 28px;
  padding: 26px;
}

.era {
  display: grid;
  width: 96px;
  height: 96px;
  color: #fff;
  border-radius: 50%;
  background: var(--color-cinnabar);
  place-items: center;
  font-family: var(--font-title);
  font-size: 24px;
  z-index: 2;
}

h3 {
  margin: 0 0 10px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 28px;
}

p {
  color: var(--color-brown);
  line-height: 1.85;
}

@media (max-width: 700px) {
  .timeline::before {
    display: none;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }
}
</style>
