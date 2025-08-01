<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const baseServerUrl = process.env.VUE_APP_BASE_SERVER_URL 
const url = ref()
const previewRemoved = ref(false)
const emit = defineEmits(['processImage'])
defineProps({
    placeholder: String,
    preview: Object,
    label: String,
    fileTypes: String,
    photoUrl: String
})

function onFileChange(e) {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
    emit('processImage', file)
}


function removeFile() {
    url.value = ''
    previewRemoved.value = !previewRemoved.value
}
</script>

<template>
    <div class="file-uploader-wrapper">
        <div class="label-container">
            <label>{{ label }}</label>
            <img @click="removeFile" class="remove-btn" src="@/assets/fileUploader/refresh.png" alt="" srcset="">
        </div>
        <div class="file-container">
            <div v-if="preview && !previewRemoved" class="preview file-uploader">
                <div class="icon">
                    <img :src="baseServerUrl+preview" />
                </div>
            </div>
            <div v-else>
                <div v-if="!url" class="file-uploader" @click="$refs.file.click()">
                    <input ref="file" type="file" @change="onFileChange" accept="pdf,jpg,jpeg" enctype="multipart/form-data">
                    <div class="icon">
                        <img src="@/assets/default/user-1.png" alt="" srcset="">
                    </div>
                </div>
                <div v-if="url" class="file-uploader preview">
                    <div class="icon">
                        <img :src="url" />
                    </div>
                    <!-- <font-awesome-icon style="color: #ff4242; cursor: pointer; margin: 5px;" @click="removeFile" :icon="['fas', 'trash']" /> -->
                </div>
                <div v-if="!url" class="instruction">{{ fileTypes }} files are allowed only. </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.file-uploader-wrapper {
    width: 250px;
    border: 1px solid #dbdbdb;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    float: left;
}

.label-container {
    margin-bottom: 10px !important;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
}

input {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.file-uploader:hover{
    background-color: #eee;
}

.file-uploader {
    padding: 15px;
    border-radius: 5px;
    border: 3px dashed #1c3547;
    color: white;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.icon > img {
    width: 100%;
}

.preview {
    width: 100%;
}


.preview > img {
    width: 100%;
    border-radius: 5px;
}
.instruction {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #ff6c6c;
}

.remove-btn {
    cursor: pointer;
    height: 20px;
    width: 20px;
}

.remove-btn:hover {
    opacity: 0.8;
}

.remove-btn:active {
    transform: rotate(20deg);
}
</style>