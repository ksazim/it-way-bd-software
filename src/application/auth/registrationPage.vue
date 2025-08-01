<script setup>
import Input from '@/components/form/InputComponent.vue';
import Select from '@/components/form/SelectComponent.vue';
import TopbarOne from '@/components/topbar/TopbarOne.vue'
import { useCrudStore } from '@/store/crud';
// import { useRouter } from 'vue-router'
import { ref } from 'vue'

const crudStore = useCrudStore()
// const router = useRouter()

const name = ref('')
const phone = ref('')
const email = ref('')
const username = ref('')
const gender = ref('')
const profession = ref('')
const password = ref('')
const password_confirmation = ref('')
const termsConditions = ref(false)

// Error Messages

const nameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')

// Response Messages

const successMsg = ref()
const errorMsg = ref()

// Const for Selects

// const registrationType = [
//     {
//         id: 'user',
//         value: 'User'
//     },
//     {
//         id: 'law-chamber',
//         value: 'Law Chamber/Law Firm'
//     },
//     {
//         id: 'police-station',
//         value: 'Police Station'
//     },
//     {
//         id: 'bench',
//         value: 'Bench'
//     },
//     {
//         id: 'court',
//         value: 'Court'
//     },
//     {
//         id: 'prison',
//         value: 'Prison'
//     }
// ]

const genderList = [
    {
        id: 'male',
        value: 'Male'
    },
    {
        id: 'female',
        value: 'Female'
    },
    {
        id: 'not-human',
        value: 'Not Applicable'
    }
]

// Functions 

function register() {
    if(!termsConditions.value) {
        errorMsg.value = 'Please fill the required fields and make sure you are agreed with our terms and conditions.'
    } else {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        const agreedTermsConditions = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab rerum magnam laborum saepe quia id nihil quidem, distinctio ad possimus. Tempore natus perferendis neque obcaecati perspiciatis alias nesciunt numquam sit!'

        const formData = new FormData()
        formData.append('name', name.value)
        // formData.append('image', (image.value !== undefined && image.value !== null) ? image.value : '')
        formData.append('phone', phone.value)
        formData.append('email', email.value)
        formData.append('password', password.value)
        formData.append('password_confirmation', password_confirmation.value)
        formData.append('username', username.value)
        formData.append('profession', profession.value)
        formData.append('gender', gender.value)
        formData.append('terms_conditions', agreedTermsConditions)

        crudStore.newData('registration', formData, config).then((response) => {
            if(response.data.status == 200) {
                clear()
                // modal.value         = 'success'
                successMsg.value   = response.data.message
                // setTimeout(() => {
                //     router.push('/home')
                // }, 2000);
            } else if(response.data.status == 400) {
                nameError.value  = (response.data.errors.name) ? response.data.errors.name[0] : null
                emailError.value  = (response.data.errors.email) ? response.data.errors.email[0] : null
                passwordError.value  = (response.data.errors.password) ? response.data.errors.password[0] : null
                confirmPasswordError.value  = (response.data.errors.password_confirmation) ? response.data.errors.password_confirmation[0] : null
                errorMsg.value = 'Please fill the required fields'
                // modal.value = 'failed'
            } else {
                errorMsg.value = 'Internal Server Error'
                // modal.value = 'failed'
            }
        })
    }
}

function clear() {
    name.value = ''
    phone.value = ''
    email.value = ''
    username.value = ''
    gender.value = ''
    profession.value = ''
    password.value = ''
    password_confirmation.value = ''

    nameError.value = ''
    emailError.value = ''
    passwordError.value = ''
    confirmPasswordError.value = ''
    errorMsg.value = ''

    termsConditions.value = ''
    errorMsg.value = ''
}
</script>

