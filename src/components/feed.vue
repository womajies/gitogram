<template>
  <div class="feed">

    <div class="repo" v-if="$slots.repo">
      <slot name="repo"></slot>
    </div>
    <div class="toggler">
      <toggler @toggle="handleToggle" />
      <div class="comments" v-if="shown">
        <spinner v-if="shown && isLoading" />
        <ul v-if="issues?.length > 0" class="comments-list">
          <li class="comments-item" v-for="issue in issues" :key="issue?.id">
            <comment :text="issue?.body" :username="issue?.user.login" />
          </li>
        </ul>
        <div v-if="!isLoading && issues?.length === 0">
          Нет комментариев
        </div>
      </div>
    </div>

    <div class="date">{{ convertedDate }}</div>
  </div>
</template>

<script>
import toggler from '@/components/toggler.vue'
import comment from '@/components/comment.vue'
import spinner from '@/components/spinner.vue'
import { mapState } from 'vuex'

export default {
  name: 'FeedItem',

  components: { toggler, comment, spinner },

  props: {
    publicDate: {
      type: String,
      required: false
    },
    issues: {
      type: Array,
      default: () => { return [] }
    }
  },

  data () {
    return {
      shown: false
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.starred.issues.isLoading
    }),

    convertedDate: function () {
      const localDate = new Date(this.publicDate)
      const resultDate = localDate.toLocaleString('en-US', { month: 'long', day: 'numeric' })

      return resultDate
    }
  },

  methods: {
    handleToggle (isOpened) {
      this.shown = isOpened

      if (isOpened) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feed {
  width: 980px;
  margin: 0 auto 24px;

  .repo {
    padding: 24px 20px;
    border: 1px solid #F1F1F1;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.07);
  }

  .toggler {
    margin-top: 18px;
  }

  .date {
    margin-top: 10px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.40);
  }
}
</style>
