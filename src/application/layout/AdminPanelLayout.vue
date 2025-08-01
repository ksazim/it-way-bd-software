<script setup>
import Sidebar from '@/components/admin/organs/sidebarComponent.vue'
import Header from '@/components/admin/organs/dashboardHeader.vue'
import { useSystemStore } from '@/store/system'
const systemStore = useSystemStore()
</script>

<template>
    <div :class="[systemStore.showSidebar ? 'wrapper-layout-1' : 'wrapper-layout-2']">
        <aside :class="['sidebar', systemStore.showSidebar ? '' : 'hide-sidebar']" v-if="systemStore.showSidebar">
            <Sidebar />
        </aside>
        <div class="content">
            <Header />
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.wrapper-layout-1 {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100vh;
}

.wrapper-layout-2 {
    display: grid;
    grid-template-columns: 1fr;
}

.content {
    height: 100vh;
    overflow: auto;
    background-color: #f2f4f7;
}

@media(max-width: 480px) {
    .hide-sidebar {
        display: none;
    }
}
</style>
