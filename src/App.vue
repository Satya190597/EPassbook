<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
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
  }
}
</script>
