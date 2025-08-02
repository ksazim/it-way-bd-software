import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth'

export const useSystemStore = defineStore('system', {
  state: () => ({
    serverPath: process.env.VUE_APP_BASE_SERVER_URL,
    openSidebar: false,
    loggedIn: localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    user: {},
    userProfile: {},
    
    fileUploadUrl: '',
    loading: true,

    modalOn: false,
    showSidebar: true,

    customers: [],
    products: [],

    selectedItems: []
  }),

  getters: {
    
  },

  actions: {
    async getUserProfile() {
      const authStore = useAuthStore()
      axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.token}`
      await axios.get(process.env.VUE_APP_BASE_API_URL+'profile').then((response) => {
        this.userProfile = response.data.data
      }).catch((errors) => {
        if(errors.status == 401) {
          this.userProfile = null
        }
      })
    },

    async getProductList(items) {
      const authStore = useAuthStore()
      axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.token}`
      await axios.post(process.env.VUE_APP_BASE_API_URL+'products', { items: items }).then((response) => {
        this.products = response.data.list
      }).catch((errors) => {
        if(errors.status == 401) {
          this.products = null
        }
      })
    },

    async getCustomerList() {
      const authStore = useAuthStore()
      axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.token}`
      await axios.get(process.env.VUE_APP_BASE_API_URL+'customers').then((response) => {
        this.customers = response.data.list
      }).catch((errors) => {
        if(errors.status == 401) {
          this.customers = null
        }
      })
    },
  }   
})
