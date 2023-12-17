<template>
  <div class="comment">
    <p>
      <span class="username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #404040;
}
.username {
  font-weight: 700;
}
</style>
