import uButton from './button.vue'

export default {
  title: 'Button',
  component: { uButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { uButton },
  data () {
    return { args }
  },
  template: '<uButton v-bind="args">Following</uButton>'
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow'
}
