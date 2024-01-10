<template>
  <ul class="list">
    <li class="list-item">
      <button class="btn" title="Home" @click="$router.push({ name: 'home' })">
        <icon class="icon" name="home" />
      </button>
    </li>
    <li class="list-item">
      <button class="btn" title="Profile" @click="getUser">
        <img :src="avatar ? avatar : require('@/assets/img/avatar.png')" width="37" height="37" alt="Avatar">
      </button>
    </li>
    <li v-if="isAuth" class="list-item">
      <button class="btn" title="Sign-out" @click="logout">
        <icon class="icon" name="signout" />
      </button>
    </li>
  </ul>
</template>

<script>
import * as api from '@/api'
import icon from '@/icons/icon.vue'
import { mapActions } from 'vuex'

export default {
  name: 'FeedsPage',

  components: { icon },

  props: {
    avatar: {
      type: String,
      required: false
    }
  },

  computed: {
    isAuth () {
      return localStorage.getItem('token')
    }
  },

  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    getUser () {
      try {
        api.user.getUser()
      } catch (error) {
        console.log(error)
      }
    }
  }
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
