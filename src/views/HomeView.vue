<template>
  <section class="hero paper-edge">
    <WindowFlower class="hero-flower flower-a" />
    <WindowFlower class="hero-flower flower-b" />
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="kicker">国家级非物质文化遗产</p>
        <h1 class="display-title">一纸山海<br />剪出闽韵千年</h1>
        <p class="lead">福建剪纸兼具北方质朴与南方灵秀，于漳浦、柘荣、泉州、浦城等地绽放万千花样，是民俗生活、山海记忆与非遗传承的纸上诗篇。</p>
        <div class="hero-actions">
          <RouterLink class="btn primary" to="/schools">探访四大流派</RouterLink>
          <RouterLink class="btn ghost" to="/history">了解文化溯源</RouterLink>
        </div>
      </div>
      <div class="hero-art card">
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />
        <WindowFlower class="main-flower" />
        <p>一把剪刀 · 一张红纸 · 万象人间</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle title="四大流派" seal="非遗" desc="从闽南海丝古城到闽北山地村落，福建剪纸因地而异、各美其美。" />
      <div class="grid four">
        <SchoolCard v-for="school in schools" :key="school.id" :school="school" />
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container grid three honor-grid">
      <div class="honor card card-pad">
        <strong>1000+</strong>
        <span>年传承脉络</span>
      </div>
      <div class="honor card card-pad">
        <strong>4</strong>
        <span>大代表流派</span>
      </div>
      <div class="honor card card-pad">
        <strong>UNESCO</strong>
        <span>中国剪纸人类非遗代表作</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle title="最新动态" seal="新" desc="关注福建剪纸的展览、教育与文创实践。" />
      <div class="grid three">
        <article v-for="item in news" :key="item.title" class="card card-pad news-card">
          <span class="tag">{{ item.category }}</span>
          <time>{{ item.date }}</time>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import WindowFlower from '../components/WindowFlower.vue'
import CornerOrnament from '../components/CornerOrnament.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SchoolCard from '../components/SchoolCard.vue'
import { schools } from '../data/schools'
import { news } from '../data/news'
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 86px);
  padding: 96px 0 80px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 54px;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}

.hero-art {
  position: relative;
  display: grid;
  min-height: 520px;
  padding: 58px;
  place-items: center;
  background: rgba(255, 252, 246, 0.76);
}

.main-flower {
  width: min(72vw, 360px);
}

.hero-art p {
  margin: 20px 0 0;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 24px;
  letter-spacing: 0.16em;
}

.hero-flower {
  position: absolute;
  color: rgba(200, 16, 46, 0.12);
}

.flower-a {
  top: 80px;
  right: -80px;
  width: 280px;
}

.flower-b {
  bottom: 20px;
  left: -96px;
  width: 230px;
}

.honor {
  text-align: center;
}

.honor strong {
  display: block;
  color: var(--color-cinnabar);
  font-family: var(--font-title);
  font-size: 48px;
}

.honor span {
  color: var(--color-brown);
  font-size: 18px;
}

.news-card time {
  display: block;
  margin: 18px 0 10px;
  color: var(--color-muted);
}

.news-card h3 {
  margin: 0;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 28px;
}

.news-card p {
  color: var(--color-brown);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-art {
    min-height: 360px;
  }
}
</style>
