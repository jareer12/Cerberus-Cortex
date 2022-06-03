<script>
import TailDown from "@/assets/js/taildown.js";
export default {
  name: "Component",
  data() {
    return {
      Parser: new TailDown(),
      me: { username: "Rigby" },
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  props: {
    content: String,
    avatar: String,
    owner: String,
  },
  created() {
    this.isOwned = this.owner == this.me.username;
  },
};
</script>

<template>
  <main v-if="content && owner" class="mt-1 mb-2">
    <div class="px-5 mt-3" v-if="!isOwned">
      <div class="w-full space-x-3">
        <div class="w-9/12 float-left grid-cols-12 flex flex-wrap space-x-3">
          <img :src="avatar" class="rounded-full w-10 h-10" />
          <p
            :class="`break-all col-span-11 bg-bray-400 hover:scale-105 duration-300 rounded-tr-lg rounded-b-lg p-4 float-left`"
            v-html="Parser.parse(content || '')"
          ></p>
        </div>
      </div>
    </div>

    <div class="px-5 mt-3" v-if="isOwned">
      <div class="w-full space-x-3">
        <div
          class="w-9/12 float-right grid-cols-12 grid flex flex-wrap space-x-3"
        >
          <div class="col-span-11">
            <p
              class="break-all bg-bray-400 rounded-bl-lg duration-300 rounded-t-lg p-4 float-right"
              v-html="Parser.parse(content || '')"
            ></p>
          </div>
          <img :src="avatar" class="rounded-full w-10 h-10" />
        </div>
      </div>
    </div>
  </main>
</template>
