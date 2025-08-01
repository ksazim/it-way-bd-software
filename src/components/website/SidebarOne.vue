<script setup>
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
</script>

<template>
    <div v-if="$route.name=='ChamberRoom'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link to="/home">
            <div :class="($route.name === 'HomePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'home']" /> 
                Home
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-posts">
            <div :class="($route.name === 'MyPosts') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'image']" /> 
                <span>My Posts</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-cases">
            <div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-posts">
            <div :class="($route.name === 'MyPosts') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'users']" /> 
                <span>Members</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-cases">
            <div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'users']" /> 
                <span>My Clients</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-posts">
            <div :class="($route.name === 'MyPosts') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'calculator']" /> 
                <span>Accounts</span>
            </div>
        </router-link>
         <router-link v-if="authStore.token" to="/my-cases">
            <div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'circle-info']" /> 
                <span>About</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-cases">
            <div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gear']" /> 
                <span>Settings</span>
            </div>
        </router-link>
    </div>
    <div v-else :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link to="/home"><div :class="($route.name === 'HomePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
        <!-- <router-link v-if="authStore.token" to="/my-zone">
            <div :class="($route.name === 'MyZone') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'copy']" />  
                My Zone
            </div>
        </router-link> -->
        <!-- <router-link v-if="authStore.token" to="/cases">
            <div :class="($route.name === 'CaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link> -->
        <router-link v-if="authStore.token" to="/my-posts">
            <div :class="($route.name === 'MyPosts') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'image']" /> 
                <span>My Posts</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-cases">
            <div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>My Cases</span>
            </div>
        </router-link>
        <!-- <router-link v-if="!authStore.token" to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link> -->
        <!-- <router-link v-if="authStore.user.user_type=='law-chamber'" to="/chambers">
            <div :class="($route.name === 'ChamberList') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'user-tie']" />
                My Chambers
            </div>
        </router-link> -->
        <router-link v-if="authStore.token" to="/connections">
            <div :class="($route.name === 'ConnectionList') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'users']" /> 
                Community 
            </div>
        </router-link>
        <router-link to="/about-us">
            <div :class="($route.name === 'AboutPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'circle-info']" />
                About
            </div>
        </router-link>
        <router-link to="/disclaimer">
            <div :class="($route.name === 'DisclaimerPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                Terms & Conditions
            </div>
        </router-link>
        <router-link to="/help-and-support">
            <div :class="($route.name === 'HelpSupport') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'handshake-angle']" />
                Help & Support
            </div>
        </router-link>
        <!-- <router-link to="/go-premium">
            <div :class="($route.name === 'GoPremium') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'certificate']" />
                Go Premium
            </div>
        </router-link> -->
        <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'question']" />
                How to File a Case
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.sidebar-one {
    /* background-color: #efefef; */
    background-color: #f2f5f7;
    padding: 20px;
    overflow: auto;
    /* border-right: 1px solid #ebebeb; */
    display: block !important;
}

.sidebar-menu-item, .sub-item {
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
    font-size: 17px;
}

.sidebar-one > * {
    text-decoration: none;
    color: #223135;
}

.sidebar-one > * > .sidebar-menu-item:hover {
    /* background-color: #dfdfdf; */
    background-color: #104ba3;
    color: white;
}

.sub-item:hover {
    color: #0c5acd;
}

.active {
    /* background-color: #dfdfdf; */
    background-color: #104ba3;
    /* color: #104ba3; */
    color: white;
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    .invisible {
        display: none !important;
    }
}
</style>