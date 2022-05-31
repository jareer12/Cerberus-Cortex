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
      <a href="/mysql/sandbox">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 group duration-300 transition-all cursor-pointer`"
        >
          <h1 :class="`text-xl font-bold`">Javascript Sandbox</h1>
          <p class="text-gray-400 mt-1">Run Node.js in the web.</p>
        </div>
      </a>
      <a href="/mysql/radar">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 group duration-300 transition-all cursor-pointer`"
        >
          <h1 :class="`text-xl font-bold`">Lua Sandbox</h1>
          <p class="text-gray-400 mt-1">Run Lua in the web.</p>
        </div>
      </a>

      <a href="/mysql/radar">
        <div
          :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 group duration-300 transition-all cursor-pointer`"
        >
          <h1 :class="`text-xl font-bold`">CMD</h1>
          <p class="text-gray-400 mt-1">Command-line built in the web.</p>
        </div>
      </a>
    </main>
  </main>
</template>
