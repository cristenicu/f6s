<template>
  <div class="compose">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="send"
    />
    <button @click="send">✈️</button>
  </div>
</template>

<script>
export default {
  name: "Compose",

  props: ["modelValue"],
  emits: ["update:modelValue"],

  methods: {
    send: function (enterPressed) {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
.compose {
  width: 100%;
  display: flex;
  align-items: center;
}

textarea {
  width: 100%;
}

button {
  width: 60px;
  margin-left: 12px;
}
</style>
