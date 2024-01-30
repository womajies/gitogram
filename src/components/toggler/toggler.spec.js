import toggler from './toggler'
import { shallowMount } from '@vue/test-utils'

describe('toggler component', () => {
  it('runs test correctly', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('Show issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
