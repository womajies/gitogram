import avatar from './avatar.vue'

export default {
  title: 'Avatar',
  component: { avatar }
}

export const DefaultView = () => ({
  components: { avatar },
  template: `
    <avatar
      nickname="User Name"
      src="https://loremflickr.com/300/300"
      alt="User photo"
    />
  `
})

DefaultView.storyName = 'Стандартный вид'

export const ActiveView = () => ({
  components: { avatar },
  template: `
    <avatar
      nickname="User Name"
      src="https://loremflickr.com/300/300"
      alt="User photo"
      active
    />
  `
})

ActiveView.storyName = 'С границей у аватара'
