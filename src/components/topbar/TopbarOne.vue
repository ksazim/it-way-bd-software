<template>
    <div class="topbar flex-between-center">
        <slot></slot>
    </div>
</template>

<style scoped>
.topbar {
    background-color: white;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    height:10vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin: 20px 0;
}
</style>