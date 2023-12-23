<template>
  <div>
    <div class="topline">
      <topline>
        <template #headline>
          <logo />
          <user-actions />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="{ id, owner } in trendings" :key="id">
              <story-user-item
                :avatar="owner.avatar_url"
                :username="owner.login"
                @onPress="$router.push({ name: 'storiesSlide', params: { initialSlide: id } })"
              />
            </li>
          </ul>
        </template>
      </topline>
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <template v-else>
      <template v-for="item in trendings" :key="item.id">
        <feed
          class="feed"
          :item="item"
          :commentsUrl="item.comments_url"
          :publicDate="item.updated_at"
        >
          <template #repo>
            <h3 class="title">{{ item.name }}</h3>
            <p class="text">{{ item.description }}</p>
            <div class="actions">
              <div class="actions-wrapper">
                <button class="actions-btn">
                  <icon name="star" />
                  <span class="actions-btn__text">Star</span>
                </button>
                <div class="actions-count">{{ item.stargazers_count }}</div>
              </div>
              <div class="actions-wrapper">
                <button class="actions-btn">
                  <icon name="fork" />
                  <span class="actions-btn__text">Fork</span>
                </button>
                <div class="actions-count">{{ item.forks_count }}</div>
              </div>
            </div>
          </template>
        </feed>
      </template>
    </template>
  </div>
</template>

<script>
import topline from '@/components/topline.vue'
import userActions from '@/components/user-actions.vue'
import icon from '@/icons/icon.vue'
import logo from '@/components/logo.vue'
import storyUserItem from '@/components/story-user-item.vue'
import stories from './data.json'
import feed from '@/components/feed.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Feeds',

  components: { topline, userActions, icon, logo, storyUserItem, feed },

  data () {
    return {
      stories
    }
  },

  computed: {
    ...mapState({
      trendings: state => state.trendings.posts.data,
      isLoading: state => state.trendings.posts.isLoading
    })
  },

  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    })
  },

  async created () {
    await this.fetchTrendings()
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

.loading {
  width: 980px;
  margin: 0 auto 24px;
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
