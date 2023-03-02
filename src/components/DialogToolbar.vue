<template>
    <Toolbar class="dialog-toolbar">
        <template #center>
            <MyDialog :text="text"/>
            <MyDialog />
        </template>
    </Toolbar>
</template>

<script>
//import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar';
import MyDialog from './MyDialog.vue';
export default {
    name: 'DialogToolbar',
    components: {
        //Card,
        Toolbar,
        MyDialog,
    },
    data() {
        return {
            text: "test"
        }
    }
}
</script>

<style>

</style>