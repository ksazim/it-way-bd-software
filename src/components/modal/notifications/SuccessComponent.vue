<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['offModal'])

function close() {
  emit("offModal")
}

</script>

<template>
    <div class="jmc-modal-container">
        <!-- jmc-Modal content -->
        <div class="jmc-modal">
          <span @click="close" class="close">&times;</span>
          <div class="jmc-modal-content">
            <div class="greetings">
                <font-awesome-icon :icon="['far', 'circle-check']" />
                Congratulations !
            </div>
            <div class="jmc-modal-body">
              <slot />
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.jmc-modal-container {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 99999;
}

/* jmc-Modal Content */
.jmc-modal {
  position: fixed;
  right: 20px;
  background-color: rgba(222, 247, 236, 0.9);
  width: 25%;
  overflow-y: auto;
  border-radius: 10px;
  color: #046c4e;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

  /* The Close Button */
.close {
  border-radius: 5px;
  padding: 5px 10px;
  color: #046c4e;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: fixed;
  margin-left: 21%;
  margin-top: -1.5%;
}
  
.close:hover,
.close:focus {
  color: #033d2d;
  text-decoration: none;
  cursor: pointer;
}

.jmc-modal-content {
    color: #046c4e;
}

.jmc-modal-content > * {
  
}

.jmc-modal-body > * {
  color: #046c4e;
}

.greetings {
    color: #046c4e;
    margin: 15px 0;
    font-weight: bold;
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    .jmc-modal {
        width: 80%;
    }

    .close {
        margin-left: 78.5%;
        margin-top: -6%;
        font-size: 18px;
    }

    .greetings {
        margin: 15px 0;
    }
}
</style>