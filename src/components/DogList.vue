
<template>
  <div>
    <h1 class="title">Testing Methods & HTTP requests</h1>
    <h2>Dogs List</h2>
    <div v-if="dogs.length" class="dog-container">
      <div v-for="(dog) in dogs" :key="dog" class="dog-card">
        <img :src="dog" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogs: []
    };
  },
  created() {
    this.getDogs();
  },
  methods: {
    getDogs() {
      fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json())
        .then(data => (this.dogs = data.message));
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
  content: '\1F436';
}

img {
  border-radius: 5px;
  width: 100%;
  max-height: 250px;
}
</style>