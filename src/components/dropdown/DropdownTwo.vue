<template>
    <div class="dropdown-container" ref="dropdownRef">
      <font-awesome-icon @click="toggleDropdown" :icon="['fa', 'ellipsis-v']" />
      <div v-if="isDropdownVisible" class="dropdown-menu">
        <button @click="action1">Unfriend</button>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
  
const isDropdownVisible = ref(false);
const dropdownRef = ref(null)

const toggleDropdown = () => {
  console.log("here")
  isDropdownVisible.value = !isDropdownVisible.value;
};

const action1 = () => {
  alert('Button 1 clicked');
};

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownVisible.value = false
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
  /* Container for the dropdown */
  .dropdown-container {
    position: relative;
    display: inline-block;
  }
  
  /* The icon styling */
  .fas {
    font-size: 24px;
    cursor: pointer;
  }
  
  /* The dropdown menu */
  .dropdown-menu {
    position: absolute;
    top: 30px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    background-color: #af1414;
    border-radius: 5px;
    /* padding: 10px; */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 120px;
    z-index: 1000;
  }
  
  /* Button styling inside the dropdown */
  .dropdown-menu button {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    background-color: #af1414;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  
  .dropdown-menu button:hover {
    background-color: #a11414;
  }
  </style>
  