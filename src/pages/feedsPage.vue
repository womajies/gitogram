<template>
  <div>
    <Feeds :items="items" />
  </div>
</template>

<script>
import Feeds from '@/components/feeds.vue'
import * as api from '../api'

export default {
  name: 'FeedsPage',

  components: { Feeds },

  data () {
    return {
      items: []
    }
  },

  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.topline {
  margin-bottom: 32px;

  .list {
    display: flex;
    align-items: center;
    gap: 20px;

    &-item {
      display: flex;
    }
  }

  .stories {
    display: flex;
    gap: 43px;
  }
}

.feed {
  .title {
    margin-bottom: 15px;
    color: #292929;
    font-size: 26px;
    font-weight: 700;
    line-height: 28px;
  }

  .text {
    margin-bottom: 32px;
  }

  .actions {
    display: flex;

    &-wrapper {
      display: flex;
      height: 28px;
      border: 1px solid #E0E1E2;

      &:first-child {
        border-radius: 6px 0 0 6px;
      }

      &:last-child {
        border-radius: 0 6px 6px 0;
      }
    }

    &-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0px 12px;

      &__text {
        color: #24292E;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
      }
    }

    &-count {
      display: flex;
      align-items: center;
      padding: 0px 12px;
      border-left: 1px solid #E0E1E2;
      color: #24292E;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
    }
  }
}
</style>
