<script setup>
import Card from'@/components/card/ComponentOne.vue'
import { ref } from 'vue'
import axios from 'axios'

const full_name = ref('')
const about = ref('')
const photo = ref()
const success = ref('')
const failed = ref('')
const baseApi = process.env.VUE_APP_BASE_API 

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
    formData.append('full_name', full_name.value)
    formData.append('photo', photo.value)
    formData.append('about', about.value)
    
    axios.post(baseApi+'writer/create', formData, config).then((response) => {
        success.value = response.data.message
    }).catch((errors) => {
        failed.value = errors
    })
}
</script>

<template>
    <Card class="page-title">
        <h3>Add a Book</h3>
    </Card>   
    
    <Card class="grid">
        <P style="color: green" v-if="success">{{ success }}</P>
        <P style="color: red" v-if="failed">{{ failed }}</P>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">লেখকের নাম <span class="text-red">*</span></label>
                <input v-model="full_name" type="text" placeholder="লেখকের নাম" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">লেখক পরিচিতি <span class="text-red">*</span></label>
                <input v-model="about" type="text" placeholder="লেখক পরিচিতি" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">লেখকের ছবি <span class="text-red">*</span></label>
                <input type="file" @change="upload" class="primary-input">
            </div>
        </div>
    </Card>
    
    <Card class="flex-end">
        <button class="negative-btn" @click="$router.go(-1)">Back</button>
        <button class="positive-btn" @click="submit">Submit</button>
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

@media (max-width: 480px) {
    .form-col-2 {
        display: grid;
        grid-template-columns: 1fr;
    }

    .form-col-2 > * {
        width: 100%;
    }

    .form-col-2 > * > * {
        width: 190px;
    }

    .form-col-2 > * > select {
        width: 230px;
    }
}
</style>