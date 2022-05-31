<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  async created() {
    document.title = (this.Settings.website || {}).title;
  },
};
</script>

<!-- You DO NOT have the right to remove/alter this Component/Element-->

<template>
  <main
    class="p-4 w-full"
    v-if="(((Settings || {}).ui || {}).footer || {}).show"
  >
    <main class="bg-bray-400 w-full p-4 rounded sm:grid-cols-2 grid">
      <div>
        <h2>
          &copy;
          <a
            target="_blank"
            href="https://github.com/jareer12"
            :class="`text-${localStorage.color}`"
            >Jareer Abdullah</a
          >
          , Licensed Under AGPL-3.0 License
        </h2>
      </div>
    </main>
  </main>
</template>
