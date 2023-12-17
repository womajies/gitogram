<template>
  <div class="avatar-component">
    <div class="image" :class="{ 'image--bordered': active }">
      <img v-bind="$attrs">
    </div>
    <div class="username">
      {{ nickname }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nickname: String,
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
.avatar-component {
  display: flex;
  align-items: center;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;

    &--bordered {
      box-shadow: 0 0 5px 0 purple;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .username {
    font-size: 18px;
  }
}
</style>
