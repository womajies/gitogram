<template>
  <div class="v-topline">
    <div class="g-container">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-topline {
  background-color: #fafafa;
  border-bottom: 1px solid #c6c6c8;
  padding: 42px 0 32px;
}

.content {
  margin-top: 50px;
}

.headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
