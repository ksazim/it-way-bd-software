<script setup>
import Input from '@/components/form/InputComponent.vue';
// import ButtonMedium from '@/components/button/ButtonMedium.vue';
import TopbarOne from '@/components/topbar/TopbarOne.vue'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const router = useRouter()
const baseUrl = process.env.VUE_APP_BASE_API_URL

const email = ref('')
const password = ref('')

// const errorEmail = ref('')
// const errorPassword = ref('')
const success = ref('')
const errorMsg = ref('')

function login() {
    const data = {
        email: email.value,
        password: password.value
    }

    axios.post(baseUrl+'login', data).then((response) => {
        if(response.data.status == 200) {
            success.value = response.data.message
            localStorage.setItem('token', response.data.token)
            authStore.token = response.data.token
            router.push('home')
            if(response.data.user.role == 3) {
                authStore.isUser = true
            } else if(response.data.user.role == 4) {
                authStore.isAgent = true
            }
            // setTimeout(() => {
            // }, 1000);
        } else if(response.data.status == 400) {
            errorMsg.value = response.data.message
            // errorEmail.value = (response.data.errors.email) ? response.data.errors.email[0] : ''
            // errorPassword.value = (response.data.errors.password) ? response.data.errors.password[0] : ''
        }
    }).catch((error) => {
        console.log(error)
        // errorEmail.value = (error.response.data.errors.email) ? error.response.data.errors.email[0] : ''
        // errorPassword.value = (error.response.data.errors.password) ? error.response.data.errors.password[0] : ''
    })
}
</script>

<template>
    <div class="master-body">
        <TopbarOne>
            <div class="flex-start-center-10">
                <font-awesome-icon :icon="['far', 'user']" /> <h3>Login</h3>
            </div>
        </TopbarOne>
        <div class="resp-msg danger" v-if="errorMsg">
            {{ errorMsg }}
        </div>
        <div class="grid-col-2">
            <div class="post-form form">
                <Input @keyup.enter="login" v-model="email" :type="'text'" :label="'Email'" :placeholder="'Put Your Email Here'" :required="true" />
                <!-- <span v-if="errorEmail">{{ errorEmail }}</span> -->
                <Input @keyup.enter="login" v-model="password" :type="'password'" :label="'Password'" :placeholder="'Put Your Password Here'" :required="true" />
                <button class="login-btn" @click="login" :backgroundColor="'#008000'" :color="'white'">Login</button>
                <!-- <div>Don't Have an account yet ? Register <router-link to="/registration">Here</router-link></div>
                <div>If you lost your credentials, contact us: <span class="blue">support@bicharachar.com</span></div> -->
            </div>
            <div class="post-form support">
                <div class="">
                    <span>Don't Have an Account yet ?</span> 
                    <br>
                    <span>Register <router-link to="/registration">Here</router-link></span>
                </div>
                <div class="to-registration"></div>
                <div class="contact">In case you lost your credentials, contact us: <span class="blue">support@bicharachar.com</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form {
    /* width: 50%; */
}

.grid-2 {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
}

.support {
    display: grid;
    text-align: center;
    font-size: 18px;
}

.support > * {
    align-self: center;
}

.to-registration {
    background-color: #f1f1f1;
    height: 5px;
}

.contact {
    font-size: 18px;
}

.login-btn {
    background-color: #52b152;
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    height: 45px;
    width: 100%;
    margin-top: 5px;
    cursor: pointer;
}

.login-btn:hover {
    background-color: #006400;
}
</style>