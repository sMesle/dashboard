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
      <v-col cols="12" md="3">
        <v-card :style="{background: $vuetify.theme.themes.dark.background}">
          <v-divider />
          <v-card-title>Team Members</v-card-title>
          <v-divider />
          <v-list :style="{background: $vuetify.theme.themes.dark.background2}">
            <v-list-item-group>
              <v-list-item v-for="member in teamMembers" :key="member.id" two-line>
                <v-list-item-avatar>
                  <v-img :src="member.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ member.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ member.available }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <a :href="`mailto:${member.email}`">
                    <v-icon color="primary">
                      email
                    </v-icon>
                  </a>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider />
          <v-card-actions :style="{background: $vuetify.theme.themes.dark.background2}">
            <v-menu offset-x>
              <template v-slot:activator="{on}">
                <v-btn fab small color="indigo" v-on="on">
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </template>
              <v-list :style="{background: $vuetify.theme.themes.dark.background2}">
                <v-list-item v-for="member in teamMembers" :key="member.id">
                  <v-list-item-avatar>
                    <v-img :src="member.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ member.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-card-text>Add Team Member</v-card-text>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <Tabs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditProfile from '@/components/Profile/EditProfile'
import UserCard from '@/components/Profile/UserCard'
import Tabs from '@/components/Tabs'
export default {
  middleware: 'auth',
  components: {
    EditProfile,
    UserCard,
    Tabs
  },
  data () {
    return {
      teamMembers: [
        { id: 0, name: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', email: 'aliconnors@ab.co', available: 'available' },
        { id: 1, name: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', email: 'cindybaker@bc.com', available: 'busy' },
        { id: 2, name: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', email: 'jasononer@df.com', available: 'busy' },
        { id: 3, name: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', email: 'travishoward@fg.co', available: 'offline' }
      ]
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
