<script setup>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer';
import Contacts from '@/layouts/Contacts';
</script>

<template>
  <Header />
  <slot></slot>
  <Contacts />
  <Footer />
</template>

<style scoped></style>
