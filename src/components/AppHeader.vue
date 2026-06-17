<template>
  <header class="app-header">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">剪</span>
      <span class="ai-badge">AI</span>
      <span>
        <strong>福建剪纸文化</strong>
        <small>AI × Paper Cutting Heritage</small>
      </span>
    </RouterLink>
    <button class="menu-btn" type="button" @click="open = !open">菜单</button>
    <nav :class="{ open }">
      <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" :class="{ highlight: item.highlight }" @click="open = false">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const navItems = [
  { path: '/', label: '首页' },
  { path: '/history', label: '文化溯源' },
  { path: '/schools', label: '四大流派' },
  { path: '/ai-experience', label: 'AI 体验', highlight: true },
  { path: '/digital-twin', label: '数字孪生' },
  { path: '/gallery', label: '作品赏析' },
  { path: '/masters', label: '传承人物' },
  { path: '/news', label: '资讯动态' },
  { path: '/contact', label: '联系我们' },
]
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 86px;
  padding: 0 clamp(18px, 4vw, 56px);
  border-bottom: 1px solid rgba(168, 32, 26, 0.18);
  background: rgba(250, 246, 240, 0.92);
  backdrop-filter: blur(18px);
}

.app-header::after {
  position: absolute;
  right: 0;
  bottom: -8px;
  left: 0;
  height: 8px;
  content: '';
  background: repeating-linear-gradient(90deg, var(--color-cinnabar) 0 14px, transparent 14px 24px);
  opacity: 0.28;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  width: 48px;
  height: 48px;
  color: #fff;
  border-radius: 50%;
  background: var(--color-cinnabar);
  place-items: center;
  font-family: var(--font-title);
  font-size: 26px;
}

strong,
small {
  display: block;
}

strong {
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 22px;
  letter-spacing: 0.12em;
}

small {
  color: var(--color-muted);
  font-size: 12px;
  letter-spacing: 0.12em;
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

nav a {
  position: relative;
  color: var(--color-brown);
  font-weight: 700;
}

nav a.router-link-active,
nav a:hover {
  color: var(--color-cinnabar);
}

nav a.router-link-active::after {
  position: absolute;
  right: 12%;
  bottom: -10px;
  left: 12%;
  height: 3px;
  content: '';
  background: var(--color-cinnabar);
}

.menu-btn {
  display: none;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background: var(--color-cinnabar);
  padding: 8px 16px;
}

.ai-badge {
  display: grid;
  width: 28px;
  height: 28px;
  color: var(--color-gold);
  border: 2px solid var(--color-gold);
  border-radius: 6px;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  font-family: var(--font-title);
  margin-left: -6px;
  margin-top: -24px;
  background: var(--color-paper);
}

nav a.highlight {
  color: var(--color-gold);
  background: rgba(212, 175, 55, 0.1);
  padding: 6px 14px;
  border-radius: 999px;
}

nav a.highlight.router-link-active,
nav a.highlight:hover {
  color: var(--color-gold);
  background: rgba(212, 175, 55, 0.18);
}

@media (max-width: 980px) {
  .app-header {
    height: 74px;
  }

  .menu-btn {
    display: inline-flex;
  }

  nav {
    position: absolute;
    top: 74px;
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 18px;
    border: 1px solid rgba(168, 32, 26, 0.18);
    border-radius: 20px;
    background: var(--color-paper);
    box-shadow: var(--shadow-soft);
  }

  nav.open {
    display: flex;
  }
}
</style>
