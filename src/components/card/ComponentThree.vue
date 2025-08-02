<template>
    <div class="card">
        <div class="header">
            <slot name="header" />
        </div>
        <div class="body">
            <slot name="body" />
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 5px;
    background-color: white;
    /* border: 1px solid #e3e3e3; */
    color: black;
    box-shadow: 0 1px 15px 1px rgba(113,106,202,.08);
}

.card > * {
    padding: 20px;
}

.header {
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
}
</style>