<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    label: String,
    placeholder: String,
    list: Array,
    required: Boolean,
    modelValue: String,
    defaultValue: String
})

const emit = defineEmits(['update:modelValue']);

// Method to emit the new value
const updateValue = (value) => {
  emit('update:modelValue', value);
};
</script>

<template>
    <div class="input-wrapper">
        <label for="">
            {{ label }}
            <span v-if="required==true" class="danger">*</span>
        </label>
        <select 
        :value="defaultValue"
        @change="updateValue($event.target.value)"
        >
            <option value="">{{ placeholder }}</option>
            <option v-for="data in list" :key="data.id" :value="data.id">{{ data.value }}</option>
        </select>
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

select {
    padding: 15px 20px;
    border: 1px solid #dbdbdb;
    outline: none;
    border-radius: 5px;
    background-color: white;
}
</style>