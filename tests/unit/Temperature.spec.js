import Temperature from "@/components/Temperature"
import { mount } from "@vue/test-utils"

describe("testing computed properties", () => {
  it("calculates celsius without temperature parameter", () => {
    const { vm } = mount(Temperature)
    expect(vm.celsius).toBe(0)
    vm.degrees = 23
    expect(vm.celsius).toBe(23)
  })

  it("calculates fahrenheit without temperature parameter", () => {
    const { vm } = mount(Temperature)
    expect(vm.fahrenheit).toBe(32)
    vm.degrees = 16
    expect(vm.fahrenheit).toBe(60.8)
  })

  it("fahrenheit to celsius from paramter", () => {
    const { vm } = mount(Temperature, {
      propsData: {
        temp: "50f",
      },
    })
    expect(vm.fahrenheit).toBe(50)
    expect(vm.celsius).toBe(10)
  })
})
