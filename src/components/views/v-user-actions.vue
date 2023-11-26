<template>
  <ul class="list">
    <li class="list-item">
      <button class="btn" title="Home">
        <icon class="icon" name="home" />
      </button>
    </li>
    <li class="list-item">
      <button class="btn" title="Profile">
        <img src="@/assets/img/avatar.png" alt="Avatar">
      </button>
    </li>
    <li class="list-item">
      <button class="btn" title="Sign-out">
        <icon class="icon" name="signout" />
      </button>
    </li>
  </ul>
</template>

<script>
import Icon from '@/icons/icon.vue'

export default {
  name: 'FeedsPage',

  components: { Icon }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  gap: 20px;

  &-item {
    display: flex;
  }

  .btn {
    color: #262626;
    transition: color 0.3s ease;

    &:hover {
      color: #A6328D;
    }
  }

  .icon {
    width: 32px;
  }
}
</style>
