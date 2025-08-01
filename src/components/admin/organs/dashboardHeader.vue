<script setup>
import { useSystemStore } from '@/store/system';
import { useAuthStore } from '@/store/auth';

const systemStore = useSystemStore()
const authStore = useAuthStore()

function toggle() {
    systemStore.showSidebar = !systemStore.showSidebar
}
</script>

<template>
    <div class="dashboard-header">
        <div class="left">
            <font-awesome-icon class="sidebar-icon" @click="toggle()" :icon="['fa', 'bars']" />
        </div>
        <div class="right">
            <div class="thumbnail">
                <img src="@/assets/image/user/user.png" />
                <div class="info">
                    <span class="name">
                        <strong v-if="authStore.user">{{ authStore.user.name }}</strong>
                    </span>
                    <span class="">Master Admin</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-header {
    height: 10vh;
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
    font-family: "Hind Siliguri", sans-serif !important;
}

.right {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
}

.right > * {
    transition: 0.2s ease-in-out;

    display: flex;
    justify-content: right;
    align-items: center;
    gap: 30px;
}

.sidebar-icon {
    cursor: pointer;
    transition: 0.1s ease-in-out;
}

.sidebar-icon:hover {
    color: #1f9be1;
}

.thumbnail > img {
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    border: 3px solid #fdbe2e;
}

.thumbnail {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
}

.thumbnail > .info {
    font-size: 13px;
    display: grid;
}

.qsalex-icon > * {
    color: gray;
    font-size: 20px;
}
</style>

