import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    trendings: {
      data: [],
      isLoading: false,
      error: ''
    },
    readme: {
      data: {}
    }
  },
  getters: {
    getRepoById: (state) => (id) =>
      state.trendings.data.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS_DATA: (state, payload) => {
      state.trendings.data = payload
      state.trendings?.data.map((repo) => {
        repo.following = {
          status: false,
          loading: false,
          error: ''
        }
        return repo
      })
    },
    SET_TRENDINGS_LOADING: (state, payload) => {
      state.trendings.isLoading = payload
    },
    SET_TRENDINGS_ERROR: (state, payload) => {
      state.trendings.error = payload
    },
    SET_README: (state, payload) => {
      state.trendings.data = state.trendings.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.trendings.data = state.trendings.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
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
    },

    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },

    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          loading: true
        }
      })
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            error: 'Error'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
