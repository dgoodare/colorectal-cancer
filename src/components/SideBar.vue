<template>

<Button class="open-sidebar" icon="pi pi-bars" @click="toggleSidebar"/>
<Sidebar v-model:visible="visibleLeft" position="left">
    
    <router-link to="/"><Button class="sidebar-item" label="Home" icon="pi pi-home"/></router-link>

    <router-link to="/what-is-crc"><Button class="sidebar-item" label="What is CRC?" icon="pi pi-question"/></router-link>
    
    <router-link to="/stages-of-crc"><Button class="sidebar-item" label="Stages of CRC" icon="pi pi-arrows-h"/></router-link>
    
    <router-link to="/case-studies"><Button class="sidebar-item" label="Case Studies" icon="pi pi-book"/></router-link>
    
    <router-link to="/how-to-use"><Button class="sidebar-item" label="How to use this app" icon="pi pi-info-circle"/></router-link>
    
    <router-link to="/references"><Button class="sidebar-item" label="References" icon="pi pi-pencil"/></router-link>
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
            toggleSidebar(){
                this.visibleLeft = true;
            }
        }
    }
</script>

<style>

</style>