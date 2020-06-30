
<template>
  <div>
    <h1 class="title">Testing Methods & HTTP requests</h1>
    <h2>Dogs List by breed: {{ breed }}</h2>
    <div v-if="dogs && dogs.length" class="dog-container">
      <div v-for="(dog) in dogs" :key="dog" class="dog-card">
        <img :src="dog">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dogs: [],
      breed: "hound",
    };
  },
  created() {
    this.fetchDogs();
  },
  methods: {
    buildUrl(breed) {
      return `https://dog.ceo/api/breed/${breed}/images`;
    },

    fetchDogs() {
      const url = this.buildUrl(this.breed);
      const axiosPromise = axios.get(url);
      axiosPromise.then(results => {
        this.dogs = results.data.message;
      });
      return axiosPromise;
    }
  }
};
</script>
<style scoped>
.dog-container {
  display: flex;
  flex-wrap: wrap;
}
.dog-card {
  flex-grow: 1;
  width: 45%;
  max-width: 200px;
  max-height: 300px;
  padding: 5px;
}

ul li:before {
  content: "\1F436";
}

img {
  border-radius: 5px;
  width: 100%;
  max-height: 250px;
}
</style>