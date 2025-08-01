<script setup>
import { defineProps, defineEmits } from 'vue';

// Define the props for the component
defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        required: false
    }
});

const emit = defineEmits(['update:modelValue']);

// Method to emit the new value on input
const updateValue = (value) => {
  emit('update:modelValue', value);
};
</script>

<template>
    <div class="input-wrapper">
        <label for="textarea">
            {{ label }}
            <span v-if="required" class="danger">*</span>
        </label>
        <textarea
            id="textarea"
            :value="modelValue"
            :placeholder="placeholder"
            @input="updateValue($event.target.value)"
            :required="required"
        ></textarea>
    </div>
</template>

<style scoped>
.input-wrapper {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
}

label {
    font-size: 14px;
}

textarea {
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    outline: none;
    border-radius: 5px;
    background-color: white;
    width: 100%;
    min-height: 100px;
}

textarea:focus {
    border-color: #5b9bd5;
}
.danger {
    color: red;
}
</style>
