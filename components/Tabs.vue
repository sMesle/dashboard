<template>
  <v-card>
    <v-tabs v-model="tab" grow mobile-break-point="600" show-arrows :background-color="$vuetify.theme.themes.dark.background2">
      <v-tabs-slider color="blue" />
      <v-tab v-for="tabName in tabHeader" :key="tabName.tab">
        <v-icon small class="mr-2">
          {{ tabName.icon }}
        </v-icon>
        {{ tabName.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" :style="{background: $vuetify.theme.themes.dark.background}">
      <v-tab-item>
        <v-list :style="{background: $vuetify.theme.themes.dark.background}">
          <v-list-item-group multiple active-class="blue--text">
            <v-list-item v-for="(el, i) in tasks" :key="el.id" data-test="task">
              <v-list-item-action>
                <v-checkbox v-model="tabsCheckArray[i]" data-test="checkbox" value @change="changeCheckStatus(el.id)" />
              </v-list-item-action>
              <v-list-item-content class="grey--text grey--lighten-2">
                {{ el.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-tab-item>

      <v-tab-item>
        <v-list :style="{background: $vuetify.theme.themes.dark.background}">
          <v-list-item-group>
            <v-list-item v-for="el in messages" :key="el.id">
              <v-list-item-action>
                <v-btn data-test="btn" text @click="changeStarredStatus(el.id)">
                  <template v-if="!el.starred">
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
              </v-list-item-action>
              <v-list-item-content class="grey--text grey--lighten-2">
                {{ el.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-tab-item>

      <v-tab-item>
        <v-list :style="{background: $vuetify.theme.themes.dark.background}">
          <v-list-item-group>
            <v-list-item v-for="el in bookmarks" :key="el.id">
              <v-list-item-action>
                <v-menu open-on-hover top offset-y>
                  <template v-slot:activator="{on}">
                    <v-icon v-on="on">
                      mdi-dots-vertical
                    </v-icon>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title @click="deleteBookmark(el.id)">
                        delete
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>edit</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
              <v-list-item-content class="grey--text grey--lighten-2">
                {{ el.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-tab-item>

      <v-tab-item>
        <v-list :style="{background: $vuetify.theme.themes.dark.background}">
          <v-list-item-group>
            <v-list-item v-for="el in favorites" :key="el.id">
              <v-list-item-action>
                <v-btn text @click="changeFavoriteStatus(el.id)">
                  <template v-if="el.favorite">
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
                {{ el.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tab: null,
      tabHeader: [
        { tab: 'tasks', icon: 'build', body: 'content 1' },
        { tab: 'messages', icon: 'message', body: 'content 2' },
        { tab: 'bookmarks', icon: 'bookmark', body: 'content 3' },
        { tab: 'favorites', icon: 'favorites', body: 'content 4' }
      ]
    }
  },
  computed: {
    tabs: {
      get () {
        return this.$store.state.tabs
      }
    },
    tasks: {
      get () {
        return this.$store.state.tabs.tasks
      }
    },
    messages: {
      get () {
        return this.$store.state.tabs.messages
      }
    },
    bookmarks: {
      get () {
        return this.$store.state.tabs.bookmarks
      }
    },
    favorites: {
      get () {
        return this.$store.state.tabs.favorites
      }
    },
    tabsCheckArray: {
      get () {
        const arr = []
        this.tasks.forEach((item) => {
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
    },
    deleteBookmark (id) {
      this.$store.commit('tabs/DELETE_BOOKMARK', id)
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
