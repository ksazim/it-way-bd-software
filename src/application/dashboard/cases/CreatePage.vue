<script setup>
import SuccessModal from '@/components/modal/notification/SuccessComponent'
import FailModal from '@/components/modal/notification/FailComponent'
import CardTwo from '@/components/card/ComponentTwo'
import CardThree from '@/components/card/ComponentThree'
// import InputFile from '@/components/form/FileComponent'
import Textarea from '@/components/form/TextareaComponent'
import Switcher from '@/components/form/SwitcherComponent'
import { onMounted, ref } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useRouter } from 'vue-router'

import InputComponent from '@/components/form/InputComponent'
import SelectComponent from '@/components/form/SelectComponent.vue'
import ButtonMedium from '@/components/button/ButtonMedium.vue'

const crudStore = useCrudStore()
const router = useRouter()


const caseNo = ref('')
const filingDate = ref('')
const caseType = ref('')
const caseTitle = ref('')
const complaintDescription = ref('')
const offence = ref('')
const status = ref(null)
const privacy = ref('draft')

const complainantName = ref('')
const complainantFather = ref('')
const complainantPhone = ref('')
const complainantNid = ref('')
const complainantNidFile = ref('')
const complainantGender = ref(null)
const complainantAddress = ref('')

const accusedName = ref('')
const accusedFather = ref('')
const accusedPhone = ref('')
const accusedGender = ref(null)
const accusedAddress = ref('')

const court = ref(null)
const policeStation = ref(null)

const paymentMethod = ref('')
const paymentDocument = ref('')

const responseMsg = ref('')

// Error Message Handling

const caseNoError = ref('')
const filingDateError = ref('')
const caseTypeError = ref('')
const caseTitleError = ref('')
const complaintDescriptionError = ref('')

const complainantNameError = ref('')
const complainantPhoneError = ref('')
const complainantNidError = ref('')
const complainantNidFileError = ref('')

const accusedNameError = ref('')

const courtError = ref(null)
const policeStationError = ref(null)

const statusError = ref(null)
const privacyError = ref('draft')


const genderList = [
    {
        id: 'male',
        value: 'Male'
    },
    {
        id: 'female',
        value: 'Female'
    }
]

const courtList = [
    {
        id: 'dhaka-judge-court',
        value: 'Dhaka Jufge Court'
    }
]

const policeStationList = [
    {
        id: 'Uttara-west-police-station',
        value: 'Uttara West Police Station'
    }
]

const privacyOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'Published', value: 'public' },
]

const statusList = [
    {
        id: 'on-going',
        value: 'On Going'
    },
    {
        id: 'completed',
        value: 'Completed'
    },
    {
        id: 'dismissed',
        value: 'Dismissed'
    }
]

function setNidFile(val) {
    complainantNidFile.value = val.target.files[0]
}

function setPaymentFile(val) {
    paymentDocument.value = val.target.files[0]
}

const errorCategoryName  = ref()

