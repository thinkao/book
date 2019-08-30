<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainPage from '@/page/MainPage'
export default {
  name: 'App',
  components: {
    'MainPage': MainPage
  },
}
</script>

<style>
  #app {
    position: relative;
    top: 0px;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
    background: #fff;
    min-height: 500px;
    min-width: 1366px;
  }
</style>
