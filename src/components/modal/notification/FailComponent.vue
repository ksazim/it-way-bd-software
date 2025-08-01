<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['offModal'])
const showModal = ref(true)  // Initially show the modal
const closing = ref(false)  // Flag to control the exit animation

function close() {
  closing.value = true  // Set closing to true to trigger the exit animation
  setTimeout(() => {
    showModal.value = false  // Hide the modal after the animation
    emit("offModal")
  }, 1000)  // Match this time with the duration of the exit animation
}
</script>

<template>
    <div v-if="showModal" class="modal-container">
        <!-- Modal content -->
        <div :class="['modal', closing ? 'slide-out-right' : 'slide-in-right']">
          <div class="modal-content">
            <span @click="close" class="close">&times;</span>
            <div class="greetings">
              <font-awesome-icon :icon="['fa', 'circle-exclamation']" />
            </div>
            <div class="modal-body">
              <slot />
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.modal-container {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 10px;
  right: 0 !important;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 99999;
}

/* Modal Content */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
}

/* The Close Button */
.modal-content {
  color: #c81e1e;
  position: relative;
  padding: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fde8e8e6;
}

.modal-content > .close {
  position: absolute;
  top: 2px;
  right: 2px;
  border-radius: 5px;
  padding: 5px 10px;
  color: #c81e1e;
  font-size: 28px;
  font-weight: bold;
}

/* Slide-in effect from the right */
.slide-in-right {
  animation: slideInRight 0.2s ease-out forwards;
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%); /* Start off-screen on the right */
    opacity: 1; /* Initially hidden */
  }
  100% {
    transform: translateX(0); /* End at original position */
    opacity: 1; /* Fully visible */
  }
}

/* Slide-out effect to the right */
.slide-out-right {
  animation: slideOutRight 0.2s ease-in forwards;
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0); /* Start at original position */
    opacity: 1; /* Fully visible */
  }
  100% {
    transform: translateX(100%); /* Move off-screen to the right */
    opacity: 1; /* Fade out */
  }
}

.close {
  border-radius: 5px;
  padding: 5px 10px;
  color: #c81e1e;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: fixed;
  margin-left: 21%;
  margin-top: -1.5%;
}

.close:hover,
.close:focus {
  color: #c81e1e;
  text-decoration: none;
  cursor: pointer;
}

.modal-body::v-deep {
  text-align: center;
  color: #c81e1e;
}

.greetings {
  display: flex;
  justify-content: center;
  color: #c81e1e;
  font-size: 35px;
}

/* For mobile phones */
@media only screen and (max-width: 600px) {
  .modal {
    width: 80%;
  }

  .close {
    margin-left: 78.5%;
    margin-top: -6%;
    font-size: 20px;
  }

  .greetings {
    font-size: 200%;
    color: #c81e1e;
    text-align: center;
    margin: 15px 0;
  }
}
</style>
