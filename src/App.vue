<template>
  <MySidebar />
  <StaticContent />
  <DialogToolbar />
</template>

<script>
import MySidebar from './components/MySidebar.vue'
//import MyDialog from './components/MyDialog.vue'
import StaticContent from './components/StaticContent.vue'
import DialogToolbar from './components/DialogToolbar.vue'

export default {
  name: 'App',
  components: {
    MySidebar,
    //MyDialog,
    StaticContent,
    DialogToolbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
