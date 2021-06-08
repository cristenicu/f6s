<template>
  <div class="app">
    <Conversation />
    <Compose v-model="message" @submit="sendReply" />
  </div>
</template>

<script>
import Conversation from "./components/Conversation.vue";
import Compose from "./components/Compose.vue";
import { currentUser, conversation } from "./mock/data.js";

export default {
  name: "App",

  components: {
    Conversation,
    Compose,
  },

  data: function () {
    return {
      message: "",
      backupMessage: "",
      noOfSentMessages: 0,
    };
  },

  mounted: function () {
    this.$store.commit("setConversation", JSON.parse(conversation));
    this.$store.commit("setCurrentUser", JSON.parse(currentUser));
  },

  methods: {
    sendReply() {
      this.backupMessage = this.message;

      this.$store.commit("addMessage", this.message);
      this.message = "";
      this.noOfSentMessages++;

      setTimeout(() => {
        if (this.noOfSentMessages / 10 === 1) {
          this.message = this.backupMessage;
          this.$store.commit("removeLastMessage");
          alert("An error occured. Please try again.");
        }
      }, 500);
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 20px);
}
</style>
