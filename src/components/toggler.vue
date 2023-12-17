<template>
  <button class="toggler" :class="{ active: isOpened }" @click="handleToggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import icon from '@/icons/icon.vue'

export default {
  components: { icon },

  data () {
    return {
      isOpened: false
    }
  },

  methods: {
    handleToggle () {
      this.isOpened = !this.isOpened
      this.$emit('toggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped>
.toggler {
  display: inline-flex;
  align-items: center;
  padding: 0;

  &.active {
    .icon {
      transform: rotate(180deg);
    }
  }

  .text {
    color: #292929;
    margin-right: 5px;
  }
}
</style>
