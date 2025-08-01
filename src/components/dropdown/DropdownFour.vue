<template>
    <div class="dropdown" ref="dropdownRef" @click="toggleDropdown">
      <slot name="icon"></slot>
      <div v-if="isOpen" class="dropdown-menu">
        <slot name="items"></slot>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'

// const systemStore =useSystemStore()

const isOpen = ref(false)
const dropdownRef = ref(null)

defineProps({
    items: Array
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}


function handleClickOutside(event) {
if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
}
}

onMounted(() => {
document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 25px; /* Positions directly below toggle button */
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #ccc;
    width: 200px;
    z-index: 99999;
    border-radius: 10px;
}

.dropdown-item {
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
    color: #c9c9c9;
    text-align: start;
    text-decoration: none;
    color: inherit;
    font-size: 14px;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    color: black;
}
</style>
  