<template>
    <div class="dropdown" ref="dropdownRef" @click="toggleDropdown">
      <slot></slot>
      <div v-if="isOpen" class="dropdown-menu">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item.link)"
          class="dropdown-item"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'
// import axios from 'axios'
// import { useSystemStore } from '@/store/system';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
// const systemStore =useSystemStore()
const authStore = useAuthStore()

const isOpen = ref(false)
const selectedItem = ref('Select an item')
const dropdownRef = ref(null)

defineProps({
    items: Array
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectItem(item) {
    selectedItem.value = item
    isOpen.value = false
    if(item=='/logout') {
        authStore.logout()
        router.push('/')
    } else {
        router.push(item)
    }
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
    top: 0; /* Positions directly below toggle button */
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #ccc;
    width: 130px;
    z-index: 99999;
}

.dropdown-item {
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
    color: #c9c9c9;
    text-align: start;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    color: black;
}
</style>
  