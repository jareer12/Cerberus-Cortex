<script>
export default {
  name: "Component",
  data() {
    return {
      ErrorMessage: null,
      login() {
        fetch(`${this.Settings.server.url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: localStorage.Password,
            username: localStorage.Username,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.Success) {
              if (data.Message) {
                this.ErrorMessage = data.Message;
              }
            } else {
              localStorage.token = data.Data.token;
              window.location.href = "/";
            }
          });
      },
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  created() {},
};
</script>

<template>
  <main class="mt-1 mb-2">
    <div class="px-5 mt-3">
      <div class="w-full space-x-3 flex flex-wrap justify-center mt-5">
        <div class="w-6/12 space-y-3">
          <div v-if="ErrorMessage">
            <div
              disabled
              v-html="ErrorMessage"
              class="bg-bray-400 bg-bray-400 rounded-lg shadow-md p-4 rounded-lg w-full focus:outline-none"
            ></div>
          </div>
          <div>
            <input
              v-model="localStorage.Username"
              type="username"
              placeholder="Username"
              class="bg-bray-400 bg-bray-400 rounded-lg shadow-md p-4 rounded-lg w-full focus:outline-none"
            />
          </div>
          <div class="">
            <input
              v-model="localStorage.Password"
              type="password"
              placeholder="Password"
              class="bg-bray-400 bg-bray-400 rounded-lg shadow-md p-4 rounded-lg w-full focus:outline-none"
            />
          </div>
          <div>
            <button
              @click="login()"
              :class="`w-full rounded-lg text-white shadow-${localStorage.color}-500/50 shadow-md bg-${localStorage.color} p-3`"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
