<template>
  <div class="wrapper">
    <header class="header">
      <div class="g-container">
        <button class="logo" @click="$router.push({ name: 'home' })">
          <logo class="white" />
        </button>
        <button class="close-btn" @click="$router.push({ name: 'home' })">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import logo from '../components/logo.vue'
import icon from '../icons/icon.vue'
import storiesSlider from '../components/stories-slider.vue'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    storiesSlider
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #000;

  .header {
    margin-top: 3.0625rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .g-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .white {
        color: white;
      }

      .close-btn {
        color: white;
        width: 1.4063rem;
        height: 1.4063rem;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    padding: 37px;
  }
}
</style>
