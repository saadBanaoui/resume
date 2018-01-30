<template>
  <div id="app">
    <Brief></Brief>
    <div>
      <router-link :to="{ name: 'Experiences' }">Experiences</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Brief from '@/components/brief'
export default {
  name: 'App',
  components: {
    Brief
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