function create() {
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    const formData = new FormData()


    formData.append('case_no', caseNo.value)
    formData.append('case_type', caseType.value)
    formData.append('court', court.value)
    formData.append('police_station', policeStation.value)
    formData.append('filing_date', filingDate.value)
    formData.append('case_title', caseTitle.value)
    formData.append('complaint_description', complaintDescription.value)
    formData.append('offence', offence.value)
    formData.append('complainant_name', complainantName.value)
    formData.append('complainant_father', complainantFather.value)
    formData.append('complainant_phone', complainantPhone.value)
    formData.append('complainant_nid', complainantNid.value)
    formData.append('complainant_nid_file', (complainantNidFile.value !== undefined && complainantNidFile.value !== null) ? complainantNidFile.value : '')
    formData.append('complainant_gender', complainantGender.value)
    formData.append('complainant_address', complainantAddress.value)
    formData.append('accused_name', accusedName.value)
    formData.append('accused_father', accusedFather.value)
    formData.append('accused_address', accusedAddress.value)
    formData.append('accused_phone', accusedPhone.value)
    formData.append('accused_gender', accusedGender.value)
    formData.append('payment_method', paymentMethod.value)
    formData.append('status', status.value)
    formData.append('privacy', privacy.value)
    formData.append('payment_file', (paymentDocument.value !== undefined && paymentDocument.value !== null) ? paymentDocument.value : '')

    crudStore.newData('create-case', formData, config).then((response) => {
        if(response.data.status == 200) {
            clear()
            modal.value         = 'success'
            responseMsg.value   = response.data.message
            setTimeout(() => {
                router.push('/case-list')
            }, 1000);
        } else if(response.data.status == 400) {
            errorCategoryName.value  = (response.data.errors.application_start_date) ? response.data.errors.application_date[0] : null
            
            caseNoError.value = (response.data.errors.case_no) ? response.data.errors.case_no[0] : null
            filingDateError.value = (response.data.errors.filing_date) ? response.data.errors.filing_date[0] : null
            caseTypeError.value = (response.data.errors.case_type) ? response.data.errors.case_type[0] : null
            caseTitleError.value = (response.data.errors.case_title) ? response.data.errors.case_title[0] : null
            complaintDescriptionError.value = (response.data.errors.complaint_description) ? response.data.errors.complaint_description[0] : null
            complainantNameError.value = (response.data.errors.complainant_name) ? response.data.errors.complainant_name[0] : null
            
            complainantPhoneError.value = (response.data.errors.complainant_phone) ? response.data.errors.complainant_phone[0] : null
            complainantNidError.value = (response.data.errors.complainant_nid) ? response.data.errors.complainant_nid[0] : null
            complainantNidFileError.value = (response.data.errors.complainant_nid_file) ? response.data.errors.complainant_nid_file[0] : null
            
            accusedNameError.value = (response.data.errors.accused_name) ? response.data.errors.accused_name[0] : null
            
            courtError.value = (response.data.errors.court) ? response.data.errors.court[0] : null
            policeStationError.value = (response.data.errors.police_station) ? response.data.errors.police_station[0] : null
            
            statusError.value = (response.data.errors.status) ? response.data.errors.status[0] : null
            privacyError.value = (response.data.errors.privacy) ? response.data.errors.privacy[0] : null
            
            responseMsg.value = 'Please fill the required fields'
            modal.value = 'failed'
        } else {
            responseMsg.value = 'Internal Server Error'
            modal.value = 'failed'
        }
    })
}

function clear() {
    caseNo.value = '' 
    filingDate.value = '' 
    caseType.value = '' 
    caseTitle.value = '' 
    complaintDescription.value = '' 
    offence.value = '' 
    complainantName.value = '' 
    complainantFather.value = '' 
    complainantPhone.value = '' 
    complainantNid.value = '' 
    complainantNidFile.value = '' 
    complainantGender.value = ''
    complainantAddress.value = '' 
    accusedName.value = '' 
    accusedFather.value = '' 
    accusedPhone.value = '' 
    accusedGender.value = ''
    accusedAddress.value = '' 
    court.value = ''
    policeStation.value = ''
    paymentMethod.value = '' 
    paymentDocument.value = '' 
    responseMsg.value = '' 
    caseNoError.value = '' 
    filingDateError.value = '' 
    caseTypeError.value = '' 
    caseTitleError.value = '' 
    complaintDescriptionError.value = '' 
    complainantNameError.value = '' 
    complainantPhoneError.value = '' 
    complainantNidError.value = '' 
    complainantNidFileError.value = '' 
    accusedNameError.value = '' 
    courtError.value = ''
    policeStationError.value = ''
    statusError.value = ''
    privacyError.value = ''
}

const modal = ref()

function closeModal() {
    modal.value = ''
}

onMounted(() => {
    // systemStore.getCompanyList('companies')
    // crudStore.getAll('leave/types')
})
</script>

