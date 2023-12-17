import uProgress from './progress.vue'

export default {
  title: 'Progress bar',
  component: { uProgress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'When progress loaded'
    }
  }
}
export const DefaultView = (args) => ({
  components: { uProgress },
  data () {
    return { args }
  },
  template: '<u-progress @onFinish="args.onFinish" />'
})
