<script>
import Message from "./Message.vue";
export default {
  name: "Component",
  components: { Message },
  data() {
    return {
      Me: {},
      load() {
        //    console.log(`Loading Dashboard`);
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
        try {
          fetch(`${this.Settings.server.url}/get/${localStorage.SpaceID}`)
            .then((response) => response.json())
            .then((data) => {
              this.Messages = ((data || {}).Messages || []).reverse();
            });
        } catch {}
      },
      send() {
        try {
          fetch(`${this.Settings.server.url}/send/${localStorage.SpaceID}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              owner: this.Me.username,
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
      Messages: [].reverse(),
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  created() {
    this.load();
    // fetch(`${this.Settings.server.url}/test-data`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.Messages = data.Messages;
    //   });
  },
};
</script>

<template>
  <main v-if="localStorage.token">
    <div class="w-full">
      <div class="w-full grid space-y-1 grid">
        <div class="grid-cols-8 grid">
          <textarea
            v-model="localStorage.Message"
            class="w-full col-span-7 resize-none bg-bray-400 border-b-2 border-bray-300 py-2 px-4 focus:outline-none"
            placeholder="Enter Message"
            type="text"
          ></textarea>
          <div class="">
            <button
              @click="send()"
              :class="`w-full py-3 h-full text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} `"
            >
              Send
            </button>
          </div>
        </div>
        <Message
          v-for="Message in Messages"
          :key="Message"
          :content="Message.message"
          :avatar="`${Settings.server.url}/avatar/${Message.owner}`"
          :owner="Message.owner"
          :me="Me"
        />
      </div>
    </div>
  </main>
</template>
