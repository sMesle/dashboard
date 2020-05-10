<template>
  <v-list :style="{background: $vuetify.theme.themes.dark.background}">
    <v-list-item-group multiple active-class="blue--text">
      <template v-for="item in material">
        <v-list-item :key="item.content">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <!-- TODO: -->
              <v-checkbox v-if="data === 'tasks'" value @change="changeCheckStatus(item.id)" />
              <!-- <v-checkbox v-if="data === 'tasks'" v-model="selectedTasks" @change="changeCheckStatus(item.id)" /> -->
              <!-- <v-checkbox v-if="data === 'tasks'" v-model="item.selected" @change="changeCheckStatus(item.id)" /> -->

              <v-icon v-if="!active && data === 'messages'" color="grey darken-1">
                grade
              </v-icon>
              <v-icon v-if="active && data === 'messages'" color="yellow">
                grade
              </v-icon>

              <v-icon v-if="data === 'bookmarks'">
                mdi-dots-vertical
              </v-icon>
            </v-list-item-action>
            <v-list-item-content class="grey--text grey--lighten-2">
              {{ item.content }}
            </v-list-item-content>
          </template>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: 'tasks'
    }
  },
  computed: {
    tabs: {
      get () {
        return this.$store.state.tabs
      }
    },
    material: {
      get () {
        return this.tabs[this.data]
      }
    }
    // selectedTasks () {
    //   const selectedContents = this.material.filter(item => item.selected === true)
    //   const x = []
    //   selectedContents.forEach(item => x.push(item.id))
    //   return x
    // }
  },
  methods: {
    changeCheckStatus (id) {
      // const x = this.selectedTasks.findIndex(item => item === id)
      // if (x === -1) {
      //   this.selectedTasks.push(id)
      // } else {
      //   this.selectedTasks.splice(x, 1)
      // }
      // console.log(this.selectedTasks) /* eslint no-console: ["error", { allow: ["log", "error"] }] */
      this.$store.commit('tabs/CHANGE_TASK_SELECT', id)
    }
  }
}
</script>
