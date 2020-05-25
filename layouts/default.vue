<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-navigation-drawer
      v-if="$store.state.auth.status !== ''"
      v-model="drawer"
      fixed
      app
      :style="{background: $vuetify.theme.themes.dark.background2}"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>{{ $store.state.auth.isLogged }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider />

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon class="grey--text">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item router exact @click="userSignOut">
          <v-list-item-action>
            <v-icon class="grey--text">
              exit_to_app
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      :style="{background: $vuetify.theme.themes.dark.background2}"
    >
      <v-app-bar-nav-icon v-if="$store.state.auth.status !== ''" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <template v-if="$store.state.auth.status === ''">
        <NuxtLink class="nuxt-link" to="/login">
          <span class="grey--text">Login</span>
        </NuxtLink>
        <NuxtLink class="nuxt-link" to="/register">
          <span class="grey--text">Register</span>
        </NuxtLink>
      </template>
      <template v-else>
        <NuxtLink class="nuxt-link" to="/dashboard">
          <span class="grey--text">Dashboard</span>
        </NuxtLink>
        <NuxtLink class="nuxt-link" to="/profile">
          <span class="grey--text">Profile</span>
        </NuxtLink>
        <v-btn text class="d-none d-sm-flex" @click="userSignOut">
          <span class="grey--text">Sign Out</span>
        </v-btn>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
      class="justify-center"
      :style="{background: $vuetify.theme.themes.dark.background1}"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'person',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Nuxt Dashboard'
    }
  },
  methods: {
    async userSignOut () {
      try {
        await this.$store.dispatch('auth/SET_AUTH_LOGOUT')
        await this.$router.push('/')
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-link{
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.09;
}
</style>
