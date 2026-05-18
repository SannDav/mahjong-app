import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
})

export default router
