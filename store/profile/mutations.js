export default {
  SET_PROFILE (state, payload) {
    state.username = payload.username
    state.firstName = payload.firstName
    state.lastName = payload.lastName
    state.email = payload.email
    state.company = payload.company
    state.about = payload.about
  }
}
