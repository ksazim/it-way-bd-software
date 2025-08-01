<script setup>
import SearchComponent from '@/components/search/SearchComponent'
// import PromotionComponent from '@/components/ad/PromotionComponent.vue'
// import NewsComponent from '@/components/news/NewsComponent.vue';
import { ref, onMounted } from 'vue'
import { useCrudStore } from '@/store/crud'
// import { useRouter } from 'vue-router'
import PostComponent from '@/components/post/MiniPostComponent.vue'
import { useSystemStore } from '@/store/system'
import { useSearchStore } from '@/store/search'

const crudStore = useCrudStore()
const searchStore = useSearchStore()
const searchByTitle = ref()
const searchByTime = ref()
const searchByCategory = ref()
const searchByTag = ref()
const systemStore = useSystemStore()

async function reset() {
    systemStore.loading = true
    try {
        searchByTitle.value = ''
        searchByTime.value = ''
        searchByCategory.value = ''
        searchByTag.value = ''
        searchStore.searchResults = []
        crudStore.allLoaded = false; // Reset when new filter is applied
        crudStore.nextPage = null;   // Reset pagination
        crudStore.getAllData = [];
        await crudStore.getAllInfinite('posts').then(() => {
            
        }).catch((error) => {
            console.log(error)
        });
    } catch(error) {
        console.log(error)
    } finally {
        systemStore.loading = false
    }
}

async function filter(time, category, tag) {
    systemStore.loading = true
    try {
        searchByTime.value = time
        searchByCategory.value = category
        searchByTag.value = tag
        searchStore.searchResults = {
            timeline: time, category, tag
        }
        crudStore.allLoaded = false; // Reset when new filter is applied
        crudStore.nextPage = null;   // Reset pagination
        crudStore.getAllData = [];
        await crudStore.getAllInfinite('posts', { time: searchByTime.value, title: searchByTitle.value, category: searchByCategory.value, tag: searchByTag.value }).then(() => {
        }).catch((error) => {
            console.log(error)
        });
    } catch(error) {
        console.log(error)
    } finally {
        systemStore.loading = false
    }
}

// const router = useRouter()

onMounted(() => {
    systemStore.getCategories()
    systemStore.getTrendings()
    // if(router.currentRoute.value.name == 'PostPage') {
    //     crudStore.getAll('popular-posts')
    // }
})
</script>

<template>
    <div class="sidebar-two">
        <!-- <PromotionComponent v-if="$route.name=='HomePage'" />
        <NewsComponent v-if="$route.name=='HomePage'" /> -->
        <div v-if="$route.name=='HomePage'" class="sidebar">
            <div class="flex-between-center">
                <h5 class="sidebar-header">Filter</h5>
                <div class="flex-end-center-10">
                    <button class="mini-srch-btn" @click="filter"><font-awesome-icon :icon="['fa', 'google']" /> search</button>
                    <button class="reset-btn" @click="reset"><font-awesome-icon :icon="['fa', 'refresh']" /></button>
                </div>
            </div>
            <div class="sidebar-content">
                <SearchComponent v-model="searchByTitle" :placeholder="'Search by Keywords ...'" />
            </div>    
            <h5 class="sidebar-header">Trendings</h5>
            <div v-if="systemStore.trendings" class="sidebar-content">
                <router-link class="tag" v-for="trend in systemStore.trendings" :key="trend" @click="filter(searchByTime, searchByCategory, trend.tag_name)" to="">#{{ trend.tag_name }} ({{ trend.post_number }} posts)</router-link>
            </div>

            <h5 class="sidebar-header">categories</h5>
            <div class="sidebar-content categories">
                <router-link class="category" to="" @click="filter(searchByTime, '')">All</router-link>
                <router-link v-for="category in systemStore.categories" :key="category.id" class="category" @click="filter(searchByTime, category.id, searchByTag)" to="">{{ category.value }}</router-link>
            </div>

            <h5 class="sidebar-header">Publish Time</h5>
            <div class="sidebar-content publish-time">
                <router-link @click="filter('today', searchByCategory, searchByTag)" to="">Today</router-link>
                <router-link @click="filter('week', searchByCategory, searchByTag)" to="">This Week</router-link>
                <router-link @click="filter('month', searchByCategory, searchByTag)" to="">This Month</router-link>
                <router-link @click="filter('year', searchByCategory, searchByTag)" to="">This Year</router-link>
            </div>
        </div>
        <div v-if="$route.name=='PostPage'" class="sidebar suggested-posts">
            <h3 class="sidebar-header">Popular Posts</h3>
            <div class="sidebar-content">
                <PostComponent v-for="post in crudStore.getAllData" :key="post" :post="post" />
            </div>
        </div>

        <div v-if="$route.name=='CaseFiles'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='UserCaseFile' || $route.name=='UserCaseFiles'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='ProfilePage'|| $route.name=='MyPosts' || $route.name=='SettingsPage'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='MyZone' || $route.name=='ChatBox' || $route.name=='CreatePost' || $route.name=='OpenCaseFile' || $route.name=='EditPost' || $route.name=='EditCaseFile'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>
        <!-- {{ $route.name }} -->
        <div v-if="$route.name=='ConnectionList'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='InboxPage'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='NotificationPage'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='CaseNotificationPage' || $route.name=='MyProfile' || $route.name=='SelfProfilePage'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>

        <div v-if="$route.name=='HowToCase' || $route.name=='HelpSupport' || $route.name=='DisclaimerPage' || $route.name=='AboutPage' || $route.name=='frontPage' || $route.name=='registrationPage'" class="sidebar contact-panel">
            <div class="contact">
                If you have any suggestion, feedback or complaint, please contact us:
                support@bicharachar.com
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    height: 84vh;
    overflow: auto;
}

.sidebar > * {
    padding: 0 20px;
}

.sidebar-header {
    /* height: 50px; */
    display: flex;
    width: 100%;
    /* text-align: center;
    justify-content: start;
    align-items: center; */
    box-sizing: border-box;
    margin: 20px 0;
    /* border-bottom: 1px solid gray; */
}

.sidebar-content {
    display: grid;
}

.sidebar-two {
    background-color: #f2f5f7;
    height: 84vh;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.category {
    text-decoration: none;
    padding: 5px 10px;
    color: inherit;
    border: 1px solid gray;
    border-radius: 5px; 
}

.tag:hover {
    text-decoration: underline;
}

.publish-time {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.publish-time > * {
    text-decoration: none;
    color: inherit;
}

.publish-time > *:hover {
    text-decoration: underline;
}

.mini-srch-btn {
    background-color: #1733ad;
    color: white;
    outline: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.mini-srch-btn:hover {
    opacity: 0.8;
}

.reset-btn {
    background-color: #717171;
    color: white;
    outline: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.mini-srch-btn:hover {
    opacity: 0.8;
}

.contact-panel {
    margin: 20px;
}

.contact {
    background-color: white;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    .sidebar-two {
        display: none;
    }
}
</style>