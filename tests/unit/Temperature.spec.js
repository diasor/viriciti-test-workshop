import Temperature from "@/components/Temperature"
import { mount, shallowMount } from "@vue/test-utils"
import { nextTick } from "vue"

describe("testing computed properties", () => {
  it("calculates celsius without temperature parameter", () => {
    const { vm } = shallowMount(Temperature)
    expect(vm.celsius).toBe(0)
    vm.degrees = 23
    expect(vm.celsius).toBe(23)
  })

  it("calculates fahrenheit without temperature parameter", () => {
    const { vm } = shallowMount(Temperature)
    expect(vm.fahrenheit).toBe(32)
    vm.degrees = 16
    expect(vm.fahrenheit).toBe(60.8)
  })

  it("fahrenheit to celsius from paramter", () => {
    const { vm } = shallowMount(Temperature, {
      propsData: {
        temp: "50f",
      },
    })
    expect(vm.fahrenheit).toBe(50)
    expect(vm.celsius).toBe(10)
  })
})

describe("testing the watcher", () => {
  it("tests the changes as the watcher changes", async () => {
    const wrapper = mount(Temperature, {
      propsData: {
        temp: 40
      }
    })
    const { vm } = wrapper
    expect(vm.degrees).toBe(40)
    expect(vm.type).toBe('celsius')

    wrapper.setProps({ temp: '50f' })
    await nextTick()
    expect(vm.degrees).toBe(50)
    expect(vm.type).toBe('fahrenheit')
  })
    
})
