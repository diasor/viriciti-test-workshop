import Vuex from "vuex"
import { mount, shallowMount, createLocalVue } from "@vue/test-utils"
import SimCardList from "@/components/SimCardList"
import simCardStore from "@/store/index"

describe("testing SimCards store", () => {
  const VueWithVuex = createLocalVue()
  VueWithVuex.use(Vuex)

  it("loads the store and tests the getter ", () => {
    const store = new Vuex.Store(simCardStore)
    const wrapper = shallowMount(SimCardList, {
      localVue: VueWithVuex,
      store,
    })
    store.state.simCards.push({
      id: "12356",
      provider: "Vodafone",
      status: "alive",
    })

    expect(wrapper.vm.simCards).toEqual([
      { id: "12356", provider: "Vodafone", status: "alive" },
    ])
  })

  it("tests addSimCard store action and tests the getter", () => {
    const store = new Vuex.Store(simCardStore)
    const wrapper = shallowMount(SimCardList, {
      localVue: VueWithVuex,
      store,
    })
    wrapper.vm.addSimCard({
      id: "789999",
      provider: "T-Mobile",
      status: "alive",
    })
    expect(wrapper.vm.simCards).toEqual([
      { id: "789999", provider: "T-Mobile", status: "alive" },
    ])
  })
})
