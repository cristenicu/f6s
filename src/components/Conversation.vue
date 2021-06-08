<template>
  <div class="conversation" ref="conversation">
    <message
      v-for="message in messages"
      :key="message.id"
      :sent="message.from.id === currentUser.id"
      :user="message.from"
    >
      {{ message.message }}
    </message>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Conversation",

  components: {
    Message,
  },

  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    messages() {
      return this.$store.state.messages;
    },
  },

  watch: {
    messages: function (newMessages, oldMessages) {
      setTimeout(() => {
        this.$refs.conversation.scrollTop =
          this.$refs.conversation.scrollHeight;
      }, 0);
    },
  },
};
</script>

<style scoped>
.conversation {
  width: calc(100% - 8px);
  height: 100%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  overflow-y: auto;
}
</style>
