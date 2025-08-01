<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useCrudStore } from '@/store/crud'
import { useAuthStore } from '@/store/auth'
// import axios from "axios";
// import { Bar } from 'vue-chartjs'
// import { Pie } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'
// import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// ChartJS.register(ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// import { useSystemStore } from '@/store/system'

const crudStore = useCrudStore()
const authStore = useAuthStore()
// Table Section 

// const chartData = {
//     labels: [ 'January', 'February', 'March' ],
//     datasets: [ { data: [40, 20, 12] } ]
// }

// const chartOptions = {
//     responsive: true
// }

// const data = {
//   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
//   datasets: [
//     {
//       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
//       data: [40, 20, 80, 10]
//     }
//   ]
// }

// const options = {
//   responsive: true,
//   maintainAspectRatio: false
// }

// const loading = ref(true);
// const catchError = ref()

// const baseApi = process.env.VUE_APP_BASE_API_URL;
// const contacts = ref([])
// const projects = ref([])

onMounted(async () => {

    // try {
    //     contacts.value = (await axios.get(baseApi+'contacts/3')).data.list
    //     projects.value = (await axios.get(baseApi+'projects/3')).data.list
    // } catch (error) {
    //     catchError.value = error
    // } finally {
    //     loading.value = false; // Set loading to false once data is fetched
    // }

    // // Intersection Observer for fade-in effect
    // const observer = new IntersectionObserver(
    //     (entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //         entry.target.classList.add('fade-in');
    //         observer.unobserve(entry.target); // Remove observer once visible
    //         }
    //     });
    //     },
    //     { threshold: 0.1 }
    // );

    // document.querySelectorAll('.fade-section').forEach((section) => {
    //     observer.observe(section);
    // });
})

// function limitString(str, limit) {
//   return str?.length > limit ? str.slice(0, limit) + '...' : str;
// }

onUnmounted(() => {
    crudStore.getAllData = []
})
</script>

<template>
    <!-- <section v-if="loading" class="loader-container">
        <div class="loader"></div> 
    </section> -->

    <div v-if="authStore.user" class="component dashboard-topbar">
        <div class="section-info text-center light-blue">
            <h3 class="dancing-script">Welcome Back {{ authStore.user.name }} !</h3>
        </div>
    </div>

    <!-- <section class="grid-2 m-20 fade-section">
        <div class="component-no-m">
            <div class="flex-justify-space-between mb-10">
                <div>
                    <h3>Messages </h3>
                    <small>(Showing last 3 Messages)</small>
                </div>
                <div class="action-btns">
                    <router-link to="/dashboard/contacts">See All</router-link>
                </div>
            </div>

            <div class="faq" v-for="(contact, index) in contacts" :key="index">
                <div v-if="contact" class="faq-content">
                    <div>
                        <h4>User: {{ limitString(contact.name, 45) }}</h4>
                        <small>Message: {{ limitString(contact.message, 45) }}</small>
                    </div>
                </div>
                <div class="action-btns">
                    <router-link :to="'/dashboard/contact/'+contact.id">Read</router-link>
                </div>
            </div>
        </div>

        <div class="component-no-m">
            <div class="flex-justify-space-between mb-10">
                <div>
                    <h3>Projects </h3>
                    <small>(Showing last 3 Projects added)</small>
                </div>
                <div class="action-btns">
                    <router-link to="/dashboard/properties">See All</router-link>
                </div>
            </div>

            <div class="faq" v-for="(project, index) in projects" :key="index">
                <div v-if="project" class="faq-content">
                    <div>
                        <h4>Project Name: {{ limitString(project.name, 45) }}</h4>
                        <small>Location: {{ limitString(project.location, 45) }}</small>
                    </div>
                </div>
                <div class="action-btns">
                    <router-link :to="'/dashboard/project/'+project.id">See</router-link>
                </div>
            </div>
        </div>
    </section> -->

    <!-- <div class="component grid-2 gap-20">
        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>

        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>

    <div class="component grid-2 gap-20">
        <div class="component">
            <Pie :data="data" :options="options" />
        </div>

        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div> 

    <div class="component grid-2 gap-20">
        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>

        <div class="component">
            <Pie :data="data" :options="options" />
        </div>

        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>

    <div class="component grid-2 gap-20">
        <div class="component">
            <Pie :data="data" :options="options" />
        </div>

        <div class="component">
            <Pie :data="data" :options="options" />
        </div>

        <div class="component">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
   </div> -->
    
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
</style>