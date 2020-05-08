export default {
  SET_PROFILE (state, payload) {
    state[payload.field] = payload.value
  }
}
