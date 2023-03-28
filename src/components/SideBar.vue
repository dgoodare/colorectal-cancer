<template>

<Button class="open-sidebar" icon="pi pi-bars" @click="showSidebar"/>
<Sidebar v-model:visible="visibleLeft" position="left" dismissable="true">
    
    <router-link to="/"><Button class="sidebar-item" label="Home" icon="pi pi-home" @click="hideSidebar"/></router-link>

    <router-link to="/colon-anatomy"><Button class="sidebar-item" label="Anatomy of the Colon" icon="pi pi-user" @click="hideSidebar"/></router-link>
    
    <router-link to="/stages-of-crc"><Button class="sidebar-item" label="Stages of CRC" icon="pi pi-arrows-h" @click="hideSidebar"/></router-link>
    
    <router-link to="/case-studies"><Button class="sidebar-item" label="Case Studies" icon="pi pi-book" @click="hideSidebar"/></router-link>
    
    <router-link to="/how-to-use"><Button class="sidebar-item" label="How to use this app" icon="pi pi-info-circle" @click="hideSidebar"/></router-link>
    
    <router-link to="/references"><Button class="sidebar-item" label="References" icon="pi pi-pencil" @click="hideSidebar"/></router-link>
</Sidebar>
</template>

<script>
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

    export default{
        name: 'MySidebar',
        components: {
            Button,
            Sidebar,
        },

        data() {
            return {
                visibleLeft: false,
            }
        },

        methods: {
            showSidebar(){
                this.visibleLeft = true;
            },

            hideSidebar(){
                this.visibleLeft = false;
            }
        }
    }
</script>

<style>

</style>