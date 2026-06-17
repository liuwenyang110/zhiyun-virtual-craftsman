<template>
  <div :class="['chat-bubble', role]">
    <div v-if="role === 'ai'" class="avatar">剪</div>
    <div class="bubble">
      <div v-if="role === 'ai' && !done" class="text" v-html="rendered"></div>
      <div v-else class="text" v-html="rendered"></div>
      <span v-if="role === 'ai' && !done" class="cursor">▎</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  role: { type: String, default: 'ai' },
  text: { type: String, default: '' },
  speed: { type: Number, default: 28 },
})

const done = ref(false)
const rendered = ref('')

const formatted = computed(() => {
  return props.text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
})

let timer = null

onMounted(() => {
  if (props.role === 'ai' && props.text) {
    const chars = formatted.value.replace(/<[^>]+>/g, '')
    let html = ''
    let ci = 0
    const raw = props.text

    timer = setInterval(() => {
      if (ci >= raw.length) {
        clearInterval(timer)
        rendered.value = formatted.value
        done.value = true
        return
      }
      const plain = raw.substring(0, ci + 1)
      html = plain
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
      rendered.value = html
      ci++
    }, props.speed)
  } else {
    rendered.value = formatted.value
    done.value = true
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.chat-bubble {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.chat-bubble.user {
  flex-direction: row-reverse;
}

.avatar {
  display: grid;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  color: #fff;
  border-radius: 50%;
  background: var(--color-cinnabar);
  place-items: center;
  font-family: var(--font-title);
  font-size: 18px;
}

.bubble {
  max-width: 72%;
  padding: 16px 20px;
  border-radius: 18px;
  line-height: 1.85;
  font-size: 15px;
}

.chat-bubble.ai .bubble {
  color: var(--color-ink);
  border: 1px solid rgba(168, 32, 26, 0.12);
  background: rgba(255, 252, 246, 0.92);
  border-top-left-radius: 4px;
}

.chat-bubble.user .bubble {
  color: #fff;
  background: linear-gradient(135deg, var(--color-cinnabar), var(--color-rouge));
  border-top-right-radius: 4px;
}

.text :deep(strong) {
  color: var(--color-cinnabar);
}

.cursor {
  color: var(--color-cinnabar);
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
