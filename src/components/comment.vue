<template>
  <div class="comment">
    <p>
      <span class="username">{{ username }}:<br></span>
      <span class="text">{{ text }}</span>
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
.comment {
  margin-top: 24px;
}
p {
  color: #404040;
}
.username {
  font-weight: 700;
}
.text {
  display: inline-block;
  text-indent: 24px;
}
</style>
