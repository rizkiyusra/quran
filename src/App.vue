<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./views/components/Navbar.vue";
  import Footer from "./views/components/Footer.vue";
</script>

<template>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>