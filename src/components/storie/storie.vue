<template>
  <div class="c-storie" :class="{ active }">
    <div class="storie__header">
      <Progress v-if="active" @onFinish="$emit('onProgressFinish')" />
      <person class="person" :avatarImgSrc="data.userAvatar" :userName="data.username" />
    </div>
    <div class="storie__content">
      <div v-if="loading" class="loader">
        <spinner />
      </div>
      <div class="info" v-else>
        <div v-if="data.content?.length" class="info-text" v-html="data.content"></div>
        <placeholder v-else :paragraphs="2" />
      </div>
    </div>
    <div class="storie__footer">
      <Button
        :loading="data.following.loading"
        :disabled="data.following.loading || !active"
        @click="data.following.status ? $emit('onUnFollow', data.id) : $emit('onFollow', data.id)"
      >
        {{ data.following.status ? 'Unfollow' : 'Follow' }}
      </Button>
    </div>
    <template v-if="active">
      <button v-if="buttonsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
        <span class="icon">
          <icon name="left" />
        </span>
      </button>
      <button v-if="buttonsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
        <span class="icon">
          <icon name="left" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import button from '../button/button.vue'
import person from '../person/person.vue'
import progress from '../progress/progress.vue'
import spinner from '../spinner.vue'
import placeholder from '../placeholder.vue'
import icon from '../../icons/icon.vue'

export default {
  name: 'storie',
  components: {
    Button: button,
    person,
    Progress: progress,
    spinner,
    placeholder,
    icon
  },
  emits: ['onNextSlide', 'onPrevSlide', 'onProgressFinish', 'onFollow', 'onUnFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    buttonsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.c-storie {
  .person {
    .profile-link {

      &__avatar {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .person-info {

    &__username {
      font-size: 14px;
    }
  }
}
</style>

<style scoped lang="scss">
.c-storie {
  width: 100%;
  max-width: 376px;
  height: 664px;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: -50%;
  transform: scale(0.8);
  transition: 0.4s ease;

  &.active {
    position: relative;
    z-index: 1;
    transform: scale(1);

    & .storie__content {
      overflow: auto;
    }
  }

  .storie__header {
    width: 100%;
    padding: 0.5rem 0.5rem 0.8125rem;
    border-bottom: 1px solid #CACACA;

    .person {
      margin-top: 0.75rem;
    }
  }

  .storie__content {
    overflow: hidden;
    flex: 1;
    padding: 0.75rem 1.125rem;
    scrollbar-width: 0.3125rem;
    scrollbar-color: #AFAFAF;

    &::-webkit-scrollbar {
      width: 1.1875rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 0.625rem;
      border: 0.4375rem solid transparent;
      box-shadow: inset 0px 0px 10px #AFAFAF;
    }
  }

  .storie__footer {
    border-top: 1px solid #CACACA;
    padding: 1.5rem 3.25rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      padding: 0.6875rem 0;
    }
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 36px;
    z-index: 1;

    &:hover svg {
      color: #31ae54;
    }

    &-next,
    &-prev {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #ffffff;
      border: 2px solid #000000;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      user-select: none;
      cursor: pointer;

      svg {
        width: 18px;
        height: 17px;
      }
    }

    &-prev {
      right: calc(100% + 16px);
    }

    &-next {
      left: calc(100% + 16px);

      svg {
        transform: rotate(-180deg);
      }
    }
  }

}
</style>
