<template>
  <div>
    <div class="topline">
      <v-topline>
        <template #headline>
          <u-logo />
          <v-user-actions />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="{ id, avatar, username } in stories" :key="id">
              <v-story-user-item :avatar="avatar" :username="username" @onPress="handlePress(id)" />
            </li>
          </ul>
        </template>
      </v-topline>
    </div>
    <v-feed class="feed">
      <template #repo>
        <h3 class="title">Vue.js</h3>
        <p class="text">JavaScript framework for building interactive web applications ⚡</p>
        <div class="actions">
          <div class="actions-wrapper">
            <button class="actions-btn">
              <icon name="star" />
              <span class="actions-btn__text">Star</span>
            </button>
            <div class="actions-count">150</div>
          </div>
          <div class="actions-wrapper">
            <button class="actions-btn">
              <icon name="fork" />
              <span class="actions-btn__text">Fork</span>
            </button>
            <div class="actions-count">4</div>
          </div>
        </div>
      </template>
    </v-feed>
    <v-feed class="feed">
      <template #repo>
        <h3 class="title">React.js</h3>
        <p class="text">Open source JavaScript library used for designing user interfaces</p>
        <div class="actions">
          <div class="actions-wrapper">
            <button class="actions-btn">
              <icon name="star" />
              <span class="actions-btn__text">Star</span>
            </button>
            <div class="actions-count">150</div>
          </div>
          <div class="actions-wrapper">
            <button class="actions-btn">
              <icon name="fork" />
              <span class="actions-btn__text">Fork</span>
            </button>
            <div class="actions-count">4</div>
          </div>
        </div>
      </template>
    </v-feed>
  </div>
</template>

<script>
import VTopline from '@/components/views/v-topline.vue'
import VUserActions from '@/components/views/v-user-actions.vue'
import Icon from '@/icons/icon.vue'
import ULogo from '@/components/ui/u-logo.vue'
import VStoryUserItem from '@/components/views/v-story-user-item.vue'
import stories from './data.json'
import VFeed from '@/components/views/v-feed.vue'

export default {
  name: 'FeedsPage',

  components: { VTopline, VUserActions, Icon, ULogo, VStoryUserItem, VFeed },

  data () {
    return {
      stories
    }
  },

  methods: {
    handlePress () {
      console.log('on press')
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
