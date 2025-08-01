<template>
    <transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="grid-10">
            <textarea name="" id=""></textarea>
            <div class="flex-between-center">
              <div class="upload flex-start-center-10">
                <font-awesome-icon class="oi-icon" :icon="['fas', 'image']" />
                <font-awesome-icon class="oi-icon" :icon="['fas', 'video']" />
              </div>
              <div class="flex-end-center-10">
                <font-awesome-icon @click="closeModal" class="oi-icon red" :icon="['fa', 'remove']" />
                <font-awesome-icon class="oi-icon green" :icon="['fa', 'check']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';


  const emit = defineEmits('close')
  
  defineProps({
    isOpen: Boolean
  });
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    overflow: hidden;
    background: white;
    border-radius: 8px;
    width: 550px;
    max-width: 100%;
    height: 250px;
    z-index: 1001;
    display: flex;
    align-items: center;
  }

  .modal-content > div {
    width: 550px;
    height: 250px !important;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .close-btn {
    display: flex;
    justify-content: center;
  }

  /* button {
    background-color: #ff4141;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #d63434;
  } */

  textarea {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    min-height: 150px; 
    padding: 15px;
    box-sizing: border-box;
    font-size: 18px;
  }

.oi-icon {
  font-size: 25px;
  cursor: pointer;
}
  </style>
  