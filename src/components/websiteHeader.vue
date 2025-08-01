<script setup>

</script>

<template>
    <div class="header">
        <div class="container">     
            <router-link to="/home" class="logo">
                <img class="primary-logo" src="@/assets/image/logo/bichar-achar-logo-white.png" width="180px" alt="">
            </router-link>
            
            <div class="navmenu">
                Admin Login
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 10vh;
    /* background-color: white; */
    background-color: white;
    color: #717171;

    display: flex;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    /* overflow: hidden; */
}

.header > * {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
}

.logo > img{
    opacity: 0.7;
}

.logo > img:hover {
    opacity: 1;
}

.navmenu > div {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
}

.menu-item {
    text-decoration: none;
    color: #717171;
    font-size: 15px !important;
    transition: .1s ease-in-out;
    cursor: pointer;
    padding: 8px 12px !important;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
}

.menu-item:hover {
    color: #1cb621;
    border: 1px solid #1cb621;
}

.user-menu {
    padding: 5px 12px !important;
}

.notification {
    position: relative;
}

.notification > .menu-item {
    font-size: 20px;
}

.notification-count {
    position: absolute;
    top: -10px;
    left: 10px;
    color: white;
    background-color: red;
    height: 20px;
    width: 20px;
    border-radius: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}

.mobile-buttons {
    display: none;
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    
}
</style>