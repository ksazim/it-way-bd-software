<script setup>
import ThumbnailRound from '../thumbnail/ThumbnailRound.vue';
import { ref, defineProps } from 'vue';
import { useCrudStore } from '@/store/crud';

const crudStore = useCrudStore()
const comment = ref()

const props = defineProps({
    path: String,
    post_id: String,
    user: Object,
    comment_id: String,
    data: Object
})


// const to = ref([
//     {
//         id: props.user.id,
//         name: props.user.name
//     }
// ])
const response = ref()

async function post() {
    console.log(props.user)
    const data = {
        user_to: (props.user) ? props.user.id : null,
        post_id: props.post_id,
        comment_id: props.comment_id,
        content: comment.value,
        status: 'active'
    }
    
    crudStore.newData('comment', data).then((response) => {
        response.value = response
        comment.value = ''
    })

    await crudStore.getById('post/'+data.post_id)
    
}
</script>

<template>
    <div class="comment-form">
        <ThumbnailRound :path="path" :height="'25px'" :width="'25px'" />
        <div class="content">
            <div class="comment-section">
                <p class="username" v-if="user">{{ user.name }}</p>
                <textarea v-model="comment" name="" id=""></textarea>
            </div>
            <div class="action flex-end-center-10">
                <!-- <button>Cancel</button> -->
                <button @click="post">Comment</button>
            </div>
        </div>
        <span v-if="response">{{ response }}</span>
    </div>
</template>

<style scoped>
.comment-form {
    /* border-top: 1px solid #c1c1c1; */
    padding: 20px 0;
    display: grid;
    grid-template-columns: 0.1fr 1fr;
}

.content {
    display: grid;
    gap: 20px;
}

.comment-section {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    border-bottom: 1px solid black;
}

textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;

    height: auto; /* Let the height adjust automatically */
    overflow-y: hidden; /* Prevent vertical scroll */
    resize: none; /* Remove resize handle */
    white-space: pre-wrap; /* Preserve newlines and wrap text */
    word-wrap: break-word; /* Allow long words to break and wrap */
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.username {
    font-size: 13px;
    /* color: saddlebrown; */
    color: #537fff;
    font-weight: bold;
    padding: 5px;
    /* background-color: aliceblue; */
    /* border: 1px solid gray; */
    border-radius: 5px;
}
</style>