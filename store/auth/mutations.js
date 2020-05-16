export default {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.isLogged = 'Logged In'
  },
  AUTH_ERROR (state) {
    state.status = 'error'
    state.isLogged = ''
  },
  AUTH_LOGOUT (state) {
    state.status = ''
    state.token = ''
    state.user = {}
    state.isLogged = 'Logged Out'
  },
  AUTH_REGISTER (state, token, user) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.isLogged = 'Logged In'
  }
}
