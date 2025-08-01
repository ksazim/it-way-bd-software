<script setup>
import Card from'@/components/card/ComponentOne.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const writerList = ref([])
const baseApi = process.env.VUE_APP_BASE_API 

const book_name     = ref('')
const writer_id     = ref(null)
const publication   = ref('')
const cover_design  = ref('')
const decoration  = ref('')
const description = ref('')
const genre    = ref('')
const quality  = ref('')
const length   = ref('')
const language = ref('')
const edition  = ref('')
const published_country   = ref('')
const online_distribution = ref('')
const regular_price = ref()
const offer_price = ref()

const photo = ref()
const ebook = ref()

const success = ref('')
const failed = ref('')

function bookPhoto(file) {
    photo.value =  file.target.files[0]
}

function eBook(file) {
    ebook.value =  file.target.files[0]
}

function submit() {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    const formData = new FormData()

    formData.append('book_name', book_name.value)
    formData.append('writer_id', writer_id.value)
    formData.append('publication', publication.value)
    formData.append('cover_design', cover_design.value)
    formData.append('decoration', decoration.value)
    formData.append('description', description.value)
    formData.append('genre', genre.value)
    formData.append('quality', quality.value)
    formData.append('length', length.value)
    formData.append('language', language.value)
    formData.append('edition', edition.value)
    formData.append('published_country', published_country.value)
    formData.append('online_distribution', online_distribution.value)
    formData.append('photo', photo.value)
    formData.append('file', ebook.value)
    formData.append('regular_price', regular_price.value)
    formData.append('offer_price', offer_price.value)
    
    axios.post(baseApi+'book/create', formData, config).then((response) => {
        success.value = response.data.message
    }).catch((errors) => {
        failed.value = errors
    })
}

onMounted(async () => {
    await axios.get(baseApi+'writers').then((response) => {
        writerList.value = response.data.data
    })
})
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
                <label for="">বইয়ের নাম <span class="text-red">*</span></label>
                <input v-model="book_name" type="text" placeholder="বইয়ের নাম" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">লেখক <span class="text-red">*</span></label>
                <select v-model="writer_id" name="" id="" class="primary-input">
                    <option value="null">লেখক নির্বাচন করুন </option>
                    <option v-for="writer in writerList" :value="writer.id" :key="writer.id">{{ writer.full_name }}</option>
                </select>
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">প্রকাশনায়</label>
                <input v-model="publication" type="text" placeholder="প্রকাশনায়" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">প্রচ্ছদ</label>
                <input v-model="cover_design" type="text" placeholder="প্রচ্ছদ" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">মুদ্রণ মূল্য <span class="text-red">*</span></label>
                <input v-model="regular_price" type="text" placeholder="মুদ্রণ মূল্য" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">অফার মূল্য <span class="text-red">*</span></label>
                <input v-model="offer_price" type="text" placeholder="অফার মূল্য" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">অলংকরণ</label>
                <input v-model="decoration" type="text" placeholder="অলংকরণ" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">কোয়ালিটি</label>
                <input v-model="quality" type="text" placeholder="কোয়ালিটি" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">ক্যাটাগরি</label>
                <input v-model="genre" type="text" placeholder="ক্যাটাগরি" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">ভাষা</label>
                <input v-model="language" type="text" placeholder="ভাষা" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">পৃষ্ঠা </label>
                <input v-model="length" type="text" placeholder="পৃষ্ঠা " class="primary-input">
            </div>
            <div class="form-col">
                <label for="">সংস্করণ</label>
                <input v-model="edition" type="text" placeholder="সংস্করণ" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">Published Country</label>
                <input v-model="published_country" type="text" placeholder="Published Country" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">অনলাইন ডিস্ট্রিবিউশন</label>
                <input v-model="online_distribution" type="text" placeholder="অনলাইন ডিস্ট্রিবিউশন" class="primary-input">
            </div>
        </div>
        <div class="form-col-2">
            <div class="form-col">
                <label for="">ছবি</label>
                <input type="file" @change="bookPhoto" class="primary-input">
            </div>
            <div class="form-col">
                <label for="">ই-বুক</label>
                <input type="file" @change="eBook" class="primary-input">
            </div>
        </div>
        <div class="form-col-1">
            <div class="form-col">
                <label for="">Summery</label>
                <textarea v-model="description" name="" id="" class="primary-input"></textarea>
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

@media (max-width: 768px) {
    
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