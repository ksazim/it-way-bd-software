<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';  
// import { useSystemStore } from '@/store/system';
import { useAuthStore } from '@/store/auth';
import axios from 'axios'

// const systemStore = useSystemStore()
const authStore = useAuthStore()
const router = useRouter()

const parentMenu = ref('dashboard')
const active = ref('dashboard')

function move(parent, path) {
    parentMenu.value = parent
    active.value= parent
    router.push(path)
}

function out() {
    axios.get(process.env.VUE_APP_BASE_API_URL+'logout').then(() => {
        authStore.isAuthenticated = false;
        authStore.user = {};
        authStore.token = null;
        localStorage.removeItem('token')
        router.push('/')
    })
}

onMounted(async () => {
    // await systemStore.getSiteInfo('site')
})
</script>

<template>
    <div class="sidebar">
        <router-link to="/" class="logo">
            IT Way BD ERP
        </router-link>
        <div class="menu-items">
            <a @click="move('dashboard', '/dashboard')" class="menu-item">
                <div :class="['menu-content', ($route.name==='dashboardPage') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'home']" />
                        <span>Dashboard </span>
                    </div>
                </div>
            </a>

            <a @click="move('sales', '/dashboard/sales')" class="menu-item">
                <div :class="['menu-content', ($route.name==='SalesList' || $route.name==='CreateSales') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'dollar']" />
                        <span>Sales </span>
                    </div>
                </div>
            </a>

            <a @click="move('trashes', '/dashboard/trashes')" class="menu-item">
                <div :class="['menu-content', ($route.name==='TrashList') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'trash']" />
                        <span>Trash </span>
                    </div>
                </div>
            </a>

            <a class="menu-item" @click="out">
                <div class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                        <span>Logout</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  box-sizing: border-box;
  font-family: "Hind Siliguri", sans-serif !important;
}

.logo {
    width: 100%;
    padding: 10px;
    height: 10vh;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
    color: #1d1d1d;
}

.menu-items > .menu-item > .menu-content {
    padding: 10px 20px;
    font-size: 15px;
    color: #4d4d4d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 99;
    overflow: hidden;
}

.menu-items > .menu-item > .menu-content > .title {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
}

.menu-items > .menu-item > .child-items {
    display: grid;
    background-color: #e5e5e5;
    z-index: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-items > .menu-item > .child-items > .title {
    padding: 10px 40px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    color: black;
}

.menu-items > .menu-item {
    text-decoration: none;
}

.menu-item > .menu-content:hover {
    background-color: #1f9be1;
    color: white;
}

.menu-items > .menu-item > .child-items > .title:hover {
    background-color: #1f9be1;
    color: white;
}

.active {
    background-color: #1f9be1 !important;
    color: white !important; 
}

/* Slide-in and slide-out animations */

.slide-in-down {
    animation: slideInDown 0.3s ease-out forwards;
}

@keyframes slideInDown {
    0% {
        transform: translateY(0%); /* Starts above the viewport */
    }
    100% {
        transform: translateY(0); /* Ends in place */
    }
}

.slide-out-up {
    animation: slideOutUp 0.3s ease-in forwards;
}

@keyframes slideOutUp {
    0% {
        transform: translateY(0); /* Starts in place */
    }
    100% {
        transform: translateY(-100%); /* Moves above the viewport */
    }
}

/* Scroll Bar Styling */

.sidebar::-webkit-scrollbar {
  width: 7px;
}

.sidebar::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

.sidebar::-webkit-scrollbar-thumb {
  background: #956f18; 
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
