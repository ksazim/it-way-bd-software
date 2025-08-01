<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['offModal'])

function close() {
  emit("offModal")
}

</script>

<template>
    <div class="jmc-modal-container">
        <!-- Modal content -->
        <div class="jmc-modal">
          <span @click="close" class="close">&times;</span>
          <div class="jmc-modal-content">
            <div class="greetings">
                Attendance
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
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #101f2b; /* Fallback color */
  background-color: rgba(18, 18, 19, 0.9); /* Black w/ opacity */
  z-index: 99999;
}

/* Modal Content */
.jmc-modal {
  background-color: #ffffff;
  margin: auto;
  width: 30%;
  overflow-y: auto;
  border-radius: 10px;
  color: #fbfbfb;
  padding: 30px;
}

  /* The Close Button */
.close {
  border-radius: 5px;
  padding: 5px 10px;
  color: rgb(255 112 112);
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: fixed;
  margin-left: 26.5%;
  margin-top: -1.5%;
}
  
.close:hover,
.close:focus {
  color: #fc3b3b;
  text-decoration: none;
  cursor: pointer;
}

.jmc-modal-content {
    color: #95d696;
    margin: auto;
}

.jmc-modal-content > * {
    text-align: center;
}
.jmc-modal-body > * {
  text-align: center;
  color: #000000;
}

.greetings {
    font-size: 250%;
    color: #000000;
    text-align: center;
    margin: 15px 0;
}

@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    .jmc-modal {
        width: 80%;
    }

    .close {
        margin-left: 78.5%;
        margin-top: -6%;
        font-size: 20px;
    }

    .greetings {
        font-size: 200%;
        color: #9add9a;
        text-align: center;
        margin: 15px 0;
    }
}
</style>