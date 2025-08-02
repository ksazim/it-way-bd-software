<script setup>
import SuccessModal from '@/components/modal/notification/SuccessComponent'
import FailModal from '@/components/modal/notification/FailComponent'
import Dropdown from '@/components/dropdown/DropdownFour'
import CardTwo from '@/components/card/ComponentTwo'
import CardThree from '@/components/card/ComponentThree'
import { onMounted, ref, computed } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useSystemStore } from '@/store/system'
// import { useRouter } from 'vue-router'
import Textarea from '@/components/form/TextareaComponent'
import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

const crudStore = useCrudStore()
// const router = useRouter()
const systemStore = useSystemStore()

const salesDate = ref('')
const customerId = ref(null)
const note = ref('')

const responseMsg = ref('')

// Error Message Handling
const errorCustomerId = ref('')
const errorSaleDate = ref('')

const discount = ref()

function create() {
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    const payload = {
        customer_id: customerId.value,
        sale_date: salesDate.value,
        discount: discount.value,
        total_amount: finalAmount.value,
        note: note.value,
        products: systemStore.selectedItems.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price,
            sub_total: getSubTotal(item)
        }))
    }

    crudStore.newData('create-sales', payload, config).then((response) => {
        if(response.data.status == 200) {
            clear()
            modal.value         = 'success'
            responseMsg.value   = response.data.message
            setTimeout(() => {
                // router.push('/dashboard/sales')
            }, 1000);
        } else if(response.data.status == 400) {
            
            errorCustomerId.value = (response.data.errors.customer_id) ? response.data.errors.customer_id[0] : ''
            errorSaleDate.value = (response.data.errors.sale_date) ? response.data.errors.sale_date[0] : ''
            responseMsg.value = 'Please fill the required fields'
            modal.value = 'failed'
        } else {
            responseMsg.value = 'Internal Server Error'
            modal.value = 'failed'
        }
    })
}

function clear() {
    systemStore.selectedItems = []
    salesDate.value = ''
    customerId.value = ''
    note.value = ''
    errorCustomerId.value = ''
    errorSaleDate.value = ''
}

const modal = ref()

function closeModal() {
    modal.value = ''
}

function getSelectedItem(val) {
    systemStore.selectedItems.push({
        id: val.id,
        name: val.value ?? val.name,
        price: val.price ?? 0,
        quantity: 1
    })
    const ids = systemStore.selectedItems.map(item => item.id)
    systemStore.getProductList(ids)
}

function removeItem(index) {
  systemStore.selectedItems.splice(index, 1)
  systemStore.getProductList(systemStore.selectedItems)
}

function getSubTotal(item) {
  return (Number(item.price) || 0) * (Number(item.quantity) || 0)
}

const totalAmount = computed(() =>
  systemStore.selectedItems.reduce((sum, item) => sum + getSubTotal(item), 0)
)

const finalAmount = computed(() => {
  return Math.max(totalAmount.value - (Number(discount.value) || 0), 0)
})

onMounted(() => {
    systemStore.getCustomerList()
    systemStore.getProductList(systemStore.selectedItems)
})
</script>

