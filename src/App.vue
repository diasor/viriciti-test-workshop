<template>
  <div id="app">
    <img src="./assets/viriciti-logo.png" />
    <div class="link-container">
      <router-link class="link" :to="{ path: '/', query: { temp: 60 }}">Testing Computed</router-link>
      <router-link class="link" :to="{ path: '/simform'}">Testing Form</router-link>
      <router-link class="link" :to="{ path: '/vuex', query: { temp: 60 }}">Testing Vuex</router-link>
    </div>
    <div class="component-container">
      <router-view></router-view>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-content: flex-start;
  padding: 0 15px;
}

img {
  margin: 0;
  width: 25%;
  /* height: 30%; */
}

h1,
h2,
h3 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 15px;
}

h3 {
  font-size: 14px;
}

.title {
  font-size: 15px;
  color: black;
  font-weight: 700;
  text-align: left;
}

.link-container {
  display: flex;
  flex-direction: row;
}

.link {
  display: flex;
  margin-left: 0;
  padding: 5px;
}

.router-link-active {
  color: green;
}

.component-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 10px 5px;
  border: 1px lightgrey solid;
  border-radius: 5px;
}
</style>
