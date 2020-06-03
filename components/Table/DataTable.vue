<template>
  <v-data-table
    :style="{background: $vuetify.theme.themes.dark.background2}"
    :headers="tableHeader"
    :items="projects"
    :sort-by="['name', 'deadline', 'progress']"
    hide-default-footer
    class="grey--text text--lighten-2"
    data-test="data-table"
  >
    <template v-slot:top>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title>
            <v-container>
              <v-row>
                <v-col cols="6" offset="3">
                  Edit Project
                </v-col>
              </v-row>
            </v-container>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6" offset="3">
                  <v-text-field v-model="editedProject.name" type="text" name="name" label="Project Name" />
                  <v-text-field v-model="editedProject.deadline" type="text" name="deadline" label="Project New Deadline" />
                  <v-text-field
                    v-model="editedProject.progress"
                    type="number"
                    max="100"
                    min="0"
                    name="progress"
                    label="Project New Progress"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-spacer />
          <v-card-actions>
            <v-container>
              <v-row justify="end">
                <v-col cols="6" offset="3">
                  <v-btn color="blue darken-1" text data-test="dialog-close" @click="close">
                    Cancel
                  </v-btn>
                  <v-btn text data-test="dialog-save" @click="sendStore">
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <template v-slot:item.progress="{item}">
      {{ item.progress }}%
      <v-progress-linear :value="item.progress" :color="item.color" />
    </template>

    <template v-slot:item.actions="{item}">
      <v-icon small color="grey lighten-2" data-test="edit-icon" @click="editProject(item)">
        mdi-pencil
      </v-icon>
      <v-icon small color="grey lighten-2" data-test="delete-icon" @click="deleteProject(item)">
        delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      editedProject: {
        name: '',
        deadline: '',
        progress: ''
      },
      tableHeader: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false }
      ]
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects.projects
    }
  },
  methods: {
    editProject (item) {
      this.editedProject = Object.assign({}, item)
      this.editedProject.editedIndex = this.projects.indexOf(item)
      this.dialog = true
    },
    deleteProject (item) {
      this.$store.commit('projects/DELETE_PROJECT', item.id)
    },
    sendStore () {
      if (this.editedProject.name.length >= 2 && this.editedProject.deadline.length >= 2 && (this.editedProject.progress <= 100 && this.editedProject.progress >= 0)) {
        this.$store.commit('projects/EDIT_PROJECT', {
          id: this.editedProject.editedIndex,
          name: this.editedProject.name,
          progress: this.editedProject.progress,
          deadline: this.editedProject.deadline
        })
      }
      this.dialog = false
      this.close()
    },
    close () {
      this.dialog = false
      this.editedProject = {}
      this.editedProject.editedIndex = -1
    }
  }
}
</script>
