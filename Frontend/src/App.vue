<script setup>
import { RouterView } from "vue-router";
import Navigator from "./components/Navigator.vue";
if (window.location.pathname != "/login") {
  if (window.location.pathname != "/register") {
    if (!localStorage.token) window.location.href = "/login";
  }
}
</script>

<template>
  <main class="grid grid-cols-6">
    <Navigator />
    <RouterView class="col-span-5" />
  </main>
</template>

<style>
@import "./assets/css/main.css";
@import "./assets/css/tailwinds.css";
</style>
