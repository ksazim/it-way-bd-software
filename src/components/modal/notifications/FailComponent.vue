<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['offModal'])

function close() {
  emit("offModal")
}

</script>

<template>
    <div class="custom-modal-container">
        <!-- custom-Modal content -->
        <div class="custom-modal">
          <span @click="close" class="close">&times;</span>
          <div class="custom-modal-content">
            <div class="greetings">
              <font-awesome-icon :icon="['fas', 'circle-check']" />
              &nbsp;
              <strong>Something Went Wrong !</strong>
            </div>
            <div class="custom-modal-body">
              <slot />
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.custom-modal-container {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 10px;
  right: 0 !important;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  /* background-color: #101f2b;
  background-color: rgb(16, 31, 43, 0.9);  */
  z-index: 99999;
}

/* custom-Modal Content */
.custom-modal {
  /* background-color: #fde8e8; */
  position: fixed;
  right: 20px;
  background-color: #fde8e8e6;
  /* margin: auto; */
  width: 25%;
  overflow-y: auto;
  border-radius: 10px;
  color: #fbfbfb;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

  /* The Close Button */
.close {
  /* background-color: rgb(27 54 77 / 90%); */
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

.custom-modal-content {
    color: #c81e1e;
    margin: auto;
}

.custom-modal-content > * {
  
}

.custom-modal-body > * {
  text-align: center;
  color: #c81e1e;
}

.greetings {
    /* font-size: 250%; */
    color: #c81e1e;
    margin: 15px 0;
}

@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    .custom-modal {
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