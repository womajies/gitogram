<template>
  <div class="placeholder" v-if="!simple">
    <div class="placeholder__img"></div>
    <div class="placeholder__txt">
      <div class="placeholder__txt-block" v-for="item in paragraphs" :key="item"></div>
    </div>
  </div>
  <div class="placeholder" v-else>
    <div class="placeholder__line" v-for="item in paragraphs" :key="item"></div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 1
    },
    simple: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.placeholder {
  &__img {
    background: #DEDEDE;
    height: 136px;
    border-radius: 4px;
    margin: 0 auto 22px;
  }

  &__txt {
    &-block {
      height: 14px;
      background-image: linear-gradient(90deg, #EAEAEA 0px, #cccccc 50%, #EAEAEA 100%);
      background-size: 600px;
      animation: shine-lines 2.6s infinite linear;
      width: 90%;
      border-radius: 4px;
      margin: 0px 0 calc(30px * 2 + 18px);
      position: relative;

      &:before {
        content: "";
        position: absolute;
        height: inherit;
        width: 67%;
        background: inherit;
        border-radius: inherit;
        top: calc(100% + 8px);
        left: 0;
        animation: inherit;
      }

      &:after {
        content: "";
        position: absolute;
        height: inherit;
        width: 38%;
        background: inherit;
        border-radius: inherit;
        top: calc(100% + 30px);
        left: 0;
        animation: inherit;
      }
    }
  }

  &__line {
    width: 70%;
    height: 14px;
    margin-top: 8px;
    background-image: linear-gradient(90deg, #EAEAEA 0px, #cccccc 50%, #EAEAEA 100%);
    background-size: 600px;
    animation: shine-lines 2.6s infinite linear;
    border-radius: 4px;
  }
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }

  100% {
    background-position: 600px;
  }
}
</style>
