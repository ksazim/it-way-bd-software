<script setup>
import Card from'@/components/card/ComponentOne.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const baseApi = process.env.VUE_APP_BASE_API 
const basFilePath = process.env.VUE_APP_BASE_FILE_PATH
const getDataById = ref({})
const photo = ref(null)
const success = ref('')
const failed = ref('')

function upload(file) {
    photo.value =  file.target.files[0]
}

function submit() {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    const formData = new FormData()
    formData.append('full_name', getDataById.value.data.full_name)
    formData.append('photo', (photo.value != null) ? photo.value : getDataById.value.data.photo)
    formData.append('about', getDataById.value.data.about)
    formData.append('_method', 'PUT');
    
    axios.post(baseApi+'writer/edit/'+router.currentRoute.value.params.id, formData, config).then((response) => {
        success.value = response.data.message
        setTimeout(() => {
            success.value = ''
        }, 3000);
        getValue()
    }).catch((errors) => {
        failed.value = errors
    })
}

async function getValue() {
    await axios.get(baseApi+'writer/'+ router.currentRoute.value.params.id).then((response) => {
        getDataById.value = response.data
    }).catch((errors) => {
        console.log(errors)
    })
}

onMounted(() => {
    getValue()
})
</script>

<template>
    <Card class="page-title">
        <h3>Edit Writer </h3>
    </Card>   
    
    <Card v-if="getDataById.data" class="grid">
        <P style="color: green" v-if="success">{{ success }}</P>
        <P style="color: red" v-if="failed">{{ failed }}</P>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">লেখকের নাম  <span class="text-red">*</span></label>
                <input v-model="getDataById.data.full_name" type="text" placeholder="লেখকের নাম" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">লেখক পরিচিতি <span class="text-red">*</span></label>
                <input v-model="getDataById.data.about" type="text" placeholder="লেখক পরিচিতি" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">লেখকের ছবি <span class="text-red">*</span></label>
                <img class="preview" :src="basFilePath+getDataById.data.photo" alt="" height="100" width="70">
                <input type="file" @change="upload" class="primary-input">
            </div>
        </div>
    </Card>
    
    <Card class="flex-end">
        <button class="negative-btn" @click="$router.go(-1)">Back</button>
        <button class="positive-btn" @click="submit">Update</button>
    </Card> 
</template>

<style scoped>
.flex-end {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
}

.form-col {
    display: grid;
    gap: 5px;
}

.form-col-2 {
    display: flex;
    justify-content: space-between;
    gap: 15px;
}

.form-col-2 > * {
    width: 50%;
}

.grid {
    display: grid;
    gap: 10px;
}

.preview {
    border-radius: 10px;
    border: 2px solid green;
}
</style>