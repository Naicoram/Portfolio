<script setup>
import HeaderPort from './components/HeaderPort.vue';
import { RouterView } from 'vue-router'
import FooterPort from './components/FooterPort.vue';
</script>

<template>
  <HeaderPort />
  <RouterView />
  <FooterPort />
</template>

<style scoped></style>
