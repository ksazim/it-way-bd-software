<template>
    <div class="card">
        <slot />
    </div>
</template>

<style scoped>
.card {
    border-radius: 8px;
    background-color: white;
    /* border: 1px solid #e3e3e3; */
    padding: 16px;
    color: black;
    box-shadow: 0 0px 8px 0px rgba(43, 43, 43, 0.08);
}
</style>