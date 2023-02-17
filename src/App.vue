<template>
  <MySidebar />
  <MyDialog />
</template>

<script>
import MySidebar from './components/MySidebar.vue'
import MyDialog from './components/MyDialog.vue'

export default {
  name: 'App',
  components: {
    MySidebar,
    MyDialog,
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
