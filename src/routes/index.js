import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import websiteLayout from '@/application/layout/websiteLayout'
import adminPanelLayout from '@/application/layout/AdminPanelLayout'

const routes = [
    {
        path: '/',
        name: 'AdminLoginPage',
        component: () => import('@/application/dashboard/auth/loginPage'),
        meta: { layout: websiteLayout, isAuthenticated: true }
    },
    {
        path: '/:pathmatch(.*)*',
        name: 'notFound',
        component: () => import('@/application/notFound/notFound'),
        meta: { layout: websiteLayout }
    },
    {
        path: '/dashboard',
        name: 'dashboardPage',
        component: () => import('@/application/dashboard/dashboardPage'),
        meta: { layout: adminPanelLayout, requiresAuth: false }
    },

    // Cases
    {
        path: '/case-list',
        name: 'CaseList',
        component: () => import('@/application/dashboard/cases/ListPage'),
        meta: { layout: adminPanelLayout, requiresAuth: false }
    },
    {
        path: '/create-case',
        name: 'CreateCase',
        component: () => import('@/application/dashboard/cases/CreatePage'),
        meta: { layout: adminPanelLayout, requiresAuth: false }
    },

    //Users
    {
        path: '/dashboard/user-list',
        name: 'UserList',
        component: () => import('@/application/dashboard/users/ListPage'),
        meta: { layout: adminPanelLayout, requiresAuth: false }
    },
    {
        path: '/create-user',
        name: 'CreateUser',
        component: () => import('@/application/dashboard/users/CreatePage'),
        meta: { layout: adminPanelLayout, requiresAuth: false }
    },
]

var router = createRouter({
    history: createWebHistory('/'),
    routes
})

function authenticated() {
    return true
}
router.beforeEach(async (to, from, next) => {
    const isAuthenticated = to.matched.some(record => record.meta.isAuthenticated)

    if (isAuthenticated) {
        if (authenticated()) {
            return next({ name: 'AdminLoginPage' });
        }
    }
    
    next();
});



export default router