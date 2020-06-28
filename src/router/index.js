import Vue from "vue"
import Router from "vue-router"
import Temperature from "../components/Temperature.vue"
import SimCardForm from "../components/SimCardForm"
import SimCardsList from "../components/SimCardsList"
import DogList from "../components/DogList"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Temperature,
      props: (route) => ({ temp: route.query.temp }),
    },
    {
      path: "/simform",
      component: SimCardForm,
    },
    {
      path: "/vuex",
      component: SimCardsList,
    },
    {
      path: "/dogs",
      component: DogList,
    },
  ],
})
