<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
};
</script>

<template>
  <main class="p-4 w-full" v-if="Settings">
    <main class="w-full xl:grid-cols-4 gap-5 grid">
      <div class="">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 duration-300 transition-all group cursor-pointer`"
        >
          <h1 class="text-xl font-bold">MySQL Analyzer</h1>
          <p class="text-gray-400 mt-1">
            A really powerful collection of tools for MySQL database.
          </p>
        </div>
      </div>
    </main>
  </main>
</template>
