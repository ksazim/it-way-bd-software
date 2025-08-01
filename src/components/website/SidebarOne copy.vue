<script setup>
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
</script>

<template>
    <div v-if="$route.name=='MyZone'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  My Zone</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> My Posts</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'HomePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'home']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='CaseFiles'" class="sidebar contact-panel" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/cases">
            <div :class="($route.name === 'CaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="!authStore.token" to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active sub-item' : 'sub-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Cases</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='ConnectionList'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/connections">
            <div :class="($route.name === 'ConnectionList') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'users']" /> 
                Community 
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Friends (20)</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Friend Requests (12)</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Find People</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Lawyers (55)</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> My Clients (5)</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='ChamberList'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'ChamberList') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Find Chambers/Firms</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Chambers/Firms</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='MyChambers'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/chambers"><div :class="($route.name === 'MyChambers') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  My Chambers/Firms</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Register New Chamber</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='ChamberPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/chambers"><div :class="($route.name === 'ChamberPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Chambers Details</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Register New Chamber</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
    </div>
    <div v-if="$route.name=='ChamberEdit'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/chambers"><div :class="($route.name === 'ChamberEdit') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Chamber</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Edit</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'sub-item' : 'sub-item'"><div></div> Register New Chamber</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
    </div>
    <div v-if="$route.name=='ApplicationPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/chambers"><div :class="($route.name === 'ApplicationPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Chamber Registration</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Chambers</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='OpenCaseFile'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/chambers"><div :class="($route.name === 'OpenCaseFile') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Opening Case File</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Posts -->
    <div v-if="$route.name=='PostPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'PostPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Create New Post</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Posts</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='CreatePost' || $route.name=='EditPost'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'CreatePost' || $route.name=='EditPost') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Create New Post</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Posts</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- My Cases -->
    <div v-if="$route.name=='UserCaseFiles'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'UserCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Create New Case</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='UserCaseFile'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'UserCaseFile') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Create New Case</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- My Posts -->
    <div v-if="$route.name=='MyPosts'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'MyPosts') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Create New Post</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> My Cases</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Settings -->
    <div v-if="$route.name=='SettingsPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'SettingsPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Settings</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Profile</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Profile -->
    <div v-if="$route.name=='MyProfile'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'MyProfile') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Profile</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Settings</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <div v-if="$route.name=='SelfProfilePage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'SelfProfilePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  My Profile</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Settings</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Profile -->
    <div v-if="$route.name=='ProfilePage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'ProfilePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Profile</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Settings</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Chat -->
    <div v-if="$route.name=='ChatBox' || $route.name=='InboxPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'ChatBox' || $route.name=='InboxPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Profile</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Settings</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Notifications -->
    <div v-if="$route.name=='CaseNotificationPage' || $route.name=='NotificationPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'CaseNotificationPage' || $route.name=='NotificationPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Notifications</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Case Notifications</div></router-link>
        <router-link to="/home"><div><font-awesome-icon :icon="['fa', 'fa-arrow-left']" /> Back to Home</div></router-link>
    </div>
    <!-- Auth -->
    <div v-if="$route.name=='frontPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'frontPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Profile</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'HomePage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? 'sub-item' : 'sub-item'"><div></div> Settings</div></router-link>
        <router-link v-if="authStore.token" to="/cases">
            <div :class="($route.name === 'CaseFiles') ? 'active' : ''">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="!authStore.token" to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active' : ''">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link to="/disclaimer">
            <div :class="($route.name === 'DisclaimerPage') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                Terms & Conditions
            </div>
        </router-link>
        <router-link to="/help-and-support">
            <div :class="($route.name === 'HelpSupport') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'handshake-angle']" />
                Help & Support
            </div>
        </router-link>
        <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'question']" />
                How to File a Case
            </div>
        </router-link>
    </div>
    <div v-if="$route.name=='registrationPage'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <router-link v-if="authStore.token" to="/"><div :class="($route.name === 'registrationPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  Notifications</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'HomePage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
        <router-link v-if="authStore.token" to="/my-chambers"><div :class="($route.name === 'MyChambers') ? '' : ''"><div></div> Case Notifications</div></router-link>
        <router-link v-if="authStore.token" to="/cases">
            <div :class="($route.name === 'CaseFiles') ? 'active' : ''">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="!authStore.token" to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active' : ''">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link to="/disclaimer">
            <div :class="($route.name === 'DisclaimerPage') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                Terms & Conditions
            </div>
        </router-link>
        <router-link to="/help-and-support">
            <div :class="($route.name === 'HelpSupport') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'handshake-angle']" />
                Help & Support
            </div>
        </router-link>
        <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'question']" />
                How to File a Case
            </div>
        </router-link>
    </div>
    <div  v-if="$route.name=='HomePage' || $route.name=='DisclaimerPage' || $route.name=='HowToCase' || $route.name=='HelpSupport'" :class="(authStore.openSidebar==true) ? 'sidebar-one' : 'sidebar-one invisible'">
        <!-- <router-link v-for="item in sidebar" :key="item" :to="item.path"><div :class="($route.name === item.name) ? 'active' : ''"><font-awesome-icon :icon="['fa', item.icon]" />  {{ item.title }}</div></router-link> -->
        
        <router-link to="/home"><div :class="($route.name === 'HomePage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'home']" /> Home</div></router-link>
        <router-link v-if="authStore.token" to="/my-zone"><div :class="($route.name === 'MyZone') ? 'active sidebar-menu-item' : 'sidebar-menu-item'"><font-awesome-icon :icon="['fa', 'copy']" />  My Zone</div></router-link>
        <router-link v-if="authStore.token" to="/cases">
            <div :class="($route.name === 'CaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="!authStore.token" to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'gavel']" /> 
                <span>Cases</span>
            </div>
        </router-link>
        <router-link v-if="authStore.token" to="/connections">
            <div :class="($route.name === 'ConnectionList') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fa', 'users']" /> 
                Community 
            </div>
        </router-link>
        <!-- <router-link to="/chambers">
            <div :class="($route.name === 'ChamberList') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'user-tie']" />
                Law Chambers/Firms
            </div>
        </router-link>
        <router-link to="/police-stations">
            <div :class="($route.name === 'PoliceStations') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'building-columns']" />
                Police Stations
            </div>
        </router-link>
        <router-link to="/public/courts">
            <div :class="($route.name === 'PublicCourts') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'building-columns']" />
                Courts
            </div>
        </router-link>
        <router-link to="/prisons">
            <div :class="($route.name === 'PrisonList') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'building-columns']" />
                Prisons
            </div>
        </router-link> -->
        <router-link to="/disclaimer">
            <div :class="($route.name === 'DisclaimerPage') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                Terms & Conditions
            </div>
        </router-link>
        <router-link to="/help-and-support">
            <div :class="($route.name === 'HelpSupport') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'handshake-angle']" />
                Help & Support
            </div>
        </router-link>
        <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active sidebar-menu-item' : 'sidebar-menu-item'">
                <font-awesome-icon :icon="['fas', 'question']" />
                How to File a Case
            </div>
        </router-link>
        <!-- at least 1000 people  -->
        <!-- <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'hamsa']" />
                Make Appeal to government
            </div>
        </router-link> -->
        <!-- <router-link to="/how-to-file-case">
            <div :class="($route.name === 'HowToCase') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'hamsa']" />
                Call for Protest
            </div>
        </router-link> -->
        <!-- <router-link v-if="authStore.isUser || authStore.isAgent" to="/my-connections">
                <div :class="($route.name === 'MyConnection') ? 'active' : ''">
                    <font-awesome-icon :icon="['fa', 'user']" /> 
                    <span>My</span>
                    <span v-if="authStore.isUser">Lawyers</span>
                    <span v-else>Clients</span>
                    <span>(5)</span>
            </div>
        </router-link> 
        <router-link to="/public/cases">
            <div :class="($route.name === 'PublicCaseFiles') ? 'active' : ''">
                <font-awesome-icon :icon="['fas', 'building-shield']" />
                <span>Police Stations</span>
            </div>
        </router-link> -->
       
        <!-- <router-link to="/home"><div :class="($route.name === 'postPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'copy']" /> Post</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'groupPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'users']" /> Association</div></router-link> -->
        <!-- <router-link to="/friends"><div :class="($route.name === 'CasePage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'users']" /> Following(12)</div></router-link>
        <router-link to="/friends"><div :class="($route.name === 'CasePage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'users']" /> Follower(366)</div></router-link>-->
        <!-- <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Question</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Program/Invitation</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Client Pool</div></router-link>
        <router-link to="/home"><div :class="($route.name === 'questionPage') ? 'active' : ''"><font-awesome-icon :icon="['fa', 'question']" /> Get a Lawyer</div></router-link> -->
        <!-- <div>
            Lawyer/Firm Boosting section 
        </div> -->
    </div>
</template>

<style scoped>
.sidebar-one {
    /* background-color: #efefef; */
    background-color: #f2f5f7;
    padding: 20px;
    overflow: auto;
    /* border-right: 1px solid #ebebeb; */
    display: block !important;
}

.sidebar-menu-item, .sub-item {
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
    font-size: 17px;
}

.sidebar-one > * {
    text-decoration: none;
    color: #223135;
}

.sidebar-one > * > .sidebar-menu-item:hover {
    /* background-color: #dfdfdf; */
    background-color: #104ba3;
    color: white;
}

.sub-item:hover {
    color: #0c5acd;
}

.active {
    /* background-color: #dfdfdf; */
    background-color: #104ba3;
    /* color: #104ba3; */
    color: white;
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
    .invisible {
        display: none !important;
    }
}
</style>