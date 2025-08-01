<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    count: String,
})
</script>

<template>
    <div class="card">
        <div class="icon"><font-awesome-icon :icon="['fas', 'gear']" /></div>
        <div class="data">
            <div class="title">{{ title }}</div>
            <div class="number">{{ count }}</div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 10px;
    background-color: white;
    /* border: 1px solid #e3e3e3; */
    display: grid;
    /* grid-template-columns: 0.3fr 1fr; */
    gap: 20px;
    padding: 20px;
    box-shadow: 0 1px 15px 1px rgba(113,106,202,.08);
}

.card > .icon {
    font-size: 40px;
}

.data > * {

}

.data > .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
}

.data > .number {
    color: #00bcd4;
    font-size: 20px;
    font-weight: bold;
}
</style>