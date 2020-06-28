<template>
  <div class="simcard-form-container">
    <h1 class="title">Testing => SimCard Form</h1>
    <form>
      <div class="simcard-form-container__element">
        <div class="simcard-form-container__label">
          <label for="simId">Sim Id:</label>
        </div>
        <input name="simId" type="text" v-model="simId" />
      </div>
      <div class="simcard-form-container__element">
        <div class="simcard-form-container__label">
          <label for="providers">Provider:</label>
        </div>
        <select
          class="custom-select"
          style="width:200px;"
          name="providers"
          id="providers"
          v-model="provider"
        >
          <option value></option>
          <option value="vodafone">Vodafone</option>
          <option value="tmobile">T-Mobile</option>
          <option value="mercedes">Another</option>
        </select>
      </div>
      <div class="simcard-form-container__element">
        <div class="simcard-form-container__label">
          <label for="status">Status:</label>
        </div>
        <select
          class="custom-select"
          style="width:200px;"
          name="status"
          id="status"
          v-model="status"
        >
          <option value></option>
          <option value="alive">alive</option>
          <option value="pending">pending</option>
          <option value="cancel">cancel</option>
        </select>
      </div>
      <div class="simcard-form-container__element">
        <div class="simcard-form-container__button">
          <button name="submitSimCard" @click.prevent="addNewSimCard()">Add SimCard</button>
        </div>
        <div class="simcard-form-container__button">
          <button
            name="addAndPrintSimCard"
            @click.prevent="addAndPrintSimCard()"
          >Add & Print SimCard</button>
        </div>
      </div>
      <div
        v-show="showNotification"
        name="successSubmit"
        class="success-submit fade-out"
      >The simcard was successfully added!</div>
      <div
        v-show="showSimCardInformation"
        name="simCardInformation"
        class="show-information fade-out"
      >SIM Card added!{{information}}</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      simCards: [],
      newSimCard: {},
      simId: '',
      provider: '',
      status: '',
      showNotification: false,
      showSimCardInformation: false,
      information: ''
    };
  },
  methods: {
    ...mapActions(['addSimCard']),

    addSimCardToState() {
      this.addSimCard({
        id: this.simId,
        provider: this.provider,
        status: this.status
      });
    },

    cleanUp() {
      this.simId = '';
      this.provider = '';
      this.status = '';
      const timeOutValue = 5000;
      if (this.showNotification) {
        setTimeout(() => (this.showNotification = false), timeOutValue);
      }
      if (this.showSimCardInformation) {
        setTimeout(() => (this.showSimCardInformation = false), timeOutValue);
      }
    },

    addNewSimCard() {
      if (this.simId === '') return;
      this.addSimCardToState();
      this.showNotification = true;
      this.cleanUp();
    },

    addAndPrintSimCard() {
      if (this.simId === '') return;

      this.information = `SIM Card Information: Id: ${this.simId}, 
        Provider: ${this.provider}, 
        Status: ${this.status}`;
      this.showSimCardInformation = true;
      this.addSimCardToState();
      this.cleanUp();
    }
  }
};
</script>
<style scoped>
.simcard-form-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 40px 0 0 0;
}

a {
  color: #42b983;
}
label {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: black;
  padding-top: 5px;
}

input {
  margin: 0 5px;
  width: 190px;
  height: 20px !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
}

input::placeholder {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding-top: 5px;
}

/* The container must be positioned relative: */
.custom-select {
  position: relative;
  /* font-family: Arial; */
  height: 25px;
  margin: 0 5px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}
.select-selected {
  background-color: DodgerBlue;
}

/* style the items (options), including the selected item: */
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}

.simcard-form-container__element {
  display: flex;
  padding: 0.2rem 0.5rem;
  width: 50rem;
}

.simcard-form-container__label {
  display: flex;
  width: 5rem;
}

.simcard-form-container__button {
  display: flex;
  padding: 0 0.5rem 0 0;
}

.success-submit {
  display: flex;
  margin: 10px;
  padding: 10px 5px;
  height: 20px;
  width: 60vw;
  border: 1px solid green;
  border-radius: 4px;
  color: green;
  font-weight: bold;
  font-size: 14px;
}

.show-information {
  display: flex;
  margin: 10px;
  padding: 10px 5px;
  height: 30px;
  width: 60vw;
  border: 1px solid blueviolet;
  border-radius: 4px;
  color: blueviolet;
  font-weight: bold;
  font-size: 14px;
}

.fade-out {
  animation: fadeOut ease 8s;
  -webkit-animation: fadeOut ease 8s;
  -moz-animation: fadeOut ease 8s;
  -o-animation: fadeOut ease 8s;
  -ms-animation: fadeOut ease 8s;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>