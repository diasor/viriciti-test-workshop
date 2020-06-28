export default {
  state() {
    return {
      simCards: [],
    }
  },

  mutations: {
    addSimCard: (state, card) => state.simCards.push(card),

    deleteSimCard(state, card) {
      state.simCards = state.simCards.filter((item) => {
        return item.id !== card.id
      })
    },
  },

  actions: {
    addSimCard: ({ commit }, card) => commit("addSimCard", card),

    deleteSimCard: ({ commit }, card) => commit("deleteSimCard", card),
  },

  getters: {
    simCards: (state) => state.simCards,
  },
}
