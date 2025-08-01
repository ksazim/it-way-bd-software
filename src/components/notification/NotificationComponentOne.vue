<script setup>
import { defineProps } from 'vue';

defineProps({
    message: String,
    status: String,
})
</script>

<template>
<div v-if="status==200" class="msg green">{{ message }}</div>
<div v-else class="msg red">{{ message }}</div>
</template>

<style scoped>
.msg {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>