<template>
    <div class="master-body" v-if="successMsg">
        <div class="success">
            <font-awesome-icon class="check-circle green" :icon="['far', 'circle-check']" />
            <span class="green">{{ successMsg }}</span>
            <div>
                <router-link to="/">Log in</router-link> to Bichar Acahr 
            </div>
        </div>
    </div>
    <div v-else class="master-body">
        <TopbarOne>
            <div class="flex-start-center-10">
                <font-awesome-icon :icon="['far', 'user']" /> <h5>Registration</h5>
                <div>| If you already have an account, Login <router-link to="/">Here</router-link></div>
            </div>
            <button v-if="termsConditions" @click="register" class="registration-btn">Registration</button>
            <button v-else @click="register" class="registration-btn-disabled">Registration</button>
        </TopbarOne>
        <div class="resp-msg danger" v-if="errorMsg">
            {{ errorMsg }}
        </div>
        <div class="post-form form">
            <div class="col-2">
                <Input v-model="name" :type="'text'" :label="'Name'" :placeholder="'Your Full Name'" :required="true">
                <span class="red" v-if="nameError">{{ nameError }}</span>
                </Input>
                <Input v-model="phone" :type="'text'" :label="'Phone'" :placeholder="'Your Phone Number'">
                    
                </Input>
            </div>
            <div class="col-2">
                <!-- <Select :defaultValue="profession ?? 'null'" v-model="profession" :label="'Profession'" :placeholder="'Register As'" :required="true" :list="registrationType" /> -->
                <Select :defaultValue="gender ?? 'null'" v-model="gender" :label="'Gender'" :placeholder="'Your Gender'" :list="genderList" />
            </div>
            <div class="col-2">
                <Input v-model="email" :type="'text'" :label="'Email'" :placeholder="'Your Email Here'" :required="true">
                    <span class="red" v-if="emailError">{{ emailError }}</span>
                </Input>
                <Input v-model="username" :type="'text'" :label="'Username'" :placeholder="'Your Username'" />
            </div>
            <div class="col-2">
                <Input v-model="password" :type="'password'" :label="'Password'" :placeholder="'Type Password'" :required="true">
                <span class="red" v-if="passwordError">{{ passwordError }}</span>
                </Input>
                <Input v-model="password_confirmation" :type="'password'" :label="'Confirm Password'" :placeholder="'Type Password Again'" :required="true">
                <span class="red" v-if="confirmPasswordError">{{ confirmPasswordError }}</span>
                </Input>
            </div>
            <div class="terms-conditions">
                <h6 class="red">* Please read the following terms & conditions and check the checkbox to show your consent on it.</h6>
                <div class="read-and-agree">
                    <input v-model="termsConditions" type="checkbox" />
                    <div class="read-and-agree-box">
                        bicharachar.com is a social media platform, set to increase awareness among 
                        people about law and order. We aim to facilitate communication among people 
                        of different classes, so that lawyers can maintain communication with their 
                        clients, clients may easily reach the lawyers. This platform is not completely 
                        secured like any other social media platform, therefore we encourage you to be 
                        cautious about sharing sensitive data. Also, we highly encourage you to verify 
                        people you meet here before going for any deal or contract.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form {
   
}

.terms-conditions {
    margin-top:20px;
    display: grid;
}

.read-and-agree {
    margin-top: 20px;
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: start;
}

.read-and-agree-box {
    height: 100px;
    border-radius: 10px;
    overflow-y: auto; 
}

.registration-btn {
    background-color: #52b152;
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    height: 40px;
    width: 150px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 5px;
}

.registration-btn:hover {
    background-color: #006400;
}

.registration-btn-disabled {
    outline: none;
    border: none;
    font-size: 16px;
    height: 40px;
    width: 150px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #ededed;
}

.success {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    display: grid;
    gap: 15px;
}

.success > * {
    justify-self: center;
}

.check-circle {
    font-size: 40px;
    align-self: center;
}

.link {
    color: #0000ff;
    text-decoration: none;
}

.link:hover {
    color: #0404e6;
}
</style>