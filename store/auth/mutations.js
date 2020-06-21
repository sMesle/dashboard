export default {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, user) {
    state.status = 'success'
    state.user = user
    state.isLogged = 'Logged In'
  },
  AUTH_ERROR (state) {
    state.status = 'error'
    state.isLogged = ''
  },
  AUTH_LOGOUT (state) {
    state.status = ''
    state.user = {}
    state.isLogged = 'Logged Out'
  },
  AUTH_REGISTER (state, user) {
    state.status = 'success'
    state.user = user
    state.isLogged = 'Logged In'
  }
}
