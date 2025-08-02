<script setup>
// import RouterButton from '@/components/button/RouterButton.vue'
import Table from '@/components/table/ComponentThree.vue'
import { onMounted, ref, onUnmounted } from 'vue'
import { usePaginationStore } from '@/store/pagination'

import { useCrudStore } from '@/store/crud'

const crudStore = useCrudStore()
// const authStore = useAuthStore()
const paginationStore = usePaginationStore()

const confirmationMsg = ref('')

const columns = ['#Serial', 'Sale Id', 'Product Description', 'Note', 'Total Amount']

const actions = [
    {
        restore: true,
        link: '/trash/restore/'
    },
    {
        delete: true,
        link: '/trash/delete/'
    }
]

// pagination, filter etc
function paginate(val) {
    if(val.item_no) {
        paginationStore.itemPerPage = val.item_no
        paginationStore.pageNo = val.page_no
    }

    loadAfterAction()
}

// Deleting a row



async function axeRow(id) {
    crudStore.destroy('delete-trash-item/', id).then(() => {
        loadAfterAction()
        crudStore.getAll('trash-list/10')
        confirmationMsg.value = 'Row Deleted Successfully !'
    })
}

async function loadAfterAction() {
    if(paginationStore.pageNo != null) {
        await crudStore.getAll('trash-list/'+paginationStore.itemPerPage+paginationStore.pageNo)
    } else if(paginationStore.itemPerPage === undefined) {
        await crudStore.getAll('trash-list/'+10)
    } else {
        await crudStore.getAll('trash-list/'+paginationStore.itemPerPage)
    }
}

onMounted(async () => {
    crudStore.getAll('trash-list/10')
})

onUnmounted(() => {
    crudStore.getAllData = []
})
</script>

<template>
    <div class="component dashboard-topbar">
        <div class="section-info text-center light-blue">
            <h3 class="dancing-script page-title">Trash List</h3>
        </div>
    </div>
    <div class="tb-container">
        <Table @restore-row="loadAfterAction" @remove-row="axeRow" @paginate="paginate" :pagination="crudStore.getAllDataPagination" :confirmationMsg="confirmationMsg" :list="crudStore.getAllData" :columns="columns" :actions="actions" />
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
    margin: 10px 10px 0;
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

.page-title {
    font-size: 21px;
    color: black;
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

.add-btn {
    font-size: 30px;
    font-weight: bold;
    color: black;

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
    margin: 10px;
}

.tb-container {
    border-radius: 5px;
    background-color: white;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    margin: 10px;
    overflow-x: auto;
}

.refresh {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 22px;
}

.refresh:active {
    transform: rotate(20deg);
}
</style>