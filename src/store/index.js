import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'

export default createStore({
  getters: {
    getOnlyUnstarredRepos (state) {
      return state.trendings.trendings.data?.filter((trendingsRepo) => !state.starred.starred.data?.some(starredRepo => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    trendings,
    starred,
    user
  }
})
