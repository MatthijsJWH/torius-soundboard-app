import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/gents',
            name: 'gents',
            component: () => import('./views/Gents.vue'),
        },
        {
            path: '/ladies',
            name: 'ladies',
            component: () => import('./views/Ladies.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/support',
            name: 'support',
            component: () => import('./views/Support.vue'),
		},
		{
			path: '*',
			name: '404',
			component: () => import('./views/404.vue'),
		}
    ],
});
