export default {
  CHANGE_TASK_SELECT (state, id) {
    state.tasks[id].selected = !state.tasks[id].selected
  },
  CHANGE_MESSAGE_STAR (state, id) {
    state.messages[id].starred = !state.messages[id].starred
  },
  CHANGE_FAVORITE (state, id) {
    state.favorites[id].favorite = !state.favorites[id].favorite
    // const index = state.favorites.findIndex(item => item.id === id)
    // state.favorites.splice(index, 1)
  }
}
