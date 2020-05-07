export default {
  EDIT_PROJECT (state, payload) {
    state.projects[payload.id].progress = payload.progress
    state.projects[payload.id].deadline = payload.deadline
  },
  DELETE_PROJECT (state, id) {
    state.projects.splice(id, 1)
  }
}
