<template>
  <span class="seal-stamp">{{ text }}</span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.seal-stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  min-height: 54px;
  padding: 8px;
  color: var(--color-cinnabar);
  border: 3px solid currentColor;
  font-family: var(--font-title);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  letter-spacing: 0.12em;
  background: rgba(255, 255, 255, 0.44);
  box-shadow: inset 0 0 0 2px rgba(200, 16, 46, 0.16);
  transform: rotate(-6deg);
}
</style>
