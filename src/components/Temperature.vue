<template>
  <div class="temperature-container">
    <h1 class="title">Testing Computed & Watchers</h1>
    <h2>Temperature Form</h2>
    <span class="item">
      <strong>Prop temp:</strong>
      {{ temp }}
    </span>
    <span class="item">
      <strong>Prop type:</strong>
      {{ type }}
    </span>
    <span class="item">{{ celsius }} deg. Celsius</span>
    <span class="item">{{ fahrenheit }} deg. Fahrenheit</span>
  </div>
</template>

<script>
export default {
  props: {
    temp: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      type: 'celsius',
      degrees: 0
    };
  },
  computed: {
    celsius() {
      if (this.type === 'celsius') return this.degrees;
      else return parseInt((this.degrees - 32) * 0.556, 10);
    },
    fahrenheit() {
      if (this.type === 'fahrenheit') return this.degrees;
      else return this.degrees * 1.8 + 32;
    }
  },
  created() {
    if (this.temp) {
      this.degrees = parseInt(this.temp, 10);
      this.type = String(this.temp).endsWith('f') ? 'fahrenheit' : 'celsius';
    }
  }
};
</script>
<style>
.temperature-container {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.item {
  padding: 5px 15px;
}
</style>