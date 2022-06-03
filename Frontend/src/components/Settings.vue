<script>
import Message from "./Message.vue";
export default {
  name: "Component",
  components: { Message },
  data() {
    return {
      pfp() {
        try {
          fetch(`${this.Settings.server.url}/send/${localStorage.SpaceID}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              owner: "Rigby",
              message: localStorage.Message,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              this.load();
            });
          localStorage.removeItem("Message");
        } catch {}
      },
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  created() {},
};
</script>

<template>
  <main>
    <div class="w-full">
      <div class="w-full items-center px-8 py-4 grid-cols-1 space-y-1 grid">
        <div class="">My Profile Picture</div>
        <div class="grid-cols-8 grid gap-3">
          <input
            type="text"
            placeholder="Paste Image URL"
            class="col-span-7 bg-bray-400 py-4 px-4 rounded-lg w-full focus:outline-none"
          />
          <button
            @click="pfp()"
            :class="`w-full rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
