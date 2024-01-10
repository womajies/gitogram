<template>
  <button
    class="button"
    :class="{ loading: loading, disable: disabled }"
    :disabled="disabled"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <Spinner v-if="loading" />
    <template v-else>
      <span class="button__txt">
        <slot v-if="!isHover || !hoverText"></slot>
        <span v-if="isHover && hoverText">{{ hoverText }}</span>
      </span>
      <span v-if="icon" class="button__icon">
        <slot name="button-icon"></slot>
      </span>
    </template>
  </button>
</template>

<script>
import Spinner from '../spinner'

export default {
  name: 'Button',
  components: { Spinner },
  emits: ['onMouseover', 'onMouseleave'],
  data () {
    return {
      isHover: false
    }
  },
  props: {
    hoverText: {
      type: String,
      required: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onMouseover () {
      this.isHover = true
      this.$emit('onMouseover', this.isHover)
    },
    onMouseleave () {
      this.isHover = false
      this.$emit('onMouseleave', this.isHover)
    }
  }
}
</script>

<style lang="scss">
.button {
  min-width: 260px;
  height: 44px;
  background: #31ae54;
  border-radius: 6px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #ffffff;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
  }

  &__icon {
    margin-left: 10px;
  }

  &.disable,
  &[disabled] {
    opacity: 0.8;
    pointer-events: none;
    cursor: not-allowed;
  }

  &.loading {
    .spinner {
      width: 18px;
      height: 18px;
    }
    svg {
      color: #ffffff;
    }
  }
}
</style>
