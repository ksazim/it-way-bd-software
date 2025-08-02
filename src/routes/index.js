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
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },

    // Sales
    {
        path: '/dashboard/sales',
        name: 'SalesList',
        component: () => import('@/application/dashboard/sales/ListPage'),
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },
    {
        path: '/dashboard/sales/create',
        name: 'CreateSales',
        component: () => import('@/application/dashboard/sales/CreatePage'),
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },

    // Trash
    {
        path: '/dashboard/trashes',
        name: 'TrashList',
        component: () => import('@/application/dashboard/trash/ListPage'),
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },

    //Users
    {
        path: '/dashboard/user-list',
        name: 'UserList',
        component: () => import('@/application/dashboard/users/ListPage'),
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },
    {
        path: '/create-user',
        name: 'CreateUser',
        component: () => import('@/application/dashboard/users/CreatePage'),
        meta: { layout: adminPanelLayout, requiresAuth: true }
    },
]

var router = createRouter({
    history: createWebHistory('/'),
    routes
})

function isAuthenticated() {
  return localStorage.getItem('token');
}

router.beforeEach((to, from, next) => {
  const isAuth = isAuthenticated();

  const isLoginPage = to.name === 'AdminLoginPage';
  const isProtectedRoute = to.matched.some(record => record.meta.requiresAuth);

  if (!isAuth && isProtectedRoute) {
    return next({ name: 'AdminLoginPage' });
  }

  if (isAuth && isLoginPage) {
    return next({ name: 'dashboardPage' });
  }
  
  next();
});

export default router