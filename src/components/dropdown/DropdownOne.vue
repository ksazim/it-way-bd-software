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

// function logout() {
//     axios.get(process.env.VUE_APP_BASE_API_URL+'logout').then(response => {
//         console.log(response)
//         router.push('/')
//         systemStore.user = null
//         localStorage.removeItem('token')
//     }).catch((errors) => {
//         console.log(errors)
//     });
// }

// Close dropdown when clicking outside
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

/* .dropdown-toggle {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
} */

.dropdown-menu {
    position: absolute;
    top: 110%; /* Positions directly below toggle button */
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #ccc;
    width: 130px;
    z-index: 99999;
    border-radius: 10px;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}

.dropdown-item {
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
    color: #616161;
    text-align: start;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    color: black;
}
</style>
  