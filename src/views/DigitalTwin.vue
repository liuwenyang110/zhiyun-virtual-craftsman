<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="数字孪生" seal="孪" desc="用数字化手段构建福建剪纸的知识体系与文化图谱，让非遗在数字世界中永生。" />
    </div>
  </section>

  <!-- 知识图谱 -->
  <section class="section alt">
    <div class="container">
      <SectionTitle title="知识图谱" seal="图" desc="可视化展示福建剪纸的知识关系网络，探索流派、技法与题材之间的脉络。" />
      <KnowledgeGraph />
    </div>
  </section>

  <!-- 数字化档案 -->
  <section class="section">
    <div class="container">
      <SectionTitle title="数字化档案" seal="档" desc="四大流派的系统化数据记录，形成可检索、可分析的数字资产。" />
      <div class="grid two">
        <article v-for="school in schools" :key="school.id" class="card archive-card">
          <div class="archive-header" :style="{ borderLeftColor: school.color }">
            <h2>{{ school.name }}</h2>
            <span class="tag">{{ school.badge }}</span>
          </div>
          <div class="archive-body">
            <div class="stat-row">
              <span>历史跨度</span>
              <div class="bar-wrap">
                <div class="bar" :style="{ width: school.id === 'zhangpu' ? '98%' : school.id === 'zherong' ? '95%' : school.id === 'quanzhou' ? '85%' : '80%' }"></div>
              </div>
              <strong>千年传承</strong>
            </div>
            <div class="stat-row">
              <span>技法成熟度</span>
              <div class="bar-wrap">
                <div class="bar" :style="{ width: '88%' }"></div>
              </div>
              <strong>国家级</strong>
            </div>
            <div class="stat-row">
              <span>数字档案条目</span>
              <div class="bar-wrap">
                <div class="bar gold" :style="{ width: [72, 65, 58, 55][schools.indexOf(school)] + '%' }"></div>
              </div>
              <strong>{{ [72, 65, 58, 55][schools.indexOf(school)] }} 条</strong>
            </div>
            <div class="tags-row">
              <span v-for="f in school.features" :key="f" class="mini-tag">{{ f }}</span>
            </div>
            <p class="desc">{{ school.history }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 技术架构 -->
  <section class="section alt">
    <div class="container">
      <SectionTitle title="技术架构" seal="构" desc="AI 赋能非遗的技术底座：从数据采集到知识服务。" />
      <div class="arch-diagram">
        <div class="arch-layer base">
          <span>知识图谱</span>
          <span>数字化档案</span>
          <span>非遗数据采集</span>
        </div>
        <div class="arch-arrow">⬇</div>
        <div class="arch-layer model">
          <span>大语言模型</span>
          <span>图像识别</span>
          <span>生成式 AI</span>
        </div>
        <div class="arch-arrow">⬇</div>
        <div class="arch-layer app">
          <span>智能问答</span>
          <span>图案生成</span>
          <span>作品识别</span>
          <span>文创推荐</span>
        </div>
      </div>
      <p class="arch-note">本平台为前端演示版本，AI 功能采用 Mock 模拟。真实部署时可接入大语言模型 API 与知识图谱后端服务。</p>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import KnowledgeGraph from '../components/KnowledgeGraph.vue'
import { schools } from '../data/schools'
</script>

<style scoped>
/* Archive */
.archive-card {
  padding: 0;
}

.archive-header {
  padding: 24px 28px;
  border-left: 5px solid var(--color-cinnabar);
  background: rgba(200, 16, 46, 0.04);
}

.archive-header h2 {
  margin: 0 0 8px;
  font-family: var(--font-title);
  font-size: 28px;
  color: var(--color-rouge);
}

.archive-body {
  padding: 20px 28px;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 14px 0;
}

.stat-row span {
  min-width: 90px;
  color: var(--color-muted);
  font-size: 14px;
}

.bar-wrap {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: rgba(200, 16, 46, 0.08);
}

.bar {
  height: 100%;
  border-radius: 3px;
  background: var(--color-cinnabar);
}

.bar.gold {
  background: var(--color-gold);
}

.stat-row strong {
  color: var(--color-rouge);
  font-size: 14px;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.mini-tag {
  padding: 4px 10px;
  border: 1px solid rgba(168, 32, 26, 0.15);
  border-radius: 999px;
  font-size: 13px;
  color: var(--color-rouge);
  background: rgba(200, 16, 46, 0.05);
}

.desc {
  margin-top: 16px;
  color: var(--color-brown);
  font-size: 14px;
  line-height: 1.8;
}

/* Architecture */
.arch-diagram {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.arch-layer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  padding: 22px;
  border-radius: 18px;
}

.arch-layer.base {
  background: rgba(200, 16, 46, 0.08);
}

.arch-layer.model {
  background: rgba(212, 175, 55, 0.1);
}

.arch-layer.app {
  background: rgba(200, 16, 46, 0.14);
}

.arch-layer span {
  padding: 10px 18px;
  border: 1px solid var(--color-rouge);
  border-radius: 999px;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 15px;
  background: rgba(255, 255, 255, 0.7);
}

.arch-arrow {
  color: var(--color-cinnabar);
  font-size: 22px;
  padding: 6px 0;
}

.arch-note {
  margin-top: 32px;
  padding: 16px;
  border-left: 4px solid var(--color-cinnabar);
  background: rgba(200, 16, 46, 0.06);
  color: var(--color-muted);
  text-align: center;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 600px) {
  .stat-row {
    flex-wrap: wrap;
  }
}
</style>
