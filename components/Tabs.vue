<template>
  <v-list :style="{background: $vuetify.theme.themes.dark.background}">
    <v-list-item-group multiple active-class="blue--text">
      <template v-for="(item, i) in material">
        <v-list-item :key="item.content">
          <template v-slot>
            <v-list-item-action class="action">
              <template v-if="data === 'tasks'">
                <v-checkbox v-model="tabsCheckArray[i]" class="bluex" data-type="task" value @change="changeCheckStatus(item.id)" />
              </template>

              <v-btn v-if="data === 'messages'" text @click="changeStarredStatus(item.id)">
                <template v-if="!item.starred">
                  <v-icon color="grey darken-1">
                    grade
                  </v-icon>
                </template>
                <template v-else>
                  <v-icon color="yellow">
                    grade
                  </v-icon>
                </template>
              </v-btn>

              <template v-if="data === 'bookmarks'">
                <v-menu open-on-hover top offset-y>
                  <template v-slot:activator="{on}">
                    <v-icon v-on="on">
                      mdi-dots-vertical
                    </v-icon>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>delete</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>edit</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>

              <v-btn v-if="data === 'favorites'" text @click="changeFavoriteStatus(item.id)">
                <template v-if="item.favorite">
                  <v-icon color="red">
                    mdi-heart
                  </v-icon>
                </template>
                <template v-else>
                  <v-icon>mdi-heart</v-icon>
                </template>
              </v-btn>
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
  name: 'Tabs',
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
    },
    tabsCheckArray: {
      get () {
        const arr = []
        this.material.forEach((item) => {
          if (item.selected) {
            arr.push(true)
          } else {
            arr.push(false)
          }
        })
        return arr
      }
    }
  },
  methods: {
    changeCheckStatus (id) {
      this.$store.commit('tabs/CHANGE_TASK_SELECT', id)
    },
    changeStarredStatus (id) {
      this.$store.commit('tabs/CHANGE_MESSAGE_STAR', id)
    },
    changeFavoriteStatus (id) {
      this.$store.commit('tabs/CHANGE_FAVORITE', id)
    }
  }
}
</script>

<style lang="scss" scoped>
[data-type="task"]{
  color: red;
}
.bluex{
  color: blue
}
</style>
