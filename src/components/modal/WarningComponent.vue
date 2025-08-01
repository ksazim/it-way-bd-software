<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['offModal'])

function close() {
  emit("offModal")
}

</script>

<template>
  <Teleport to="body">
    <div class="modal-container">
        <div class="modal">
          <span @click="close" class="close">&times;</span>
          <div class="modal-content">
            <div class="greetings">
              <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
            </div>
            <div class="modal-body">
              <slot />
            </div>
          </div>
        </div>
    </div>
    </Teleport>
</template>

<style scoped>
.modal-container {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 99999;
  background-color: rgba(0,0,0,0.8);
}

/* Modal Content */
/* .modal {
  background-color: #101f2b;
  margin: auto;
  border: 3px solid #e1a777;
  width: 40%;
  overflow-y: auto;
  border-radius: 10px;
  color: #fbfbfb;
  padding: 30px;
} */

.modal {
    background-color: #ffffff;
    margin: auto;
    width: 20%;
    overflow-y: auto;
    border-radius: 10px;
    color: #000000;
    padding: 30px;
    box-shadow: #00000059 0px 5px 15px;
    position: relative;
    border: 5px solid gray;
}

  /* The Close Button */
.close {
  border-radius: 5px;
  padding: 5px 10px;
  color: rgb(255 112 112);
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
}
  
.close:hover,
.close:focus {
  color: #fc3b3b;
  text-decoration: none;
  cursor: pointer;
}

.modal-content {
    color: #e1a777;
    margin: auto;
    display: grid;
}

.modal-content > * {
    text-align: left;
}

.modal-body::v-deep {
  text-align: center;
  color: #242424;
}

.greetings {
  font-size: 250%;
  color: #ff2727;
  text-align: left;
  /* margin: 1px 0; */
  /* margin-bottom: 20px; */
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    .modal {
        width: 80%;
    }
}
</style>