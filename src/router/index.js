import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MSite from '../pages/MSite/MSite.vue'

const routes = [
  {
	path: '/',
	name: 'home',
	component: MSite,
	meta: { showFooter: true}
  },
  {
	path: '/msite',
	name: 'msite',
	component: () => import('../pages/MSite/MSite.vue'),
	meta: { showFooter: true}
  },
  {
	path: '/search',
	name: 'search',
	component: () => import('../pages/Search/Search.vue'),
	meta: { showFooter: true}
  },
  {
	path: '/login',
	name: 'login',
	component: () => import('../pages/Login/Login.vue')
  },
  {
	path: '/order',
	name: 'order',
	component: () => import('../pages/Order/Order.vue'),
	meta: { showFooter: true}
  },
  {
	path: '/profile',
	name: 'profile',
	component: () => import('../pages/Profile/Profile.vue'),
	meta: { showFooter: true}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
