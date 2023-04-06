<template>
  <div id="app" class="bg-theme-neutral">
    <Header/>
      <div>
        <router-view/>
      </div>
    <!-- <Footer /> -->
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