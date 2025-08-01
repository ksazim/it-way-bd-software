<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';  
// import { useSystemStore } from '@/store/system';
import { useAuthStore } from '@/store/auth';
import axios from 'axios'

// const systemStore = useSystemStore()
const authStore = useAuthStore()
const router = useRouter()

const open = ref('dashboard')
const parentMenu = ref('dashboard')
const active = ref('dashboard')

function toggle(value) {
    if(open.value != value) {
        open.value = value
    } else {
        open.value = ''
    }
}

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
        router.push('/admin-login')
    })
}

onMounted(async () => {
    // await systemStore.getSiteInfo('site')
})
</script>

<template>
    <div class="sidebar">
        <router-link to="/" class="logo">
            <!-- {{ systemStore.siteInfo.business.business_name }} -->
              Bichar Achar
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

            <div class="menu-item">
                <div @click="toggle('users')" class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'users']" />
                        <span>User</span>
                    </div>
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                </div>
                <div v-if="open=='users'" :class="['child-items', open==='users' ? 'slide-in-down' : 'slide-out-up']">
                    <a @click="move('users', '/dashboard/user-list')" :class="['title', ($route.name==='HeroSection') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> User List</a>
                    <a @click="move('about-us', '/dashboard/about-us')" :class="['title', ($route.name==='AboutUs') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Upgrade Requests</a>
                    <!-- <a @click="move('mission', '/dashboard/mission')" :class="['title', ($route.name==='MissionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Reports</a> -->
                    <!-- <a @click="move('vision', '/dashboard/vision')" :class="['title', ($route.name==='VisionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Vision</a> -->
                    <!-- <router-link to="/dashboard/stats" @click="move('stats', '/dashboard/stats')" class="title"><font-awesome-icon :icon="['fa', 'circle-right']" /> Statistics</router-link> -->
                </div>
            </div>

            <div class="menu-item">
                <div @click="toggle('cases')" class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'gavel']" />
                        <span>Cases</span>
                    </div>
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                </div>
                <div v-if="open=='cases'" :class="['child-items', open==='cases' ? 'slide-in-down' : 'slide-out-up']">
                    <a @click="move('case-list', '/case-list')" :class="['title', ($route.name==='HeroSection') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Cases</a>
                    <a @click="move('about-us', '/dashboard/about-us')" :class="['title', ($route.name==='AboutUs') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Open a Case file</a>
                    <!-- <a @click="move('mission', '/dashboard/mission')" :class="['title', ($route.name==='MissionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Reports</a> -->
                    <!-- <a @click="move('vision', '/dashboard/vision')" :class="['title', ($route.name==='VisionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Vision</a> -->
                    <!-- <router-link to="/dashboard/stats" @click="move('stats', '/dashboard/stats')" class="title"><font-awesome-icon :icon="['fa', 'circle-right']" /> Statistics</router-link> -->
                </div>
            </div>

            <div class="menu-item">
                <div @click="toggle('reports')" class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'flag']" />
                        <span>Reports</span>
                    </div>
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                </div>
                <div v-if="open=='reports'" :class="['child-items', open==='reports' ? 'slide-in-down' : 'slide-out-up']">
                    <a @click="move('landing-page', '/dashboard/hero-section')" :class="['title', ($route.name==='HeroSection') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> User Reports</a>
                    <a @click="move('about-us', '/dashboard/about-us')" :class="['title', ($route.name==='AboutUs') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Post Reports</a>
                    <a @click="move('mission', '/dashboard/mission')" :class="['title', ($route.name==='MissionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Comment/Reply Reports</a>
                    <!-- <a @click="move('vision', '/dashboard/vision')" :class="['title', ($route.name==='VisionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Vision</a> -->
                    <!-- <router-link to="/dashboard/stats" @click="move('stats', '/dashboard/stats')" class="title"><font-awesome-icon :icon="['fa', 'circle-right']" /> Statistics</router-link> -->
                </div>
            </div>

            <!-- <div class="menu-item">
                <div @click="toggle('works')" class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'plane']" />
                        <span>Works</span>
                    </div>
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                </div>
                <div v-if="open=='works'" :class="['child-items', open==='works' ? 'slide-in-down' : 'slide-out-up']">
                    <a @click="move('categories', '/dashboard/works/categories')" :class="['title', ($route.name==='AboutUs') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Categories</a>
                    <a @click="move('works', '/dashboard/works')" :class="['title', ($route.name==='WorkList') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Works</a>
                    <a @click="move('mission', '/dashboard/mission')" :class="['title', ($route.name==='MissionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Mission</a>
                    <a @click="move('vision', '/dashboard/vision')" :class="['title', ($route.name==='VisionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Vision</a>
                </div>
            </div>

            <a @click="move('properties', '/dashboard/properties')" class="menu-item">
                <div :class="['menu-content', ($route.name==='PropertyList') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'landmark']" />
                        <span>Properties</span>
                    </div>
                </div>
            </a> -->

            <a @click="move('faq', '/dashboard/faq')" class="menu-item">
                <div :class="['menu-content', ($route.name==='FaqPage') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'question']" />
                        <span>Support</span>
                    </div>
                </div>
            </a>

            <div class="menu-item">
                <div @click="toggle('content')" class="menu-content">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'file']" />
                        <span>Content</span>
                    </div>
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                </div>
                <div v-if="open=='content'" :class="['child-items', open==='content' ? 'slide-in-down' : 'slide-out-up']">
                    <a @click="move('landing-page', '/dashboard/hero-section')" :class="['title', ($route.name==='HeroSection') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> About</a>
                    <a @click="move('about-us', '/dashboard/about-us')" :class="['title', ($route.name==='AboutUs') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Terms & Conditions</a>
                    <a @click="move('mission', '/dashboard/mission')" :class="['title', ($route.name==='MissionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> Help & Support</a>
                    <a @click="move('vision', '/dashboard/vision')" :class="['title', ($route.name==='VisionPage') ? 'active' : '']"><font-awesome-icon :icon="['fa', 'circle-right']" /> How to file Case</a>
                    <!-- <router-link to="/dashboard/stats" @click="move('stats', '/dashboard/stats')" class="title"><font-awesome-icon :icon="['fa', 'circle-right']" /> Statistics</router-link> -->
                </div>
            </div>

            <!-- <a @click="move('testimonials', '/dashboard/testimonials')" class="menu-item">
                <div :class="['menu-content', ($route.name==='TestimonialList') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'certificate']" />
                        <span>About</span>
                    </div>
                </div>
            </a>

            <a @click="move('general-settings', '/dashboard/general-settings')" class="menu-item">
                <div :class="['menu-content', ($route.name==='GeneralSettings') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'gear']" />
                        <span>Terms & Conditions</span>
                    </div>
                </div>
            </a>

            <a @click="move('general-settings', '/dashboard/general-settings')" class="menu-item">
                <div :class="['menu-content', ($route.name==='GeneralSettings') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'gear']" />
                        <span>Help & Support</span>
                    </div>
                </div>
            </a> -->

            <!-- <a @click="move('general-settings', '/dashboard/general-settings')" class="menu-item">
                <div :class="['menu-content', ($route.name==='GeneralSettings') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'gear']" />
                        <span>How to file Case</span>
                    </div>
                </div>
            </a> -->

            <a @click="move('contacts', '/dashboard/contacts')" class="menu-item">
                <div :class="['menu-content', ($route.name==='ContactPage') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'user']" />
                        <span>Contacts </span>
                    </div>
                </div>
            </a>

            <a @click="move('faq', '/dashboard/faq')" class="menu-item">
                <div :class="['menu-content', ($route.name==='FaqPage') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'question']" />
                        <span>Membership Management</span>
                    </div>
                </div>
            </a>

            <a @click="move('general-settings', '/dashboard/general-settings')" class="menu-item">
                <div :class="['menu-content', ($route.name==='GeneralSettings') ? 'active' : '']">
                    <div class="title">
                        <font-awesome-icon :icon="['fa', 'gear']" />
                        <span>General Settings</span>
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
