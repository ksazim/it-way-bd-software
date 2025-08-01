<script setup>
import SuccessModal from '@/components/modal/notification/SuccessComponent'
import FailModal from '@/components/modal/notification/FailComponent'
import InputFile from '@/components/form/FileComponent'
import CardTwo from '@/components/card/ComponentTwo'
import CardThree from '@/components/card/ComponentThree'
import { onMounted, ref } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useRouter } from 'vue-router'

import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

const crudStore = useCrudStore()
const router = useRouter()

const responseMsg = ref('')
const errors = ref([])

const image = ref(null)

const errorCategoryName = ref('')
const errorStatus = ref('')

const modalMessage = ref()

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

function update() {
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    const formData = new FormData()
    formData.append('id', crudStore.getDataById.data.id)
    formData.append('name', crudStore.getDataById.data.name)
    formData.append('status', crudStore.getDataById.data.status)
    formData.append('image', (image.value!==null) ? image.value : crudStore.getDataById.data.photo)

    crudStore.updateData('category/update', formData, config).then((response) => {
        if(response.data.status == 200) {
            crudStore.getById('category/view/', router.currentRoute.value.params.id)
            clear()
            modal.value = 'success'
            responseMsg.value = response.data
            modalMessage.value = response.message
            setTimeout(() => {
                router.push('/category/list')
            }, 1000);
        } else if(response.data.status == 400) {
            console.log(response.data)
            errors.value = response.data
            errorCategoryName.value     = (response.data.errors.name) ? response.data.errors.name[0] : ''
            errorStatus.value   = (response.data.errors.status) ? response.data.errors.status[0] : ''

            responseMsg.value = response.data
            modalMessage.value = 'Please fill the required fields'
            modal.value = 'failed'
        } else {
            modal.value = 'failed'
            modalMessage.value = response.message
        }
    })
}

function clear() {

}

const modal = ref()

function closeModal() {
    modal.value = ''
}

onMounted(() => {
    crudStore.getById('category/view/', router.currentRoute.value.params.id)
})
</script>

<template>
    <div v-if="crudStore.getDataById.data" class="create">
        <CardTwo class="one">
            <div class="page-header">
                <h3>Update Category </h3>
                <p><small>Update Category. Fields with (*) marks are required.</small></p>
            </div>
        </CardTwo>
        <CardThree class="two">
            <template #header>
                <h5>Category Info </h5>
            </template>
            <template #body>
                <div class="col-two">
                    <InputComponent v-model="crudStore.getDataById.data.name" :label="'Category Name'" :placeholder="'Category Name'" :required="true" />
                </div>
            </template>
        </CardThree>
        <CardThree class="three">
            <template #header>
                <div class="page-header">
                    <h5>Photo </h5>
                </div>
            </template>
            <template #body>
                <div class="col-one">
                    <InputFile :preview="crudStore.getDataById.data.thumbnail" :file-types="'jpg, png'" @process-image="setProfileImage" />
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
                    :defaultValue="crudStore.getDataById.data.status" 
                    v-model="crudStore.getDataById.data.status" 
                    :label="'Select Status'" 
                    :placeholder="'Status'" 
                    :list="statusList" 
                    :required="true" />
                    <span class="error-msg" v-if="errorDepartmentStatus">{{ errorDepartmentStatus }}</span>
                </div>
            </template>
        </CardThree>
        <div class="seven footer-card display-flex-center">
            <ButtonMedium @click="$router.go(-1)" :label="'Cancel'" :background-color="'red'" :color="'white'" />
            <ButtonMedium @click="update" :label="'Update'" :background-color="'green'" :color="'white'" />
        </div>
        <SuccessModal @off-modal="closeModal" v-if="modal=='success'">
            {{ modalMessage }}
        </SuccessModal>
        <FailModal @off-modal="closeModal" v-if="modal=='failed'">
            {{ modalMessage }}
        </FailModal>
    </div>
</template>

<style scoped>
.create {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    'one one one'
    'two three four'
    'seven seven seven'
    ;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
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
</style>