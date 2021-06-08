<template>
  <div class="message" :class="sent ? 'sent-message' : ''">
    <img
      class="message__thumbnail"
      :src="user.thumbnail"
      v-tooltip="user.firstName"
    />
    <div class="message__text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    sent: Boolean,
    user: Object,
  },
};
</script>

<style scoped>
.message {
  margin: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.sent-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message__thumbnail {
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
}

.message__text {
  max-width: 60%;
  min-height: 32px;
  display: flex;
  font-size: 16px;
  align-items: center;
  margin: 0 12px;
  padding: 8px;
  background-color: #eee;
  border-radius: 8px;
}

.sent-message > .message__text {
  background-color: #9fc5f8;
}
</style>
