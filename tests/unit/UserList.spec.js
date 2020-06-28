import UserList from "@/components/UserList"
import { mount } from "@vue/test-utils"
import { name } from "faker"
import { nextTick } from "vue"

function getRadomUsers(amount = 1) {
  let i = 1
  const users = []
  while (i <= amount) {
    users.push(name.findName())
    i++
  }
  return users
}

describe("UserList.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: getRadomUsers(3),
      },
    })
    const li = wrapper.findAll("li")
    expect(li.length).toBe(wrapper.props("users").length)
  })
})

describe.skip("user list component", () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: getRadomUsers(3),
    },
  })
  it("component renders the users", () => {
    const li = wrapper.findAll("li")
    expect(li.length).toBe(wrapper.props("users").length)
  })

  it("filters the input on the user list", async () => {
    const pickNameForFilter = wrapper.props("users")[1]
    console.log("selected name", pickNameForFilter)

    wrapper.find("input").setValue(pickNameForFilter)
    await nextTick()

    const finalLi = wrapper.find("li")
    expect(finalLi.text()).toBe(pickNameForFilter)
  })
})
