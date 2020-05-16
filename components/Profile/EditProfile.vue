<template>
  <v-col :style="{background: $vuetify.theme.themes.dark.background1}">
    <v-form @submit.prevent="editChanges()">
      <v-row>
        <v-col cols="7">
          <h2 class="display-2 font-weight-thin mb-5">
            Edit Profile
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            id="company"
            :value="profile.company"
            label="Company"
            outlined
            disabled
            dense
            @change="setLocalUser('company', $event)"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            id="username"
            :value="profile.username"
            label="Username"
            name="username"
            outlined
            dense
            @change="setLocalUser('username', $event)"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            id="email"
            :value="profile.email"
            label="Email"
            name="email"
            outlined
            dense
            @change="setLocalUser('email', $event)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            id="firstName"
            :value="profile.firstName"
            label="First Name"
            name="firstName"
            outlined
            dense
            @change="setLocalUser('firstName', $event)"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            id="lastName"
            :value="profile.lastName"
            label="Last Name"
            name="lastName"
            outlined
            dense
            @change="setLocalUser('lastName', $event)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            id="about"
            :value="profile.about"
            label="About Me"
            name="about"
            outlined
            dense
            rows="6"
            @change="setLocalUser('about', $event)"
          />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-btn :style="{background: $vuetify.theme.themes.dark.background2}">
          Edit Changes
        </v-btn>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    profile: {
      get () {
        return this.$store.state.profile
      }
    }
  },
  methods: {
    setLocalUser (field, value) {
      this.$store.dispatch('profile/EDIT_PROFILE', {
        field,
        value
      })
    }
  }
}
</script>
