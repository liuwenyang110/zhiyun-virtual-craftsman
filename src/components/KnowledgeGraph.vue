<template>
  <svg class="knowledge-graph" viewBox="0 0 800 560" xmlns="http://www.w3.org/2000/svg">
    <!-- 连线 -->
    <g class="edges">
      <line v-for="edge in edges" :key="edge.from + '-' + edge.to"
        :x1="nodePos[edge.from].x" :y1="nodePos[edge.from].y"
        :x2="nodePos[edge.to].x" :y2="nodePos[edge.to].y"
        stroke="var(--color-cinnabar)" stroke-width="1.5" opacity="0.3" />
    </g>

    <!-- 节点 -->
    <g v-for="(node, key) in nodes" :key="key"
      class="node-group"
      :transform="`translate(${nodePos[key].x}, ${nodePos[key].y})`"
      @mouseenter="hovered = key"
      @mouseleave="hovered = ''">

      <circle :r="node.r" :fill="node.fill" :stroke="node.stroke" stroke-width="2" />

      <text text-anchor="middle" :dy="node.r > 30 ? 6 : 16" :fill="node.textFill" :font-size="node.fontSize"
        font-family="KaiTi, STKaiti, serif" font-weight="600">
        {{ node.label }}
      </text>

      <!-- hover 提示 -->
      <g v-if="hovered === key && node.tip" class="tip-group">
        <rect :x="node.r + 10" y="-16" width="180" height="36" rx="8"
          fill="var(--color-paper)" stroke="var(--color-cinnabar)" stroke-width="1" />
        <text :x="node.r + 20" dy="5" fill="var(--color-ink)" font-size="12"
          font-family="'Source Han Serif SC', SimSun, serif">{{ node.tip }}</text>
      </g>
    </g>
  </svg>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref('')

const nodes = {
  center: { label: '福建剪纸', r: 46, fill: '#c8102e', stroke: '#a8201a', textFill: '#fff', fontSize: 18, tip: '国家级非遗 · 人类非遗代表作' },
  zhangpu: { label: '漳浦剪纸', r: 34, fill: '#c8102e', stroke: '#a8201a', textFill: '#fff', fontSize: 13, tip: '阳剪为主 · 丰满匀称 · 千年传承' },
  zherong: { label: '柘荣剪纸', r: 34, fill: '#a8201a', stroke: '#991b1b', textFill: '#fff', fontSize: 13, tip: '质朴灵秀 · 以剪为主 · UNESCO非遗' },
  quanzhou: { label: '泉州刻纸', r: 34, fill: '#b91c1c', stroke: '#991b1b', textFill: '#fff', fontSize: 13, tip: '以刻见长 · 海丝风韵 · 李尧宝' },
  pucheng: { label: '浦城剪纸', r: 34, fill: '#991b1b', stroke: '#7f1d1d', textFill: '#fff', fontSize: 13, tip: '闽越底蕴 · 山地民俗 · 古朴率真' },
  yangjian: { label: '阳剪', r: 24, fill: 'rgba(200,16,46,0.15)', stroke: '#c8102e', textFill: '#a8201a', fontSize: 12, tip: '保留线条，剪去空白' },
  yinjian: { label: '阴剪', r: 24, fill: 'rgba(200,16,46,0.15)', stroke: '#c8102e', textFill: '#a8201a', fontSize: 12, tip: '剪去线条，保留色块' },
  kezhi: { label: '刻纸', r: 24, fill: 'rgba(200,16,46,0.15)', stroke: '#c8102e', textFill: '#a8201a', fontSize: 12, tip: '以刀代剪，精细繁复' },
  huaniao: { label: '花鸟', r: 24, fill: 'rgba(212,175,55,0.15)', stroke: '#d4af37', textFill: '#d4af37', fontSize: 12, tip: '凤凰、牡丹、喜鹊等吉祥图案' },
  minsu: { label: '民俗', r: 24, fill: 'rgba(212,175,55,0.15)', stroke: '#d4af37', textFill: '#d4af37', fontSize: 12, tip: '婚嫁、节庆、祭祀礼俗' },
  shengxiao: { label: '生肖', r: 24, fill: 'rgba(212,175,55,0.15)', stroke: '#d4af37', textFill: '#d4af37', fontSize: 12, tip: '十二生肖窗花与年画' },
  unesco: { label: 'UNESCO', r: 28, fill: 'var(--color-gold)', stroke: '#c9a961', textFill: '#fff', fontSize: 11, tip: '联合国教科文组织人类非遗代表作' },
}

const nodePos = {
  center: { x: 400, y: 280 },
  zhangpu: { x: 220, y: 140 },
  zherong: { x: 580, y: 140 },
  quanzhou: { x: 220, y: 420 },
  pucheng: { x: 580, y: 420 },
  yangjian: { x: 100, y: 280 },
  yinjian: { x: 340, y: 100 },
  kezhi: { x: 100, y: 420 },
  huaniao: { x: 680, y: 260 },
  minsu: { x: 680, y: 380 },
  shengxiao: { x: 400, y: 470 },
  unesco: { x: 460, y: 60 },
}

const edges = [
  { from: 'center', to: 'zhangpu' },
  { from: 'center', to: 'zherong' },
  { from: 'center', to: 'quanzhou' },
  { from: 'center', to: 'pucheng' },
  { from: 'zhangpu', to: 'yangjian' },
  { from: 'zherong', to: 'yinjian' },
  { from: 'quanzhou', to: 'kezhi' },
  { from: 'center', to: 'huaniao' },
  { from: 'center', to: 'minsu' },
  { from: 'center', to: 'shengxiao' },
  { from: 'center', to: 'unesco' },
  { from: 'yangjian', to: 'yinjian' },
]
</script>

<style scoped>
.knowledge-graph {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.node-group {
  cursor: pointer;
}

.node-group circle {
  transition: r 0.2s ease, opacity 0.2s ease;
}

.node-group:hover circle {
  opacity: 0.85;
}

.tip-group {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
