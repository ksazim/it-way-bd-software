<template>
    <transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div @click="closeModal" class="modal-content" @click.stop>
          <div>
              <div class="icon">
                  <font-awesome-icon class="oi-icon" :icon="['fas', 'check-circle']" />
              </div>
            <slot></slot>
            <div class="close-btn">
              <button @click="closeModal">বাতিল </button>
              <router-link class="go-cart" to="/cart">কার্টে যান </router-link>
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
    /* width: 300px; */
    max-width: 100%;
    max-height: 80vh;
    z-index: 1001;
  }

  .modal-content > div {
    padding: 40px;
    display: grid;
    gap: 15px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .icon {
    display: flex;
    justify-content: center;
    color: #34cea0;
    font-size: 50px;
  }

  button {
    background-color: #ff4141;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #d63434;
  }

  .close-btn {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .go-cart {
    background-color: #1d70b7;
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .go-cart:hover {
    background-color: #07487e;
  }
  </style>
  