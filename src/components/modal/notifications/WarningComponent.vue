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
              <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
              Alert !
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
  z-index: 99999;
}

/* jmc-Modal Content */
/* .jmc-modal {
  background-color: #101f2b;
  margin: auto;
  border: 3px solid #e1a777;
  width: 40%;
  overflow-y: auto;
  border-radius: 10px;
  color: #fbfbfb;
  padding: 30px;
} */

.jmc-modal {
    background-color: #ffffff;
    margin: auto;
    width: 20%;
    overflow-y: auto;
    border-radius: 10px;
    color: #000000;
    padding: 30px;
    box-shadow: #00000059 0px 5px 15px;
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
  margin-left: 16%;
  margin-top: -1.5%;
}
  
.close:hover,
.close:focus {
  color: #fc3b3b;
  text-decoration: none;
  cursor: pointer;
}

.jmc-modal-content {
    color: #e1a777;
    margin: auto;
    display: grid;
}

.jmc-modal-content > * {
    text-align: left;
}

.jmc-modal-body > * {
  text-align: left;
  color: #242424;
}

.greetings {
  font-size: 250%;
  color: #ff2727;
  text-align: left;
  /* margin: 1px 0; */
  margin-bottom: 20px;
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
        color: #e1a777;
        text-align: center;
        margin: 15px 0;
    }
}
</style>