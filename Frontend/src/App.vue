<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigator from "./components/Navigator.vue";
</script>

<template>
  <main>
    <Navigator />
    <RouterView />
  </main>
</template>

<style>
@import "./assets/css/main.css";
@import "./assets/css/tailwinds.css";
</style>
