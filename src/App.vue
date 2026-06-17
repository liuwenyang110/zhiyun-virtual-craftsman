<template>
  <AppHeader />
  <main class="page">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
