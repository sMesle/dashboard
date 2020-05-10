export default {
  CHANGE_TASK_SELECT (state, id) {
    state.tasks[id].selected = !state.tasks[id].selected
  }
}
