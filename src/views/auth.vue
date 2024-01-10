<template>
  <section class="auth">
    <div class="auth__content">
      <div class="auth__left">
        <logo class="logo" />
        <h2>More than just one repository. This is our digital world.</h2>
        <Button :hoverText="`Authorize with github`" icon @click="getAuthPersonalCode">
          Authorize with github
          <template #btn-icon>
            <icon name="github" />
          </template>
        </Button>
      </div>
    </div>
    <footer class="auth__footer">
      &copy;&nbsp;Gitogram
    </footer>
  </section>
</template>

<script>
import logo from '@/components/logo.vue'
import button from '@/components/button/button.vue'
import icon from '@/icons/icon.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    logo,
    Button: button,
    icon
  },

  methods: {
    ...mapActions({
      getAuthPersonalCode: 'user/getAuthPersonalCode',
      authUserByCode: 'user/authUserByCode'
    })
  },

  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const token = await this.authUserByCode(code)

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'home' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: #000000;
}

.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
    background: url("@/assets/img/notebook.png") no-repeat calc(100% - 142px) 50%;
    display: flex;
    align-items: center;
  }

  &__left {
    width: 50%;
    box-sizing: border-box;
    padding-left: 142px;
    text-align: left;

    h2 {
      margin: 24px 16px 54px 0;
      max-width: 256px;
      font-size: 18px;
    }
  }

  &__footer {
    height: 84px;
    box-sizing: border-box;
    border-top: rgba(#3C3C43, 0.3) solid 1px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
}
</style>
