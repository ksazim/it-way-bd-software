<script setup>
import { defineProps } from 'vue';

defineProps({
    label: String,
    backgroundColor: String,
    color: String
})
</script>

<template>
    <div>
        <button :style="{ backgroundColor: backgroundColor, color: color }">{{ label }}</button>
    </div>
</template>

<style scoped>
button {
    border: none;
    outline: none;
    padding: 13px 40px;
    cursor: pointer;
    font-size: 15px;
}

button:hover {
    opacity: 0.9;
} 
</style>