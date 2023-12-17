<template>
  <div class="feed">

    <div class="repo" v-if="$slots.repo">
      <slot name="repo"></slot>
    </div>
    <div class="toggler">
      <toggler @toggle="handleToggle" />
      <div class="comments" v-if="shown">
        <ul class="comments-list">
          <li class="comments-item" v-for="comment in comments" :key="comment">
            <comment text="Some text" username="John Doe" />
          </li>
        </ul>
      </div>
    </div>

    <div class="date">{{ convertedDate }}</div>
  </div>
</template>

<script>
import toggler from '@/components/toggler.vue'
import comment from '@/components/comment.vue'
import * as api from '../api'

export default {
  name: 'FeedItem',

  components: { toggler, comment },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      shown: false,
      comments: []
    }
  },

  computed: {
    convertedDate: function () {
      const localDate = new Date(this.item.updated_at)
      const resultDate = localDate.toLocaleString('en-US', { month: 'long', day: 'numeric' })

      return resultDate
    }
  },

  methods: {
    handleToggle (isOpened) {
      this.shown = isOpened

      if (isOpened) {
        this.getComments()
      }
    },

    async getComments () {
      try {
        const { data } = await api.comments.getComments(this.item)
        this.comments = data.items
      } catch (error) {
        console.error(error)
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
