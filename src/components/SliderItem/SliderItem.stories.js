import sliderItem from './SliderItem.vue'

export default {
  title: 'Slider Item',
  component: { sliderItem }
}

export const DefaultView = () => ({
  components: { sliderItem },
  template: `
    <sliderItem>
      <h1> Some strange context  Some strange context Some strange context Some strange context Some strange context</h1>
    </sliderItem>
  `
})