<template>
    <div class="create">
        <CardTwo class="one page-title">
            <div class="page-header">
                <h3>Open new case file</h3>
                <p><small>Fields with (*) marks are required.</small></p>
            </div>
            <Switcher v-model="privacy" :options="privacyOptions" />
        </CardTwo>
        <CardThree class="two">
            <template #header>
                <h5>Case Info</h5>
            </template>
            <template #body>
                <div class="col-two">
                    <div>
                        <InputComponent v-model="caseNo" :label="'Case No'" :placeholder="''" :required="true" />
                        <span class="danger" v-if="caseNoError">{{ caseNoError }}</span>
                    </div>
                    <div>
                        <InputComponent v-model="filingDate" :type="'date'" :label="'Filing Date'" :required="true" />
                        <span class="danger" v-if="filingDateError">{{ filingDateError }}</span>
                    </div>
                </div>
                <div>
                    <InputComponent v-model="caseType" :label="'Case Type'" :placeholder="'e.g. Criminal, civil'" :required="true" />
                    <span class="danger" v-if="caseTypeError">{{ caseTypeError }}</span>
                </div>
                <div>
                    <InputComponent v-model="caseTitle" :label="'Case Title'" :placeholder="''" :required="true" />
                    <span class="danger" v-if="caseTitleError">{{ caseTitleError }}</span>
                </div>
                <div>
                    <Textarea v-model="complaintDescription" :label="'Complaint Description'" :placeholder="''" :required="true" />
                    <span class="danger" v-if="complaintDescriptionError">{{ complaintDescriptionError }}</span>
                </div>
                <div>
                    <InputComponent v-model="offence" :label="'Offence'" :placeholder="'Write down the offense in short'" />
                </div>
                <div class="one">
                    <SelectComponent 
                    :defaultValue="status" 
                    v-model="status" 
                    :label="'Status'" 
                    :placeholder="'Select Status'" 
                    :list="statusList" 
                    :required="true" />
                    <span class="danger" v-if="statusError">{{ statusError }}</span>
                </div>
            </template>
        </CardThree>
        <CardThree class="three">
            <template #header>
                <h5>Complainant Info </h5>
            </template>
            <template #body>
                <div>
                    <InputComponent v-model="complainantName" :label="'Complaint Name'" :placeholder="'Complaint Name'" :required="true" />
                    <span class="danger" v-if="complainantNameError">{{ complainantNameError }}</span>
                </div>
                <div>
                    <InputComponent v-model="complainantFather" :label="'Father'" :placeholder="'Md. Karim Molla'" />
                </div>
                <div>
                    <InputComponent v-model="complainantPhone" :label="'Complaint Phone'" :placeholder="'Complaint Phone Number'" :required="true" />
                    <span class="danger" v-if="caseNoError">{{ caseNoError }}</span>
                </div>
                <div>
                    <SelectComponent 
                    :defaultValue="complainantGender" 
                    v-model="complainantGender" 
                    :label="'Select Gender'" 
                    :placeholder="'Gender'" 
                    :list="genderList" 
                    />
                </div>
                <div>
                    <InputComponent v-model="complainantAddress" :label="'Address'" :placeholder="'Permanent Address'" :required="true" />
                    <span class="danger" v-if="complainantAddressError">{{ complainantAddressError }}</span>
                </div>
                <div>
                    <InputComponent v-model="complainantNid" :label="'NID'" :placeholder="'e.g. 01354613'" :required="true" />
                    <span class="danger" v-if="complainantNidError">{{ complainantNidError }}</span>
                </div>
                <div>
                    <InputComponent v-model="complainantNidFile" :type="'file'" :label="'NID Copy'" :required="true" />
                    <span class="danger" v-if="complainantNidFileError">{{ complainantNidFileError }}</span>
                </div>
            </template>
        </CardThree>
        <CardThree class="four">
            <template #header>
                <h5>Accused Info </h5>
            </template>
            <template #body>
                <div>
                    <InputComponent v-model="accusedName" :label="'Accused Name'" :placeholder="'Accused Name'" :required="true" />
                    <span class="danger" v-if="accusedNameError">{{ accusedNameError }}</span>
                </div>
                <div>
                    <InputComponent v-model="accusedFather" :label="'Father'" :placeholder="'Md. Karim Molla'" />
                </div>
                <div>
                    <SelectComponent 
                    :defaultValue="accusedGender" 
                    v-model="accusedGender" 
                    :label="'Select Gender'" 
                    :placeholder="'Gender'" 
                    :list="genderList" 
                    />
                </div>
                <div>
                    <InputComponent v-model="accusedPhone" :label="'Accused Phone'" :placeholder="'Accused Phone Number'" />
                    
                </div>
                <div>
                    <InputComponent v-model="accusedAddress" :label="'Address'" :placeholder="'Permanent Address'" />
                </div>
            </template>
        </CardThree>
        <CardThree class="five">
            <template #header>
                <h5>Institution and Payment Info </h5>
            </template>
            <template #body>
                <div>
                    <SelectComponent 
                    :defaultValue="court" 
                    v-model="court" 
                    :label="'Court'" 
                    :placeholder="'Select Court'" 
                    :list="courtList" 
                    :required="true" />
                    <span class="danger" v-if="courtError">{{ courtError }}</span>
                </div>
                <div>
                    <SelectComponent 
                    :defaultValue="policeStation" 
                    v-model="policeStation" 
                    :label="'Police Station'" 
                    :placeholder="'Select Police Station'" 
                    :list="policeStationList" 
                    :required="true" />
                    <span class="danger" v-if="policeStationError">{{ policeStationError }}</span>
                </div>
                <div>
                    <InputComponent @change="setNidFile" v-model="paymentMethod" :label="'Payment Method'" :placeholder="'e.g. Bank Payment, Mobile Payment'" />

                </div>
                <div>
                    <InputComponent @change="setPaymentFile" v-model="paymentDocument" :type="'file'" :label="'Upload payment document'" />
                </div>
            </template>
        </CardThree>
        <!-- <CardThree class="six">
            <template #header>
                <h5>Police Station Info </h5>
            </template>
            <template #body>
                <div class="col-one">
                    <InputComponent v-model="categoryName" :label="'Accused Name'" :placeholder="'Accused Name'" :required="true" />
                    
                </div>
                <div class="col-one">
                    <InputComponent v-model="categoryName" :label="'Father'" :placeholder="'Md. Karim Molla'" :required="true" />
            
                </div>
                <div class="col-one">
                    <SelectComponent 
                    :defaultValue="status" 
                    v-model="status" 
                    :label="'Select Gender'" 
                    :placeholder="'Gender'" 
                    :list="statusList" 
                    :required="true" />
                    <span class="danger" v-if="caseNoError">{{ caseNoError }}</span>
                </div>
                <div class="col-one">
                    <InputComponent v-model="categoryName" :label="'Address'" :placeholder="'Permanent Address'" :required="true" />
                    
                </div>
            </template>
        </CardThree>
        <CardThree class="eight">
            <template #header>
                <div class="page-header">
                    <h5>Files <small>(A copy of NID and fee payment are required)</small></h5>
                </div>
            </template>
            <template #body>
                <p>Audio, Video, Photo, or simply a document</p>
                <div class="col-one">
                    <InputFile :file-types="'jpg, png'" @process-image="setProfileImage" />
                </div>
            </template>
        </CardThree> -->
        <!-- <CardThree class="four">
            <template #header>
                <div class="page-header">
                    <h5>Status <span class="danger">*</span></h5>
                </div>
            </template>
            <template #body>
                <div class="col-one">
                    <SelectComponent 
                    :defaultValue="status" 
                    v-model="status" 
                    :label="'Select Status'" 
                    :placeholder="'Status'" 
                    :list="statusList" 
                    :required="true" />
                    <span class="danger" v-if="caseNoError">{{ caseNoError }}</span>
                </div>
            </template>
        </CardThree> -->
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
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'one one'
    'two three'
    'four five'
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
</style>