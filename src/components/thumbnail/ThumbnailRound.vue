<script setup>
import { defineProps } from 'vue';
import { useSystemStore } from '@/store/system';

const systemStore = useSystemStore()

defineProps({
height: String,
width: String,
path: String
})
</script>

<template>
    <div class="user-thumbnail" :style="{height:height, width:width}">
        <img v-if="path" :src="systemStore.serverPath+path" alt="">
        <img v-else src="@/assets/default/user-1.png" :style="{height:height, width:width}" alt="">
    </div>
</template>

<style scoped>
.user-thumbnail {
    border-radius: 50% 50%;
    overflow: hidden;
}

.user-thumbnail > img {
    height: 100%;
    width: 100%;
}
</style>