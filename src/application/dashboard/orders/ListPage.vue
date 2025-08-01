<script setup>
import Table from'@/components/table/ComponentOne.vue'
import Card from'@/components/card/ComponentOne.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const list = ref([])
const columns = ['Id', 'Customer Info', 'Book', 'Writer', 'Unit Price', 'Quantity', 'Subtotal', 'Total', 'Status']
const baseApi = process.env.VUE_APP_BASE_API 

function refresh() {
    axios.get(baseApi+'order/list').then((response) => {
       list.value = response.data.data
    })
}

onMounted(async () => {
    await axios.get(baseApi+'order/list').then((response) => {
       list.value = response.data.data
    })
})

</script>

<template>
    <div class="">
        <Card class="page-title">
            <h3>Writer List</h3>
            <router-link to="/writer/add" class="add-btn">Add</router-link>
        </Card>

        <Card class="filter">
            <input class="primary-input" type="text" placeholder="Name">
            <input class="primary-input" type="text" placeholder="Book">
            <button>Search</button>
        </Card>

        <Card>
            <Table :list="list" :columns="columns" @delete="refresh" />
        </Card>
        
    </div>
</template>

<style scoped>
.page-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.add-btn {
    background-color: #4a944a;
    color: white;
    padding: 7px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
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
    background-color: #2f3133;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
} 

.filter > button:hover {
    background-color: #252627;
} 

.primary-input {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 15px;
    background-color: #ededed;
}

.primary-input:focus {
    background-color: #e0e0e0;
}
</style>