export default {
  state() {
    return {
      messages: [],
      currentUser: {},
      lastId: 0,
    };
  },

  mutations: {
    setConversation(state, messages) {
      state.messages = messages;
      state.lastId = messages.slice(-1)[0].id;
    },

    addMessage(state, message) {
      state.lastId++;
      state.messages = [
        ...state.messages,
        {
          id: state.lastId,
          from: state.currentUser,
          message,
          date: Date(),
        },
      ];
    },

    removeLastMessage(state) {
      state.lastId--;
      state.messages.pop();
    },

    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
};
