<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="AI 智能体验" seal="AI" desc="以人工智能为桥梁，让千年剪纸文化触手可及。" />

      <TabsBar v-model="activeTab" :tabs="tabs" />

      <!-- Tab 1: 智能对话 -->
      <div v-if="activeTab === 'chat'" class="chat-section">
        <div class="chat-area card">
          <div class="chat-messages" ref="chatRef">
            <ChatBubble v-for="(msg, i) in messages" :key="i" :role="msg.role" :text="msg.text" :speed="msg.speed || 28" />
            <div v-if="waiting" class="waiting-dot">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="quick-questions">
            <button v-for="q in quickQuestions" :key="q" class="btn ghost quick-btn" @click="ask(q)">
              {{ q }}
            </button>
          </div>
          <div class="chat-input-row">
            <input v-model="input" class="chat-input" placeholder="输入您的问题，了解福建剪纸文化…" @keydown.enter="send" />
            <button class="btn primary" @click="send" :disabled="waiting">发送</button>
          </div>
        </div>
      </div>

      <!-- Tab 2: AI 图案生成 -->
      <div v-if="activeTab === 'generate'" class="generate-section">
        <div class="card generate-card">
          <div class="input-row">
            <input v-model="prompt" class="chat-input" placeholder="描述你想要的剪纸图案，如「一只展翅的凤凰」…" @keydown.enter="doGenerate" />
            <button class="btn primary" @click="doGenerate" :disabled="generating">生成剪纸</button>
          </div>

          <div class="result-area">
            <div v-if="generating" class="card-pad">
              <GeneratingSpinner :active="true" />
            </div>
            <div v-else-if="generated" class="card-pad result-card">
              <div class="result-grid">
                <div class="result-art">
                  <WindowFlower />
                </div>
                <div>
                  <span class="tag">AI 生成 · 剪纸风格</span>
                  <h3>{{ genTitle }}</h3>
                  <p>{{ genDesc }}</p>
                  <div class="result-actions">
                    <button class="btn ghost">💾 下载</button>
                    <button class="btn ghost">🎁 文创定制</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="card-pad empty-state">
              <p>输入图案描述，AI 将为您生成剪纸风格的作品</p>
            </div>
          </div>
        </div>

        <div class="suggestions">
          <span class="suggest-label">试试这些描述：</span>
          <button v-for="item in suggestions" :key="item" class="btn ghost suggest-btn" @click="prompt = item; doGenerate()">
            {{ item }}
          </button>
        </div>
      </div>

      <!-- Tab 3: 作品识别 -->
      <div v-if="activeTab === 'recognize'" class="recognize-section">
        <div class="grid two">
          <div class="card card-pad">
            <h3>选择示例作品</h3>
            <div class="sample-list">
              <button v-for="art in sampleArtworks" :key="art.id"
                :class="['sample-btn', { active: selectedArt === art.id }]"
                @click="doRecognize(art)">
                {{ art.title }}
              </button>
            </div>
            <ScanAnimation :active="recognizing" />
          </div>
          <div v-if="recognizedResult" class="card card-pad result-card">
            <h3>🔍 识别结果</h3>
            <div class="recognize-result">
              <div class="result-item"><strong>流派归属：</strong>{{ recognizedResult.school }}</div>
              <div class="result-item"><strong>题材类别：</strong>{{ recognizedResult.category }}</div>
              <div class="result-item"><strong>风格特征：</strong>{{ recognizedResult.style }}</div>
              <div class="result-item"><strong>文化寓意：</strong>{{ recognizedResult.meaning }}</div>
              <div class="score-bar">
                <span>可信度</span>
                <div class="bar-track">
                  <div class="bar-fill" style="width:92%"></div>
                </div>
                <span>92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import TabsBar from '../components/TabsBar.vue'
import ChatBubble from '../components/ChatBubble.vue'
import GeneratingSpinner from '../components/GeneratingSpinner.vue'
import ScanAnimation from '../components/ScanAnimation.vue'
import WindowFlower from '../components/WindowFlower.vue'
import { quickQuestions, chatReplies, defaultReply, matchPattern, sampleArtworks } from '../data/ai-chat'

const activeTab = ref('chat')
const tabs = [
  { key: 'chat', label: '智能对话', icon: '💬' },
  { key: 'generate', label: '图案生成', icon: '🎨' },
  { key: 'recognize', label: '作品识别', icon: '🔍' },
]

/* ---------- Tab 1: Chat ---------- */
const messages = ref([])
const input = ref('')
const waiting = ref(false)
const chatRef = ref(null)

function scrollChat() {
  nextTick(() => {
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight
    }
  })
}

function addMessage(role, text, speed = 28) {
  messages.value.push({ role, text, speed })
  scrollChat()
}

