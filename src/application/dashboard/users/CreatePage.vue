<script setup>
import SuccessModal from '@/components/modal/notification/SuccessComponent'
import FailModal from '@/components/modal/notification/FailComponent'
import CardTwo from '@/components/card/ComponentTwo'
import CardThree from '@/components/card/ComponentThree'
import InputFile from '@/components/form/FileComponent'
import { onMounted, ref } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useRouter } from 'vue-router'

import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

const crudStore = useCrudStore()
const router = useRouter()

const categoryName = ref('')
const image = ref()
const status = ref('null')

const responseMsg = ref('')
const errors = ref([])

const statusList = [
    {
        id: 'active',
        value: 'Active'
    },
    {
        id: 'inactive',
        value: 'Inactive'
    }
]

function setProfileImage(val) {
    image.value = val
}

const errorCategoryName  = ref()

function create() {
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    const formData = new FormData()
    formData.append('name', categoryName.value)
    formData.append('image', (image.value !== undefined && image.value !== null) ? image.value : '')
    formData.append('status', status.value)

    crudStore.newData('category/create', formData, config).then((response) => {
        if(response.data.status == 200) {
            clear()
            modal.value         = 'success'
            responseMsg.value   = response.data.message
            setTimeout(() => {
                router.push('/category/list')
            }, 1000);
        } else if(response.data.status == 400) {
            errorCategoryName.value  = (response.data.errors.application_start_date) ? response.data.errors.application_date[0] : null
            responseMsg.value = 'Please fill the required fields'
            modal.value = 'failed'
        } else {
            responseMsg.value = 'Internal Server Error'
            modal.value = 'failed'
        }
    })
}

function clear() {
    categoryName.value = ''
    status.value = ''
}

const modal = ref()

function closeModal() {
    modal.value = ''
}

onMounted(() => {
    // systemStore.getCompanyList('companies')
    // crudStore.getAll('leave/types')
})
</script>

<template>
    <div class="create">
        <CardTwo class="one">
            <div class="page-header">
                <h3>Create Category</h3>
                <p><small>Create or Update Category. Fields with (*) marks are required.</small></p>
            </div>
        </CardTwo>
        <CardThree class="two">
            <template #header>
                <h5>Category Info </h5>
            </template>
            <template #body>
                <div class="col-one">
                    <InputComponent v-model="categoryName" :label="'Category Name'" :placeholder="'Category Name'" :required="true" />
                    <!-- <span class="error-msg" v-if="errors['status']">{{ errors['status'][0] }}</span> -->
                </div>
            </template>
        </CardThree>
        <CardThree class="three">
            <template #header>
                <div class="page-header">
                    <h5>Photo</h5>
                </div>
            </template>
            <template #body>
                <div class="col-one">
                    <InputFile :file-types="'jpg, png'" @process-image="setProfileImage" />
                </div>
            </template>
        </CardThree>
        <CardThree class="four">
            <template #header>
                <div class="page-header">
                    <h5>Status <span class="error-msg">*</span></h5>
                </div>
            </template>
            <template #body>
                <div class="col-one">
                    <SelectComponent 
                    :defaultValue="status" 
                    v-model="status" 
                    :label="'Select Status'" 
                    :placeholder="'Status'" 
                    :list="statusList" 
                    :required="true" />
                    <span class="error-msg" v-if="errors['status']">{{ errors['status'][0] }}</span>
                </div>
            </template>
        </CardThree>
        <div class="seven footer-card display-flex-center">
            <ButtonMedium @click="$router.go(-1)" :label="'Back'" :background-color="'#1f1fd9'" :color="'white'" />
            <ButtonMedium @click="create" :label="'Create'" :background-color="'green'" :color="'white'" />
            <!-- <button class="cancel-btn" @click="$router.go(-1)">Cancel</button>
            <button class="create-btn" @click="create">Apply Leave</button> -->
        </div>
        <SuccessModal @off-modal="closeModal" v-if="modal=='success'">
            {{ responseMsg }}
        </SuccessModal>
        <FailModal @off-modal="closeModal" v-if="modal=='failed'">
            {{ responseMsg }}
        </FailModal>
    </div>
</template>

<style scoped>
.create {
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    'one one one'
    'two three four'
    'seven seven seven'
    ;
    gap: 20px;
    background-color: whitesmoke;
}
.one {
    grid-area: one;
}

.two {
    grid-area: two;
}

.three {
    grid-area: three;
}

.four {
    grid-area: four;
}

.five {
    grid-area: five;
}
.seven {
    grid-area: seven;
    display: flex;
    gap: 10px;
    justify-content: end;
}

.page-header {
    display: grid;
    gap: 5px;
}

.page-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.col-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.col-one {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.modal-btn {
    font-size: 13px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.modal-btn:hover {
    color: gray;
}

.form-input {
    display: grid;
    gap: 10px;
}

.form-input > label {
    font-size: 13px;
}
</style>