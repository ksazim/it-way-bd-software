<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const observer = ref(null);

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.value.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { threshold: 0.1 });

  // Observe all elements with the "fade-section" class inside the slot
  document.querySelectorAll('.observer-container .fade-section').forEach((section) => {
    observer.value.observe(section);
  });
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <div class="observer-container">
    <slot></slot>
  </div>
</template>

<style>
/* Global styles to affect slot content */
.observer-container .fade-section {
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.6s ease-in-out;
}

.observer-container .fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
