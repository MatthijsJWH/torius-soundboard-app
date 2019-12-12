import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gents from './views/Gents.vue'
import Ladies from './views/Ladies.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/gents',
			name: 'gents',
			component: Gents
		},
		{
			path: '/ladies',
			name: 'ladies',
			component: Ladies
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue')
		},
		{
			path: '/support',
			name: 'support',
			component: () => import('./views/Support.vue')
		}
	]
})
