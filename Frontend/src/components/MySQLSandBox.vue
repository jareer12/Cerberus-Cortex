<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  async created() {},
};
</script>

<template>
  <main class="p-4 w-full" v-if="Settings">
    <main class="w-full xl:grid-cols-4 gap-5 grid"></main>
  </main>
</template>
