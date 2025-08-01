<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import VideoPlayerTwo from '@/components/video/VideoPlayerTwo.vue';

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

const fileType = ref()

function onFileChange(e) {
    const file = e.target.files[0]
    if(file.type.startsWith("image/")) {
        fileType.value = 'image'
    } else if(file.type.startsWith("video/")) {
        fileType.value = 'video'
    }
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
            <label>{{ label }} </label>
            <img @click="removeFile" class="remove-btn" src="@/assets/fileUploader/refresh.png" alt="" srcset="">
        </div>
        <div class="file-container">
            <div v-if="preview && !previewRemoved" class="preview">
                <img v-if="preview.type=='photo'" :src="baseServerUrl+preview.path" />
                <VideoPlayerTwo v-if="preview.type=='video'" :videoSource="baseServerUrl+preview.path" />
            </div>
            <div v-else>
                <div v-if="!url" class="file-uploader" @click="$refs.file.click()">
                    <input ref="file" type="file" @change="onFileChange" accept="pdf,jpg,jpeg,mp4" enctype="multipart/form-data">
                    <div class="icon">
                        <!-- <img v-if="photoUrl" :src="photoUrl" alt="" srcset=""> -->
                        <img src="@/assets/fileUploader/cloud.png" alt="" srcset="">
                    </div>
                </div>
                <div v-if="url" class="preview">
                    <img v-if="fileType=='image'" :src="url" />
                    <VideoPlayerTwo v-if="fileType=='video'" :videoSource="url" />
                    <!-- <font-awesome-icon style="color: #ff4242; cursor: pointer; margin: 5px;" @click="removeFile" :icon="['fas', 'trash']" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.file-uploader-wrapper {
    width: 90%;
    height: 200px;
    border: 1px solid #dbdbdb;
    padding: 20px;
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
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon > img {
    height: 70px;
}

.preview {
    width: 100%;
}


.preview > img {
    height: 180px;
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