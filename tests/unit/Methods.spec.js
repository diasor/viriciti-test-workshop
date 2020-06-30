jest.mock("axios", () => ({
  get: () => Promise.resolve({ data:  { message: ["pic 1, pic 2"] }})
}))
import DogList from "@/components/DogList"
import { mount } from "@vue/test-utils"

describe("testing methods", () => {

    it("tests buildUrl method", () => {
        const { buildUrl } = DogList.methods
        expect(buildUrl("german-shepherd")).toBe('https://dog.ceo/api/breed/german-shepherd/images')
        expect(buildUrl('terrier')).toBe('https://dog.ceo/api/breed/terrier/images')
    })

    it('tests fetchDogs', async () => {
      const wrapper = mount(DogList)
      wrapper.vm.buildUrl = () => "https://dog.ceo/api/breed/hound/images"
      const spy = jest.spyOn(wrapper.vm, "fetchDogs")

      const result = await wrapper.vm.fetchDogs()
      expect(result).toEqual({ data: { message: ["pic 1, pic 2"] } })
      expect(wrapper.vm.dogs).toEqual(["pic 1, pic 2"] )

      expect(spy).toHaveBeenCalledTimes(1)
    })
})