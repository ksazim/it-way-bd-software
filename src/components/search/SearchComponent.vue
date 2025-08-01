<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    label: String,
    placeholder: String,
    type: String,
    required: Boolean,
    modelValue: String
})

const emit = defineEmits(['update:modelValue']);

// Method to emit the new value
const updateValue = (value) => {
  emit('update:modelValue', value);
};
</script>

<template>
    <div class="input-wrapper">
        <input 
        :type="type" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        >
        <slot></slot>
    </div>
</template>

<style scoped>
.input-wrapper {
    display: grid;
    gap: 10px;
    /* margin-bottom: 10px; */
}

label {
    font-size: 14px;
}

input {
    padding: 15px 20px;
    border: 1px solid #dbdbdb;
    outline: none;
    border-radius: 5px;
    background-color: white;
}
</style>