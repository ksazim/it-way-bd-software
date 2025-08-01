<script setup>
import ThumbnailRound from '../thumbnail/ThumbnailRound.vue';
import { ref, defineProps } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useAuthStore } from '@/store/auth'
import DropdownFour from '@/components/dropdown/DropdownFour.vue'
import ReportModal from '@/components/modal/ReportModal.vue'
import WarningComponent from '@/components/modal/WarningComponent.vue';

const props = defineProps({
    userData: Object,
    postId: String,
    postName: String,
    publishedAt: String,
    user: String,
    userIs: String,
    connectionId: String
})

const isReportModalOpen = ref(false)
function openReportModal() {
    isReportModalOpen.value = true
}

const authStore = useAuthStore()
const crudStore = useCrudStore()

const modal = ref(false)

function deleteModal() {
    modal.value = true;
}

function closeModal() {
    modal.value = false
}

function removePost() {
    crudStore.destroy('delete-post/', props.postId).then((response) => {
        console.log(response)
        if(response.status == 200) {
            crudStore.getAll('posts')
        } 
    }).catch((error) => {
        console.log(error)
    })
}

function timeAgo(date) {
    const now = new Date();
    const pastDate = new Date(date);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
}

function limitString(str) {
    return str?.length > 15 ? str.slice(0, 15) + '...' : str;
}
</script>

<template>
    <div class="flex-between-center">
        <div class="grid-2">
            <div class="post-by flex-start-center-10">
                <ThumbnailRound :path="userData.photo" :height="'15px'" :width="'15px'" />
                <router-link :to="user" class="name">
                    {{ limitString(userData.name) }}
                </router-link>
            </div>
            <div v-if="userData.about!=='null'" class="about">
                {{ userData.about }}
            </div>
            <div class="posted-at">
                {{ timeAgo(publishedAt) }}
            </div>
        </div>
        <div class="contact flex-start-center-10">
            <!-- <font-awesome-icon v-if="userData.id!=authStore.user.id" :icon="['fa', 'user-plus']" /> -->
             <!-- <FriendComponent 
                v-if="userData.id!=authStore.user.id" 
                :data="userData"
                :userIs="userIs"
                :connectionId="connectionId"
                :postId="postId"
             /> -->
            <ToUserChat 
                v-if="userData.id!=authStore.user.id"
                :userId="userData.id"
            />
            <DropdownFour v-if="userData.id!=authStore.user.id" class="menu">
                <template #icon>
                    <div class="dropdown-icon">
                        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
                    </div>
                </template>
                <template #items>
                    <router-link :to="user" class="dropdown-item">
                        <font-awesome-icon :icon="['far', 'user']" />
                        <span>Visit Profile</span>
                    </router-link>
                    <div @click="openReportModal" class="dropdown-item">
                        <font-awesome-icon :icon="['far', 'flag']" />
                        <span>Report This Post</span>
                    </div>
                    <!-- <router-link :to="'/block'+user" class="dropdown-item">
                        <font-awesome-icon :icon="['fa', 'ban']" />
                        <span>Block This User</span>
                    </router-link> -->
                </template>
            </DropdownFour>
            <!-- <font-awesome-icon v-if="userData.id!=authStore.user.id" :icon="['fa', 'envelope']" /> -->
            <router-link class="edit-border-blue" v-if="userData.id==authStore.user.id" :to="'/home/post/edit/'+postId">Edit</router-link>
            <a class="delete-border-orange" v-if="userData.id==authStore.user.id" @click="deleteModal()">Delete Post</a>
        </div>
    </div>

    <ReportModal 
        v-if="postId"
        :isOpen="isReportModalOpen" 
        :dataId="postId"
        :dataName="postName"
        :type="'post'"
        @close="isReportModalOpen = false" 
    />

    <WarningComponent @off-modal="closeModal" v-if="modal==true">
        <div>
            <!-- <p>Are you sure you want to delete "{{ (modalData.title) ? modalData.title : modalData.name }}"</p> -->
            <p>Are you sure you want to delete This Item ?</p>
            <div class="actions">
                <button @click="closeModal" class="btn cancel">Cancel</button>
                <button @click="removePost()" class="btn confirm">Yes Please</button>
            </div>
        </div>
    </WarningComponent>
</template>

<style scoped>
.grid-2 {
    font-size: 14px;
}

.post-by > .name {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
}

.name:hover {
    text-decoration: underline;
    color: blue;
}

.delete-border-orange {
    text-decoration: none;
    color: black;
    outline: none;
    padding: 7px 10px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
    background-color: #ff4040;
    color: white;
}

.delete-border-orange:hover {
    background-color:rgb(240, 41, 41);
}

.edit-border-blue {
    text-decoration: none;
    color: black;
    outline: none;
    padding: 7px 10px;
    background-color: #5b9bd5;
    color: white;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

.edit-border-blue:hover {
    background-color:rgb(62, 133, 199);
}

.dropdown-item {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
    color: #c9c9c9;
    text-align: start;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    display: flex;
    gap: 15px;
    overflow: hidden;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    color: black;
    overflow: hidden;
}

.dropdown-icon {
    width: 35px;
    height: 35px;
    border-radius: 50% 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dropdown-icon {
}

.dropdown-icon:hover {
    background-color: #eee;
}

.actions {
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.actions > button {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
}

.actions > button:hover {
    opacity: 1;
}

.cancel {
  background-color: red;
  color: white;
  padding: 10px 20px;
  opacity: 0.8;
}

.confirm {
  background-color: green;
  color: white;
  padding: 10px 20px;
  opacity: 0.8;
}


@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    /* .flex-between-center {
        display: grid;
        gap: 10px; 
    } */

    /* .flex-between-center > * {
        justify-self: center;
    } */
}
</style>

