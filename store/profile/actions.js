export default {
  EDIT_PROFILE ({ commit }, userData) {
    commit('SET_PROFILE', userData)
  }
  // EDIT_PROFILE ({ commit }, context, userData) {
  //   const userCopy = { ...context.user }
  //   console.log(userCopy) /* eslint no-console: ["error", { allow: ["log", "error"] }] */
  //   userCopy[userData.property] = userData.value
  //   commit('SET_PROFILE', userCopy)
  // }
}
