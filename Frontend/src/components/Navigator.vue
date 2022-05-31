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
  <main class="p-4 w-full">
    <main class="bg-bray-400 w-full flex flex-wrap">
      <a
        href=""
        :class="`p-4 duration-300 transition-all hover:text-white hover:bg-${localStorage.color}`"
      >
        Home
      </a>
      <a
        href=""
        :class="`p-4 duration-300 transition-all hover:text-white hover:bg-${localStorage.color}`"
      >
        Support
      </a>
    </main>
  </main>
</template>
