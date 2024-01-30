<template>
  <div style="padding-bottom: 48px;">
    <div class="topline">
      <topline>
        <template #headline>
          <logo class="logo" />
          <user-actions :avatar="user.avatar_url" />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="{ id, owner } in getOnlyUnstarredRepos" :key="id">
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
      <template v-for="item in starred" :key="item.id">
        <feed
          class="feed"
          :publicDate="item.updated_at"
          :issues="item.issues"
          @loadContent="loadIssues({ id: item.id, owner: item.owner.login, repo: item.name })"
        >
        <template #repo>
            <h3 class="title"><a class="title__link" :href="item.html_url">{{ item.name }}</a></h3>
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
import feed from '@/components/feed/feed.vue'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'Feeds',

  components: { topline, userActions, icon, logo, storyUserItem, feed },

  setup () {
    const { dispatch, state, getters } = useStore()
    const loadIssues = ({ id, owner, repo }) => {
      dispatch('starred/fetchIssuesForRepo', { id, owner, repo })
    }

    onMounted(() => {
      dispatch('trendings/fetchTrendings')
      dispatch('starred/fetchStarred')
      dispatch('user/fetchUser')
    })

    return {
      trendings: computed(() => state.trendings.trendings.data),
      user: computed(() => state.user.user.data),
      isLoading: computed(() => state.trendings.trendings.isLoading),
      starred: computed(() => state.starred.starred.data),
      getOnlyUnstarredRepos: computed(() => getters.getOnlyUnstarredRepos),
      loadIssues
    }
  },

  data () {
    return {
      issues: []
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

  .logo {
    color: #000000;
  }

  .stories {
    display: flex;
    gap: 43px;
    overflow: hidden;
    padding: 6px 0 0 6px;
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

    &__link {
      text-decoration: none;
      color: inherit;
      transition: 0.3s ease color;

      &:hover {
        color: blue;
        text-decoration: underline;
      }
    }
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
