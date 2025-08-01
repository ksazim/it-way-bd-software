<script setup>
import InputComponent from '@/components/form/InputComponent'
import ButtonMedium from '@/components/button/ButtonMedium.vue'
// import RouterButton from '@/components/button/RouterButton.vue'
import Table from '@/components/table/ComponentThree.vue'
import { onMounted, ref, onUnmounted } from 'vue'
import { usePaginationStore } from '@/store/pagination'

import { useCrudStore } from '@/store/crud'

const crudStore = useCrudStore()
// const authStore = useAuthStore()
const paginationStore = usePaginationStore()

const confirmationMsg = ref('')

const columns = ['#ID', 'Thumbnail', 'Category Name', 'Status']

const actions = [
    {
        edit: true,
        link: '/category/edit/'
    },
    {
        delete: true,
        link: '/category/delete/'
    }
]

const searchName = ref('')

// pagination, filter etc
function paginate(val) {
    if(val.item_no) {
        paginationStore.itemPerPage = val.item_no
        paginationStore.pageNo = val.page_no
    }

    if(searchName.value  == '' || searchName.value  == 'null') {
        searchName.value = null
    }

    loadAfterAction()
}

// Deleting a row

async function axeRow(id) {
    crudStore.destroy('category/delete/', id).then(() => {
        loadAfterAction()
        crudStore.getAll('category/list/10/null')
        confirmationMsg.value = 'Row Deleted Successfully !'
    })
}

async function loadAfterAction() {
    if(searchName.value !== null) {
        paginationStore.pageNo = null
    }

    if(paginationStore.pageNo != null) {
        await crudStore.getAll('category/list/'+paginationStore.itemPerPage+'/'+searchName.value+paginationStore.pageNo)
    } else if(paginationStore.itemPerPage === undefined) {
        await crudStore.getAll('category/list/'+10+'/'+searchName.value)
    } else {
        await crudStore.getAll('category/list/'+paginationStore.itemPerPage+'/'+searchName.value)
    }
}

onMounted(async () => {
    crudStore.getAll('case-list')
})

onUnmounted(() => {
    crudStore.getAllData = []
})
</script>

<template>
    <div class="component dashboard-topbar">
        <div class="section-info text-center light-blue">
            <h3 class="dancing-script">Case List</h3>
            <router-link to="create-case">Open</router-link>
        </div>
    </div>

    <div class="filter">
        <InputComponent v-model="searchName" :placeholder="'Search by ID'" />
        <InputComponent v-model="searchName" :placeholder="'Search Work'" />
        <ButtonMedium @click="paginate" :label="'Search'" :backgroundColor="'green'" :color="'white'" />
    </div>
    <div class="tb-container">
        <Table @remove-row="axeRow" @paginate="paginate" :pagination="crudStore.getAllDataPagination" :confirmationMsg="confirmationMsg" :list="crudStore.getAllData" :columns="columns" :actions="actions" />
    </div>
</template>

<style scoped>
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.gap-20 {
    gap: 20px;
}

.component {
    background-color: white;
    color: black;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    overflow: hidden;
    margin: 20px 20px 0;
    padding: 20px;
}

.component:last-child {
    margin-bottom: 20px;
}

.dashboard-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.options {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.options > * {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    cursor: pointer;
}

.options > *:hover {
    background-color: #e6e6e6;
}

.option-form {
    position: relative;
}

.remove {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 20px;
    color: red;
    border: 1px solid red;
    padding: 10px;
    border-radius: 50% 50%;
    cursor: pointer;
}

.show-panel > * {
    font-size: 20px;
    color: #1d1d1d;
    width: 30px;
    height: 30px;

    border-radius: 50% 50%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    padding: 10px;
}

.show-panel > *:hover {
    background-color: #dbdbdb;
}


.faq {
    padding: 10px 0;
    border-top: 1px solid #dbdbdb;
    display: grid;
    gap: 10px;
} 

.review {
    font-style: italic;
}

.actions {
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.actions > button {
  width: 100%;
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

.action-btns {
    display: flex;
    gap: 5px;
    justify-content: start;
}

.action-btns > a, .action-btns > button {
    height: 30px;
    width: 70px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 13px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
} 

.action-btns > a:hover,
.action-btns > button:hover {
    background-color: #dadada;
}

.light-blue {
    color: #1f9be1;
}

.filter {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #e1e1e1;
    padding: 10px 20px;
    box-sizing: border-box;
    margin: 20px;
}

.tb-container {
    border-radius: 5px;
    background-color: white;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    margin: 20px;
}
</style>