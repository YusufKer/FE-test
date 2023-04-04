<template>
  <div id="app">
    <Header/>
      <div class="container m-auto">
        <router-view/>
      </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>