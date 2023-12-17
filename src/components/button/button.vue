<template>
  <button class="button">
    <span class="button-text--hover">{{ hoverText ? hoverText : 'Unfollow' }}</span>
    <span class="button-text">
      <slot>Following</slot>
    </span>
  </button>
</template>

<script>
export default {
  title: 'uButton',
  props: {
    hoverText: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  min-width: 270px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #ffff;
  background-color: #31ae54;
  transition: 0.3s ease background-color;

  &:hover {
    background-color: gray;
    .button-text--hover {
      display: inline-block;
    }
    .button-text {
      display: none;
    }
  }

  &-text--hover {
    display: none;
  }
}
</style>
