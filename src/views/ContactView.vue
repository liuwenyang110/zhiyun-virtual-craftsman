<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="联系我们" seal="联" desc="欢迎共同参与福建剪纸文化的 AI 赋能、展览策划、数字传播与文创合作。" />
      <div class="grid two contact-grid">
        <div class="card card-pad info-card">
          <h3>福建剪纸文化展示中心</h3>
          <p><strong>地址：</strong>福建省非遗数字展示云端展馆</p>
          <p><strong>邮箱：</strong>heritage@example.com</p>
          <p><strong>合作：</strong>AI 模型训练合作 / 数字孪生建设 / 知识图谱共建 / 展览策划 / 研学课程</p>
          <p class="note">本页面为文化官网设计示范，联系方式可按实际机构信息替换。</p>
        </div>
        <form class="card card-pad contact-form" @submit.prevent="submitted = true">
          <label>
            姓名
            <input v-model="form.name" type="text" placeholder="请输入姓名" required />
          </label>
          <label>
            联系方式
            <input v-model="form.contact" type="text" placeholder="电话或邮箱" required />
          </label>
          <label>
            留言
            <textarea v-model="form.message" rows="5" placeholder="请输入合作或咨询内容" required></textarea>
          </label>
          <button class="btn primary" type="submit">提交留言</button>
          <p v-if="submitted" class="success">留言已记录在当前页面示例中，接入后端后可正式发送。</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'

const submitted = ref(false)
const form = reactive({ name: '', contact: '', message: '' })
</script>

<style scoped>
h3 {
  margin-top: 0;
  color: var(--color-rouge);
  font-family: var(--font-title);
  font-size: 34px;
}

p {
  color: var(--color-brown);
  line-height: 1.9;
}

.note {
  padding: 16px;
  border-left: 4px solid var(--color-cinnabar);
  background: rgba(200, 16, 46, 0.06);
}

.contact-form {
  display: grid;
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--color-brown);
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 13px 15px;
  color: var(--color-ink);
  border: 1px solid rgba(168, 32, 26, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.76);
  outline: none;
}

input:focus,
textarea:focus {
  border-color: var(--color-cinnabar);
  box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.08);
}

.success {
  color: var(--color-cinnabar);
  font-weight: 700;
}
</style>
