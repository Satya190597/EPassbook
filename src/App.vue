<template>
  <div id="app">
    <v-app>
      <Header/>
      <router-view class="mt-md-10"></router-view>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from './layouts/Header'
import Footer from './layouts/Footer'
export default {
  name: 'App',
  components: {
    Header: Header,
    Footer: Footer
  },
};
</script>

