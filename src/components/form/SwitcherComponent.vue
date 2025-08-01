<template>
  <div class="toggle-row">
    <span class="label-text">{{ options[0].label }}</span>
    <label class="toggle-switch">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="toggle"
      />
      <span class="slider"></span>
    </label>
    <span class="label-text">{{ options[1].label }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    default: () => [
    { label: 'Draft', value: 'draft' },
    { label: 'Published', value: 'public' },
  ],
  },
})

const emit = defineEmits(['update:modelValue'])

// Computed boolean based on modelValue
const isChecked = computed(() => props.modelValue === props.options[1].value)

const toggle = () => {
    console.log(props.options[1].value)
  const newValue = isChecked.value
    ? props.options[0].value
    : props.options[1].value
  emit('update:modelValue', newValue)

}
</script>

<style scoped>
.toggle-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.label-text {
  font-size: 14px;
}
</style>
