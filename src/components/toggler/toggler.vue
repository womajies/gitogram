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

  emits: ['toggle'],

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
  color: #292929;
  transition: 0.3s ease color;

  &:hover {
    color: #31AE54;
  }

  &.active {
    .icon {
      transform: rotate(180deg);
    }
  }

  .text {
    margin-right: 5px;
  }
}
</style>
