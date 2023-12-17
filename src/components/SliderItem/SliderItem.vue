<template>
  <div class="wrapper">
    <Progress />
    <div class="avatar-container">
      <avatar
        src="https://avatars.mds.yandex.net/i?id=3d55b5912a8a705f76220a22afcc5c5c-5843558-images-thumbs&n=13"
        nickname="Peter"
      />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>

    <uButton />
  </div>
</template>

<script>
import uButton from '../button/button.vue'
import avatar from '../avatar/avatar.vue'
import Progress from '../progress/progress.vue'

export default {
  title: 'SliderItem',
  components: {
    uButton,
    avatar,
    Progress
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px;
}

.avatar-container {
  margin-top: 10px;
}
.content-wrapper {
  margin: 20px 0;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
}
</style>
