<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li class="stories-item" ref="sliderItem" v-for="(trending, index) in trendings" :key="trending.id">
          <storie
            :data="getStoryData(trending)"
            :active="slideActiveIndex === index"
            :buttonsShown="activeButtons"
            :loading="slideActiveIndex === index && isLoading"
            @onNextSlide="handleSlideClick(index + 1)"
            @onPrevSlide="handleSlideClick(index - 1)"
            @onProgressFinish="handleSlideClick(index === trendings.length - 1 ? 0 : index + 1)"
            @onFollow="starRepo"
            @onUnFollow="unStarRepo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storie from './storie/storie.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'storiesSlider',
  components: {
    storie
  },

  props: {
    initialSlide: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      slideActiveIndex: 0,
      sliderPosition: 0,
      isLoading: false,
      buttonsShown: true
    }
  },

  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings.data
    }),

    activeButtons () {
      if (!this.buttonsShown) return []
      if (this.slideActiveIndex === 0) return ['next']
      if (this.slideActiveIndex === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },

  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),

    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },

    async fetchActiveSlideReadme () {
      const { id, owner, name } = this.trendings[this.slideActiveIndex]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },

    moveSlider (slideIndex) {
      const { slider, sliderItem } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(sliderItem[this.slideActiveIndex]).getPropertyValue(
          'width'
        ),
        10
      )
      this.slideActiveIndex = slideIndex
      this.sliderPosition = -(slideWidth * slideIndex)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },

    async loadReadme () {
      this.isLoading = true
      this.buttonsShown = false
      try {
        await this.fetchActiveSlideReadme()
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
        this.buttonsShown = true
      }
    },

    handleInitialSlide () {
      if (this.initialSlide) {
        const index = this.trendings.findIndex(
          (item) => item.id === this.initialSlide
        )

        this.handleSlideClick(index)
      }
    },

    async handleSlideClick (slideIndex) {
      if (slideIndex >= 0 && slideIndex < this.trendings.length) {
        this.moveSlider(slideIndex)
        await this.loadReadme()
      }
    }
  },

  async mounted () {
    if (this.trendings.length) {
      this.handleInitialSlide()
    } else {
      await this.fetchTrendings().then(() => {
        this.handleInitialSlide()
      })
    }
    await this.loadReadme()
  }
}
</script>

<style lang="scss" scoped>
.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
}

.stories-container {
  position: relative;
  height: 660px;
}
</style>
