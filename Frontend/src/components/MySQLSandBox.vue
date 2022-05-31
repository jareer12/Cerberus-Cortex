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
      <div class="grid-cols-8 grid gap-3 col-span-2">
        <div class="col-span-6">
          <textarea
            v-model="localStorage.MySQLSandBoxRawQuery"
            type="password"
            placeholder="Raw MySQL Query"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          >
          </textarea>
        </div>
        <div class="col-span-2">
          <button
            :class="`bg-${localStorage.color} rounded text-white w-full py-3`"
          >
            Run
          </button>
        </div>
      </div>
    </main>
  </main>
</template>
