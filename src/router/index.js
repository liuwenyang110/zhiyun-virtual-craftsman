import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import SchoolsView from '../views/SchoolsView.vue'
import SchoolDetail from '../views/SchoolDetail.vue'
import GalleryView from '../views/GalleryView.vue'
import MastersView from '../views/MastersView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'
import AIExperience from '../views/AIExperience.vue'
import DigitalTwin from '../views/DigitalTwin.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
  { path: '/history', name: 'history', component: HistoryView, meta: { title: '文化溯源' } },
  { path: '/schools', name: 'schools', component: SchoolsView, meta: { title: '四大流派' } },
  { path: '/schools/:id', name: 'school-detail', component: SchoolDetail, meta: { title: '流派详情' } },
  { path: '/ai-experience', name: 'ai-experience', component: AIExperience, meta: { title: 'AI 体验' } },
  { path: '/digital-twin', name: 'digital-twin', component: DigitalTwin, meta: { title: '数字孪生' } },
  { path: '/gallery', name: 'gallery', component: GalleryView, meta: { title: '作品赏析' } },
  { path: '/masters', name: 'masters', component: MastersView, meta: { title: '传承人物' } },
  { path: '/news', name: 'news', component: NewsView, meta: { title: '资讯动态' } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: '联系我们' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | 福建剪纸文化`
})

export default router
