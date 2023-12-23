import * as api from '@/api'

export const trendings = {
  namespaced: true,
  state: {
    posts: {
      data: {},
      isLoading: false,
      error: ''
    },
    readme: {
      data: {}
    }
  },
  getters: {
    getRepoById: (state) => (id) =>
      state.posts.data.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS_DATA: (state, payload) => {
      state.posts.data = payload
    },
    SET_TRENDINGS_LOADING: (state, payload) => {
      state.posts.isLoading = payload
    },
    SET_TRENDINGS_ERROR: (state, payload) => {
      state.posts.error = payload
    },
    SET_README: (state, payload) => {
      state.posts.data = state.posts.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      commit('SET_TRENDINGS_LOADING', true)
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS_DATA', data.items)
      } catch (error) {
        commit('SET_TRENDINGS_ERROR', error)
      } finally {
        commit('SET_TRENDINGS_LOADING', false)
      }
    },

    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id)
      if (currentRepo.readme !== undefined) return

      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
        commit('SET_README', {
          id,
          content: 'No readme for this repository found'
        })
      }
    }
  }
}