<template>
    <div class="create">
        <CardTwo class="one page-title">
            <div class="page-header">
                <h3>Open new Sales Record</h3>
                <p><small>Fields with (*) marks are required.</small></p>
            </div>
        </CardTwo>
        <CardThree class="two">
            <template #header>
                <h5>Sales Info </h5>
            </template>
            <template #body>
                <div class="one">
                    <SelectComponent 
                    :defaultValue="customerId" 
                    v-model="customerId" 
                    :label="'Customer'" 
                    :placeholder="'Select Customer'" 
                    :list="systemStore.customers" 
                    :required="true" />
                    <span class="danger" v-if="errorCustomerId">{{ errorCustomerId }}</span>
                </div>
                <div>
                    <InputComponent v-model="salesDate" :type="'date'" :label="'Sales Date'" :required="true" />
                    <span class="danger" v-if="errorSaleDate">{{ errorSaleDate }}</span>
                </div>
                
                <div>
                    <Textarea v-model="note" :label="'Remark'" :placeholder="''" />
                </div>
            </template>
        </CardThree>
        <CardThree class="three">
            <template #header>
                <h5>Products Info</h5>
                <Dropdown :items="systemStore.products" @selected-item="getSelectedItem">
                    <template #icon><span class="add">Add a Product <font-awesome-icon :icon="['fas', 'plus']" /></span></template>
                </Dropdown>
            </template>
            <template #body>
                <table v-if="systemStore.selectedItems != ''">
                    <thead>
                        <th>#</th>
                        <th>Product </th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub Total</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in systemStore.selectedItems" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td><input type="number" v-model.number="item.price" /></td>
                            <td><input type="number" v-model.number="item.quantity" min="1" /></td>
                            <td>{{ getSubTotal(item).toFixed(2) }}</td>
                            <td><span class="pointer" @click="removeItem(index)">❌</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{{ totalAmount.toFixed(2) }} BDT</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Discount</td>
                            <td><input type="number" v-model.number="discount" min="0" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Final Amount</td>
                            <td>{{ finalAmount.toFixed(2) }} BDT</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table v-else>
                    <tr>
                        Please a select product. 
                    </tr>
                </table>
                
            </template>
        </CardThree>
        <div class="four">

        </div>
        <div class="seven footer-card display-flex-center">
            <ButtonMedium @click="$router.go(-1)" :label="'Back'" :background-color="'#1f1fd9'" :color="'white'" />
            <ButtonMedium @click="create" :label="'Create'" :background-color="'green'" :color="'white'" />
            <!-- <button class="cancel-btn" @click="$router.go(-1)">Cancel</button>
            <button class="create-btn" @click="create">Apply Leave</button> -->
        </div>
        <SuccessModal @off-modal="closeModal" v-if="modal=='success'">
            {{ responseMsg }}
        </SuccessModal>
        <FailModal @off-modal="closeModal" v-if="modal=='failed'">
            {{ responseMsg }}
        </FailModal>
    </div>
</template>

<style scoped>
.create {
    margin: 10px;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-areas:
    'one one'
    'two three'
    'seven seven'
    ;
    gap: 10px;
    background-color: whitesmoke;
}

.one {
    grid-area: one;
}

.page-title {
    display: flex;
    justify-content: space-between;
}

.two {
    grid-area: two;
}

.three {
    grid-area: three;
}

.four {
    grid-area: four;
}

.five {
    grid-area: five;
}
.seven {
    grid-area: seven;
    display: flex;
    gap: 10px;
    justify-content: end;
}

.nine {
    grid-area: nine;
}

.page-header {
    display: grid;
    gap: 5px;
}

.page-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.col-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.col-one {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.modal-btn {
    font-size: 13px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.modal-btn:hover {
    color: gray;
}

.form-input {
    display: grid;
    gap: 10px;
}

.form-input > label {
    font-size: 13px;
}

.flex-between {
    display: flex;
    justify-content: space-between;
}

.add {
    cursor: pointer;
    border: 1px solid rgb(206, 206, 206);
    padding: 10px 20px;
    border-radius: 5px;
}

.pointer {
    cursor: pointer;
}

table input {
    width: 100px;
    padding: 5px 10px;
}

table {
  width: 100%; /* Make the table take full width */
  border-collapse: collapse; /* Collapse borders for a cleaner look */
  margin-bottom: 20px; /* Add some space below the table */
}

/* Table Header Styles */
th {
  background-color: #f2f2f2; /* Light grey background for headers */
  color: #333; /* Darker text color for headers */
  padding: 10px; /* Add padding inside header cells */
  text-align: left; /* Align header text to the left */
  border: 1px solid #ddd; /* Light border around header cells */
}

/* Table Data Cell Styles */
td {
  padding: 8px; /* Add padding inside data cells */
  border: 1px solid #ddd; /* Light border around data cells */
}

/* Alternating Row Colors (Optional) */
tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Lighter background for even rows */
}

/* Hover Effect (Optional) */
tbody tr:hover {
  background-color: #e0e0e0; /* Slightly darker background on hover */
}

.summary {
    width: 100%;
    padding: 20px 0;
}
</style>