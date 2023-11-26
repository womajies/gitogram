<template>
  <div class="v-feed">

    <div class="repo" v-if="$slots.repo">
      <slot name="repo"></slot>
    </div>
    <div class="toggler">
      <u-toggler @onToggle="handleToggle" />
      <div class="comments" v-if="shown">
        <ul class="comments-list">
          <li class="comments-item" v-for="n in 5" :key="n">
            <v-comment text="Some text" username="John Doe" />
          </li>
        </ul>
      </div>
    </div>

    <div class="date">15 MAY</div>
  </div>
</template>

<script>
import UToggler from '@/components/ui/u-toggler.vue'
import VComment from '@/components/views/v-comment.vue'

export default {
  name: 'FeedItem',

  components: { UToggler, VComment },

  data () {
    return {
      shown: false
    }
  },

  methods: {
    handleToggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.v-feed {
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