async function send() {
  const q = input.value.trim()
  if (!q || waiting.value) return
  addMessage('user', q, 0)
  input.value = ''
  waiting.value = true
  await new Promise((r) => setTimeout(r, 800))
  const reply = chatReplies[q] || defaultReply
  addMessage('ai', reply)
  waiting.value = false
  scrollChat()
}

function ask(q) {
  addMessage('user', q, 0)
  waiting.value = true
  setTimeout(() => {
    const reply = chatReplies[q] || defaultReply
    addMessage('ai', reply)
    waiting.value = false
  }, 700)
}

/* ---------- Tab 2: Generate ---------- */
const prompt = ref('')
const generating = ref(false)
const generated = ref(false)
const genTitle = ref('')
const genDesc = ref('')
const suggestions = ['一只展翅的凤凰', '双鱼纳福', '瑞兔迎春', '梅花绽放']

async function doGenerate() {
  const p = prompt.value.trim()
  if (!p || generating.value) return
  generating.value = true
  generated.value = false
  await new Promise((r) => setTimeout(r, 2200))
  const matched = matchPattern(p)
  genTitle.value = matched.title
  genDesc.value = matched.desc
  generating.value = false
  generated.value = true
}

/* ---------- Tab 3: Recognize ---------- */
const recognizing = ref(false)
const recognizedResult = ref(null)
const selectedArt = ref(null)

async function doRecognize(art) {
  selectedArt.value = art.id
  recognizing.value = true
  recognizedResult.value = null
  await new Promise((r) => setTimeout(r, 1800))
  recognizedResult.value = art
  recognizing.value = false
}
</script>

<style scoped>
/* ---------- Chat ---------- */
.chat-area {
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  max-height: 420px;
  overflow-y: auto;
  padding: 24px;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--color-cinnabar);
  border-radius: 3px;
}

.waiting-dot {
  display: flex;
  gap: 8px;
  padding: 8px 20px;
}

.waiting-dot span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-cinnabar);
  animation: bounce 0.6s infinite alternate;
}

.waiting-dot span:nth-child(2) { animation-delay: 0.2s; }
.waiting-dot span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  from { transform: translateY(0); opacity: 0.4; }
  to { transform: translateY(-10px); opacity: 1; }
}

.quick-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px 24px;
  border-top: 1px solid rgba(168, 32, 26, 0.1);
}

.quick-btn {
  font-size: 13px;
  padding: 6px 16px;
  min-height: 34px;
}

.chat-input-row {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid rgba(168, 32, 26, 0.1);
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(168, 32, 26, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  outline: none;
  font-size: 15px;
}

.chat-input:focus {
  border-color: var(--color-cinnabar);
  box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.06);
}

/* ---------- Generate ---------- */
.generate-card {
  min-height: 420px;
}

.input-row {
  display: flex;
  gap: 12px;
  padding: 28px;
}

.result-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 28px;
  align-items: center;
}

.result-art {
  display: grid;
  min-height: 200px;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--color-paper), var(--color-paper-deep));
}

.result-art :deep(.window-flower) {
  width: 150px;
}

.result-card h3 {
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 32px;
  margin: 14px 0 10px;
}

.result-card p {
  color: var(--color-brown);
  line-height: 1.8;
}

.result-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.suggestions {
  text-align: center;
  margin-top: 28px;
}

.suggest-label {
  display: block;
  margin-bottom: 12px;
  color: var(--color-muted);
}

.suggest-btn {
  margin: 0 6px;
  font-size: 14px;
}

/* ---------- Recognize ---------- */
.recognize-section h3 {
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 24px;
}

.sample-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.sample-btn {
  padding: 10px 18px;
  border: 1px solid rgba(168, 32, 26, 0.18);
  border-radius: 999px;
  background: transparent;
  color: var(--color-brown);
  cursor: pointer;
  transition: all 0.2s ease;
}

.sample-btn.active,
.sample-btn:hover {
  color: #fff;
  background: var(--color-cinnabar);
  border-color: var(--color-cinnabar);
}

.recognize-result {
  display: grid;
  gap: 14px;
}

.result-item {
  padding: 10px 0;
  border-bottom: 1px solid rgba(168, 32, 26, 0.08);
  color: var(--color-brown);
  line-height: 1.7;
}

.result-item strong {
  color: var(--color-rouge);
}

.score-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
  color: var(--color-brown);
  font-size: 14px;
}

.bar-track {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: rgba(200, 16, 46, 0.08);
}

.bar-fill {
  height: 100%;
  border-radius: 3px;
  background: var(--color-cinnabar);
  animation: fillBar 1s ease;
}

@keyframes fillBar {
  from { width: 0; }
}

@media (max-width: 800px) {
  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>
