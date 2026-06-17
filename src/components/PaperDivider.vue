<template>
  <div class="paper-divider" aria-hidden="true">
    <span v-for="n in 9" :key="n"></span>
  </div>
</template>

<style scoped>
.paper-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 26px auto;
}

.paper-divider::before,
.paper-divider::after {
  width: min(18vw, 150px);
  height: 1px;
  content: '';
  background: linear-gradient(90deg, transparent, rgba(168, 32, 26, 0.45));
}

.paper-divider::after {
  transform: scaleX(-1);
}

span {
  width: 12px;
  height: 12px;
  background: var(--color-cinnabar);
  transform: rotate(45deg);
}

span:nth-child(even) {
  width: 8px;
  height: 8px;
  background: var(--color-gold);
}
</style>
