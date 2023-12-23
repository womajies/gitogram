<template>
  <div class="c-person">
    <a href="#" class="profile-link">
      <img :src="avatarImgSrc" alt="" class="profile-link__avatar">
    </a>
    <div class="person-info">
      <div class="person-info__username">
        {{ userName }}
      </div>
      <div class="person-info__connections connections" v-if="reposts">
        <span class="connections__number">{{ reposts }}</span> reposts <span class="connections__number">{{ watchers
        }}</span> <a href="#" class="connections__link">watchers</a>
      </div>
      <div class="person-info__realName" v-if="realName">
        {{ realName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  props: {
    avatarImgSrc: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    realName: {
      type: String
    },
    reposts: {
      type: Number
    },
    watchers: {
      type: Number
    }
  }
}
</script>

<style scoped lang="scss">
.c-person {
  display: flex;
  align-items: center;

  .profile-link {
    margin-right: 0.875rem;
    display: flex;
    align-items: center;

    &__avatar {
      display: inline-block;
      // width: 2.75rem;
      // height: 2.75rem;
      border-radius: 50%;
    }
  }

  .person-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__username {
      font-size: 18px;
      font-weight: bold;
    }

    .connections {
      font-size: 12px;

      &__link {
        color: rgba(49, 174, 84, 1);

      }

      &__number {
        font-size: 14px;
        font-weight: bold;
      }

      &__number:nth-child(2) {
        margin-left: 0.375rem;
      }
    }

    &__realName {
      font-size: 14px;
      color: rgba(158, 158, 158, 1)
    }
  }
}
</style>
