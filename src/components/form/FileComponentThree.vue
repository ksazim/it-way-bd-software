<script setup>
import { ref, defineEmits } from 'vue'
import { useSystemStore } from '@/store/system';

const systemStore = useSystemStore()
const fileName = ref()
const emit = defineEmits(['processImage'])

function onFileChange(e) {
    const file = e.target.files[0];
    fileName.value = file.name
    systemStore.fileUploadUrl = URL.createObjectURL(file);
    emit('processImage', file)
}

function removeFile() {
    systemStore.fileUploadUrl = null
}
</script>

<template>
    <div class="file-uploader-wrapper">
        <div class="file-container">
            <div>
                <div v-if="!systemStore.fileUploadUrl" class="file-uploader" @click="$refs.file.click()">
                    <input ref="file" type="file" @change="onFileChange" enctype="multipart/form-data">
                    <div class="icon">
                        <img src="@/assets/fileUploader/cloud.png" alt="" srcset="">
                    </div>
                </div>
                <div class="attachment" v-else>
                    {{ fileName }}
                    <font-awesome-icon @click="removeFile()" class="rmv-btn red" :icon="['fa', 'remove']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.file-uploader-wrapper {
    width: 80px;
    height: 10vh;
    box-sizing: border-box;
    float: left;
    overflow: hidden;
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
    background-color: #e7e7e7;
}

.file-uploader {
    height: 10vh;
    padding: 10px;
    color: red;
    font-weight: bold;
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

.attachment {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box; 
    text-align: center;
    color: #ff2727;
    font-weight: bold;
    font-size: 13px;
    position: relative;
}

.rmv-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
}

.rmv-btn:hover {
    background-color: red;
    color: white;
}
</style>