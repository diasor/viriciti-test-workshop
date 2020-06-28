<template>
  <div>
    <ul v-if="simCards.length">
      <h2>SIM Cards List</h2>
      <li v-for="(card) in simCards" :key="card.SimId">
        <div class="card-text">{{ printCard(card) }}</div>
        <div class="card-button">
          <button @click="removeCard(card)">Delete</button>
        </div>
      </li>
    </ul>
    <h2 v-else>Sorry, you have no SIM cards yet.</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['simCards'])
  },

  methods: {
    ...mapActions(['addSimCard', 'deleteSimCard']),

    printCard(card) {
      const id = `id: ${card.id}`;
      const provider = `provider: ${card.provider}`;
      const status = `status: ${card.status}`;
      return `${id} ${provider} ${status}`;
    },

    removeCard(card) {
      // this.simCards.splice(index, 1);
      this.deleteSimCard(card);
    }
  },

  created() {
    console.log('simcards', this.simCards);
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  margin: 5px 10px;
  text-align: left;
}

ul li:before {
  content: '✓';
}

.card-text {
  padding: 5px 0 0 5px;
  width: 65vw;
}
.card-button {
  width: 3rem;
}
</style>