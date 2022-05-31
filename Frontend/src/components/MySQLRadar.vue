<script>
export default {
  name: "Component",
  data() {
    return {
      colors: ["valencia", "emerald"],
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
};
</script>

<template>
  <main class="p-5 w-full" v-if="Settings">
    <main class="w-full xl:grid-cols-3 gap-5 grid">
      <div class="w-full col-span-2">
        <h1 class="text-xl font-bold mb-3">Test New Connection</h1>
        <div class="grid-cols-2 grid gap-5 col-span-2">
          <input
            type="text"
            placeholder="MySQL Username"
            v-model="localStorage.MySQLRadarUsername"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          />
          <input
            type="text"
            placeholder="MySQL Host"
            v-model="localStorage.MySQLRadarHost"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          />
          <input
            type="text"
            v-model="localStorage.MySQLRadarDatabase"
            placeholder="MySQL Database"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          />
          <input
            v-model="localStorage.MySQLRadarPassword"
            type="password"
            placeholder="MySQL Password"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          />
          <button :class="`bg-${localStorage.color} rounded text-white`">
            Establish Connection
          </button>
          <input
            v-model="localStorage.MySQLRadarPort"
            type="number"
            placeholder="MySQL Port"
            :class="`bg-bray-400 focus:outline-none focus:scale-105 duration-500 transition-all focus:ring-${localStorage.color} ring ring-transparent rounded shadow py-3 px-3 w-full`"
          />
          <p class="col-span-2">
            The server will try to establish a connection with the given
            credentials, this tool can be useful if you install MySQL on your
            VPS/remote server and want to test it.
          </p>
        </div>
      </div>
      <div class="space-y-3">
        <h1 class="text-xl font-bold">Previously Tested</h1>
        <div
          v-for="item in 8"
          :key="item"
          class="bg-bray-400 items-center space-x-2 srounded p-3 flex flex-wrap"
        >
          <div
            :class="`bg-${
              colors[Math.floor(Math.random() * colors.length)]
            } p-3 rounded-full`"
          ></div>
          <span> Connection To root@localhost </span>
        </div>
      </div>
    </main>
  </main>
</template>
