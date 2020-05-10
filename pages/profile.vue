<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="7">
        <EditProfile />
      </v-col>
      <v-col cols="12" md="5">
        <UserCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="12">
        <v-card>
          <v-tabs v-model="tab" grow>
            <v-tabs-slider />
            <v-tab v-for="tabName in tabs" :key="tabName.tab" :style="{background: $vuetify.theme.themes.dark.background2}">
              <v-icon small class="mr-2">
                {{ tabName.icon }}
              </v-icon>
              {{ tabName.tab }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="tabName in tabs" :key="tabName.tab">
              <Tabs :data="tabName.tab" />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditProfile from '@/components/Profile/EditProfile'
import UserCard from '@/components/Profile/UserCard'
import Tabs from '@/components/Tabs'
export default {
  components: {
    EditProfile,
    UserCard,
    Tabs
  },
  data () {
    return {
      tab: null,
      tabs: [
        { tab: 'tasks', icon: 'build', body: 'content 1' },
        { tab: 'messages', icon: 'message', body: 'content 2' },
        { tab: 'bookmarks', icon: 'bookmark', body: 'content 3' }
      ]
    }
  }
}
</script>
