<template>
  <button class="story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" class="img" alt="User avatar">
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.story-user-item {
  display: grid;
  gap: 16px;
  padding-bottom: 4px;

  &:hover {
    .username {
      color: #31AE54;
    }

    .avatar::before {
      border-color: #31AE54;
    }
  }

  .avatar {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border: 2px solid #a6328d;
      border-radius: 50%;
      transition: border-color .3s ease;
    }
  }

  .img {
    border-radius: 50%;
  }

  .username {
    color: #000;
    font-size: 12px;
    line-height: 10px;
    word-break: break-all;
    transition: color .3s ease;
  }
}
</style>
