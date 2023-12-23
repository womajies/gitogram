import person from './person.vue'

export default {
  title: 'Person',
  component: { person }
}

export const DefaultView = () => ({
  components: { person },
  template: `
    <person class="person" avatarImgSrc="https://picsum.photos/300/300" userName="Jhon Musa" />
  `
})

DefaultView.storyName = 'Стандартный вид'

export const ActiveView = () => ({
  components: { person },
  template: `
    <person
      nickname="User Name"
      src="https://loremflickr.com/300/300"
      alt="User photo"
      active
    />
  `
})

ActiveView.storyName = 'С границей у аватара'
