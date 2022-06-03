<script>
export default {
  name: "Component",
  data() {
    return {
      create() {
        try {
          fetch(`${this.Settings.server.url}/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              localStorage.SpaceID = res.Data.Id;
              window.location.reload();
            });
        } catch {}
      },
      window: window,
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
};
</script>

<template>
  <div class="h-full">
    <main class="bg-bray-500 border-r-2 border-b-2 h-full border-bray-400">
      <h1 class="text-xl font-bold"></h1>
      <div class="flex flex-wrap justify-center px-3 space-y-2">
        <input
          type="text"
          v-model="localStorage.SpaceID"
          placeholder="SpaceID"
          class="bg-bray-400 mt-3 focus:outline-none rounded-lg p-3"
        />
        <button
          @click="window.location.href = '/'"
          :class="`w-full rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
        >
          Join
        </button>
      </div>
      <div class="border-bray-300 border-b-2 mt-5 mb-5"></div>
      <div class="flex flex-wrap justify-center px-3 space-y-2">
        <button
          @click="create()"
          :class="`w-full rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
        >
          Create New
        </button>
      </div>
      <div class="border-bray-300 border-b-2 mt-5 mb-5"></div>
      <div class="space-y-3">
        <div
          class="flex flex-wrap justify-center px-3 space-y-2"
          v-if="localStorage.token"
        >
          <a
            href="/settings"
            :class="`w-full text-center rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
          >
            Settings
          </a>
        </div>
        <div
          class="flex flex-wrap justify-center px-3 space-y-2"
          v-if="!localStorage.token"
        >
          <a
            href="/login"
            :class="`w-full text-center rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
          >
            Login
          </a>
          <a
            href="/register"
            :class="`w-full text-center rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
          >
            Register
          </a>
        </div>
      </div>
      <div class="mt-5"></div>
    </main>
  </div>
</template>
