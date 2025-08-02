<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()
const baseApi = process.env.VUE_APP_BASE_API_URL 

const email = ref('')
const password = ref('')

const errorEmail = ref('')
const errorPassword = ref('')
const success = ref('')

function login() {
    const data = {
        email: email.value,
        password: password.value
    }

    axios.post(baseApi+'login', data).then((response) => {
        success.value = response.data.message
        setTimeout(() => {
            localStorage.setItem('token', response.data.token)
            router.push('dashboard')
        }, 1000);
    }).catch((error) => {
        errorEmail.value = (error.response.data.errors.email) ? error.response.data.errors.email[0] : ''
        errorPassword.value = (error.response.data.errors.password) ? error.response.data.errors.password[0] : ''
    })
}
</script>

<template>
    <div class="login-panel">
        <div class="panel">
            <h1>Login Panel</h1>
            <span class="success" v-if="success">{{ success }}</span>
            <div class="form-control">
                <label for="">Email Address <span class="required">*</span></label>
                <input v-model="email" type="text" placeholder="Email">
                <span class="required" v-if="errorEmail">{{ errorEmail }}</span>
            </div>
            <div class="form-control">
                <label for="">Password <span class="required">*</span></label>
                <input v-model="password" type="password" placeholder="Password">
                <span class="required" v-if="errorPassword">{{ errorPassword }}</span>
            </div>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<style scoped>
.login-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.panel {
    width: 400px;
    /* background-color: #ff7f00; */
    padding: 30px;
    box-sizing: border-box;
    color: #131313;
    border: 1px solid gray;
}

.form-control {
    margin-top: 15px;
    display: grid;
    gap: 5px;
}

input {
    outline: none;
    border: none;
    padding: 15px 20px;
    border: 1px solid gray;
}

button {
    outline: none;
    border:none;
    background-color: #000000;
    padding: 15px 20px;
    margin-top: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
}

button:hover {
    background-color: #244c5e;
}

.required {
    color: red;
}

.success {
    color: green;
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    .login-panel {
        margin: 20px;
    }

    .panel {
        width: 100%;
    }
}
</style>