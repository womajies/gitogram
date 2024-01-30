import feed from './feed'
import { mount } from '@vue/test-utils'

describe('feed component', () => {
  it('run emit loadContent', async () => {
    const wrapper = mount(feed)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('render items list', async () => {
    const issue = {
      title: 'test title',
      user: {
        login: 'test login'
      }
    }

    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.find('.comments-list').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comments-item').length).toBe(6)
  })

  it('Don\'t run event contentLoaded if already has an issues list inside a toggler', async () => {
    const issue = {
      title: 'test title',
      user: {
        login: 'test login'
      }
    }

    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
