<template>
    <section class="loader-container">
        <div class="loader"></div> <!-- Loader spinner -->
    </section>
</template>

<style scoped>
/* Loader container styles */
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

/* Simple spinner */
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #1f9be1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>