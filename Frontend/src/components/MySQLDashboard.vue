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
    <main class="w-full xl:grid-cols-4 gap-5 grid">
      <div class="">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 group duration-300 transition-all cursor-pointer`"
        >
          <h1 :class="`text-xl font-bold`">MySQL SandBox</h1>
          <p class="text-gray-400 mt-1">
            A sandbox environment to run MySQL queries and all sorts of
            functions related to MySQL.
          </p>
        </div>
      </div>
      <div class="">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 group duration-300 transition-all cursor-pointer`"
        >
          <h1 :class="`text-xl font-bold`">MySQL Radar</h1>
          <p class="text-gray-400 mt-1">
            Check MySQL credentials by connecting to the server.
          </p>
        </div>
      </div>
    </main>
  </main>
</template>
