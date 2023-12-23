import storie from './storie.vue'

export default {
  title: 'Storie',
  component: { storie }
}

export const DefaultView = () => ({
  components: { storie },
  template: `
    <storie :data="{}" />
  `
})
