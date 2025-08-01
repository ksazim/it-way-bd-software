<script setup>
import Table from'@/components/table/ComponentOne.vue'
import Card from'@/components/card/ComponentOne.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const baseApi = process.env.VUE_APP_BASE_API 
const list = ref([])
const columns = ['Id', 'Book Name', 'Writer', 'Publication', 'Cover Design', 'Image', 'Price']

function refresh() {
    axios.get(baseApi+'book/list').then((response) => {
       list.value = response.data.data
    })
}

onMounted(async () => {
    await axios.get(baseApi+'book/list').then((response) => {
       list.value = response.data.data
    })
})
</script>

<template>
    <div class="">
        <Card class="page-title">
            <h3>Book List</h3>
            <router-link to="/book/add" class="add-btn">Add</router-link>
        </Card>

        <Card class="filter">
            <input class="primary-input" type="text" placeholder="Name">
            <input class="primary-input" type="text" placeholder="Book">
            <button>Search</button>
        </Card>

        <Card>
            <Table :list="list" :columns="columns" :delete-api="'book/delete/'" @delete="refresh" />
        </Card>
        
    </div>
</template>

<style scoped>
.add-btn {
    background-color: #4a944a;
    color: white;
    padding: 7px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 13px;
}

.add-btn:hover {
    background-color: #448544;
}

.filter { 
    display: flex;
    justify-content: center;
    gap: 20px;
}

.filter > button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #fe0000;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
} 

.filter > button:hover {
    background-color: #e00606;
} 
</style>