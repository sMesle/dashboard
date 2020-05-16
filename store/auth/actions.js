import axios from 'axios'
// TODO: token
export default {
  async SET_AUTH_REQUEST ({ commit }, user) {
    commit('AUTH_REQUEST')
    try {
      const res = await axios.post('/login', user)
      commit('AUTH_SUCCESS', '', res.config.data)
    } catch (error) {
      commit('AUTH_ERROR', error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      if (error.response && error.response.status === 404) {
        throw new Error('Bad URL')
      }
      throw error
    }
  },
  SET_AUTH_LOGOUT ({ commit }) {
    commit('AUTH_LOGOUT')
  },
  async SET_AUTH_REGISTER ({ commit }, user) {
    commit('AUTH_REQUEST')
    try {
      const res = await axios.post('/register', user)
      commit('AUTH_REGISTER', '', res.config.data)
    } catch (error) {
      commit('AUTH_ERROR', error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      if (error.response && error.response.status === 404) {
        throw new Error('Bad URL')
      }
      throw error
    }
  }
}
