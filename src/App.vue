<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto py-4">
    <RouterView />
  </div>
  <Footer />
</template>
