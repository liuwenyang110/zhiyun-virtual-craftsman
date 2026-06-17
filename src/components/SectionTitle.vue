<template>
  <div class="section-title">
    <p class="kicker">{{ kicker }}</p>
    <div class="title-row">
      <h2>{{ title }}</h2>
      <SealStamp v-if="seal" :text="seal" />
    </div>
    <PaperDivider />
    <p v-if="desc" class="desc">{{ desc }}</p>
  </div>
</template>

<script setup>
import PaperDivider from './PaperDivider.vue'
import SealStamp from './SealStamp.vue'

defineProps({
  kicker: { type: String, default: 'Fujian Paper Cutting' },
  title: { type: String, required: true },
  seal: { type: String, default: '' },
  desc: { type: String, default: '' },
})
</script>

<style scoped>
.section-title {
  max-width: 760px;
  margin: 0 auto 46px;
  text-align: center;
}

.title-row {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

h2 {
  margin: 10px 0 0;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: clamp(34px, 5vw, 58px);
  letter-spacing: 0.12em;
}

.desc {
  margin: 0;
  color: var(--color-brown);
  font-size: 18px;
  line-height: 1.9;
}

@media (max-width: 560px) {
  .title-row {
    flex-direction: column;
  }
}
</style>
