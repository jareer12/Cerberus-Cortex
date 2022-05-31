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
  <section>
    <main class="p-4 w-full" v-if="Settings">
      <h1 class="text-xl font-bold mb-3">Database</h1>
      <main class="w-full xl:grid-cols-4 gap-5 grid">
        <a href="/mysql">
          <div
            :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 duration-300 transition-all group cursor-pointer`"
          >
            <h1 class="text-xl font-bold">MySQL Master</h1>
            <p class="text-gray-400 mt-1">
              A really powerful collection of tools for MySQL database.
            </p>
          </div>
        </a>
      </main>
    </main>

    <main class="p-4 w-full" v-if="Settings">
      <h1 class="text-xl font-bold mb-3">Programming</h1>
      <main class="w-full xl:grid-cols-4 gap-5 grid">
        <a href="/repl">
          <div
            :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 duration-300 transition-all group cursor-pointer`"
          >
            <h1 class="text-xl font-bold">Repl Zone</h1>
            <p class="text-gray-400 mt-1">
              Environments built in web to run different programming langauges.
            </p>
          </div>
        </a>
      </main>
    </main>

    <main class="p-4 w-full" v-if="Settings">
      <h1 class="text-xl font-bold mb-3">Useless</h1>
      <main class="w-full xl:grid-cols-4 gap-5 grid">
        <a href="/docanal">
          <div
            :class="`bg-bray-400 w-full p-4 rounded hover:scale-105 duration-300 transition-all group cursor-pointer`"
          >
            <h1 class="text-xl font-bold">Docs Analyzer</h1>
            <p class="text-gray-400 mt-1">
              A powerful markdown compiler and other tools compatible with
              Tailwind Css.
            </p>
          </div>
        </a>
      </main>
    </main>
  </section>
</template>
