import SimCardForm from "@/components/SimCardForm"
import { mount } from "@vue/test-utils"
import { nextTick } from "vue"

describe("testing inputs on the SimCard form", () => {
  const wrapper = mount(SimCardForm)
  expect(wrapper).toMatchSnapshot()
  const form = wrapper.find("form")

  it("finds the simId input", () =>
    expect(form.find('input[name="simId"]').exists()).toBe(true))

  it("finds the provider Select input", () =>
    expect(form.find('select[name="providers"]').exists()).toBe(true))

  it("finds the status Select input", () =>
    expect(form.find('select[name="status"]').exists()).toBe(true))

  it("finds the submit button", () =>
    expect(form.find('button[name="submitSimCard"]').exists()).toBe(true))
})

describe("setting values and submiting the SimCard form", () => {
  const wrapper = mount(SimCardForm)
  // mock the addNewSimCard
  wrapper.vm.addNewSimCard = jest.fn()
  expect(wrapper).toMatchSnapshot()
  const form = wrapper.find("form")
  const providerSelector = 'select[name="providers"]'
  const statusSelector = 'select[name="status"]'

  it("follows the user through the form and submits", async () => {
    // setting SimId input
    const inputSimId = form.find('input[name="simId"]')
    inputSimId.setValue("123456")
    expect(inputSimId.element.value).toBe("123456")

    // test that the provider select input exists, has the expected amount of options and that it has set the "vodafone" option
    const providerSelectInput = form.find(providerSelector)
    expect(providerSelectInput.findAll("option").length).toBe(4)
    form
      .find(providerSelector)
      .findAll("option")
      .at(1)
      .setSelected()
    expect(providerSelectInput.element.value).toBe("vodafone")

    // test that it was properly set
    const statusSelectInput = form.find(statusSelector)
    expect(statusSelectInput.findAll("option").length).toBe(4)
    form
      .find(statusSelector)
      .findAll("option")
      .at(1)
      .setSelected()
    expect(statusSelectInput.element.value).toBe("alive")

    // find and test the button  form.trigger("submit")
    const submitButton = form.find('button[name="submitSimCard"]')
    submitButton.trigger("click")

    // wait and test that afterwards everything is correct again
    await nextTick()
    expect(form.find('div[name="successSubmit"]').exists()).toBe(true)
  })
})
