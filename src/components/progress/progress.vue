<template>
  <div class="progress" :class="{ 'active': isActive }">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  title: 'progress',
  emits: ['onFinish'],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: this.active
    }
  },
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  async mounted () {
    await this.$nextTick().then(() => {
      setTimeout(() => { this.isActive = true }, 0)
    })

    if (this.$refs.indicator) {
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    }
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped>
.progress {
  background: rgba(49, 174, 84, 0.3);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  .indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0%;
    background: #31ae54;
    transition: 5s width linear;
  }

  &.active {
    .indicator {
      width: 100%;
    }
  }
}
</style>
