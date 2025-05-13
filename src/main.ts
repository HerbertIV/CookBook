import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import RecipeList from './views/RecipeList.vue'
import RecipeDetail from './views/RecipeDetail.vue'

const routes = [
  { path: '/', component: RecipeList, name: 'home' },
  { path: '/recipe/:id', component: RecipeDetail, name: 'recipe-detail' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')