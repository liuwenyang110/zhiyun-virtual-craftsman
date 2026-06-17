<template>
  <span class="type-writer">
    <span v-html="displayed"></span><span v-if="!done" class="blink">▎</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  speed: { type: Number, default: 50 },
})

const displayed = ref('')
const done = ref(false)
let timer = null

onMounted(() => {
  let i = 0
  timer = setInterval(() => {
    if (i >= props.text.length) {
      clearInterval(timer)
      done.value = true
      return
    }
    displayed.value += props.text[i]
    i++
  }, props.speed)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.blink {
  color: var(--color-cinnabar);
  animation: blink 0.6s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
