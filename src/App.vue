<template>
  <GeneralNav v-if="$route.name!='auth'"/>
  <RouterView/>
</template>

<script>
import GeneralNav from "@/components/GeneralNav.vue"


export default {
  name: 'App',
  components:{
    GeneralNav
  },
}
</script>

<style>
  #app, body{
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

</style>
