<template>
  <div id="app" class="bg-red-50 container m-auto p-4">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>