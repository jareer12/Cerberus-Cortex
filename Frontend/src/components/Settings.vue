<script>
import Message from "./Message.vue";
export default {
  name: "Component",
  components: { Message },
  data() {
    return {
      Me: {},
      load() {
        try {
          fetch(`${this.Settings.server.url}/me`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: localStorage.token,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              this.Me = data.Data;
              if (!data.Success) {
                localStorage.clear();
              }
            });
        } catch {
          localStorage.clear();
        }
      },
      pfp() {
        try {
          console.log(this.Me.avatar);
          fetch(`${this.Settings.server.url}/update-pfp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              avatar: this.Me.avatar,
              token: localStorage.token,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.Success) {
                window.location.reload();
              }
            });
        } catch {}
      },
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  created() {
    this.load();
  },
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
            v-model="Me.avatar"
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
