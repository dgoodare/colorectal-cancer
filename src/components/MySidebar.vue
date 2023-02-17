<template>
<Button class="open-sidebar" icon="pi pi-arrow-right" @click="toggleSidebar"/>
<Sidebar v-model:visible="visibleLeft" position="left">
    <Button class="sidebar-item" label="Home" icon="pi pi-home"/>
    <Button class="sidebar-item" label="More Info" icon="pi pi-info-circle"/>
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
.open-sidebar{
    position: fixed;
    top: 1%;
    left: 1%;
}

.sidebar-item{
    display: block;
    width: 100%;
    margin: 1%;
}
</style>