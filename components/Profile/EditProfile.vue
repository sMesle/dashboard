<template>
  <v-col :style="{background: $vuetify.theme.themes.dark.background1}" data-test="profile">
    <v-form data-test="form" @submit.prevent="editChanges">
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
            v-model="inputs.company"
            label="Company"
            outlined
            disabled
            dense
            data-test="company"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            id="username"
            v-model="inputs.username"
            label="Username"
            name="username"
            outlined
            dense
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            id="email"
            v-model="inputs.email"
            label="Email"
            name="email"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            id="firstName"
            v-model="inputs.firstName"
            label="First Name"
            name="firstName"
            outlined
            dense
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            id="lastName"
            v-model="inputs.lastName"
            label="Last Name"
            name="lastName"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            id="about"
            v-model="inputs.about"
            label="About Me"
            name="about"
            outlined
            dense
            rows="6"
          />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-btn type="submit" class="editProfile" :style="{background: $vuetify.theme.themes.dark.background2}">
          Edit Changes
        </v-btn>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    inputs: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      about: ''
    }
  }),
  created () {
    this.takeProfileFromStore()
  },
  methods: {
    takeProfileFromStore () {
      this.inputs.username = JSON.parse(JSON.stringify(this.$store.state.profile.username))
      this.inputs.firstName = JSON.parse(JSON.stringify(this.$store.state.profile.firstName))
      this.inputs.lastName = JSON.parse(JSON.stringify(this.$store.state.profile.lastName))
      this.inputs.email = JSON.parse(JSON.stringify(this.$store.state.profile.email))
      this.inputs.company = JSON.parse(JSON.stringify(this.$store.state.profile.company))
      this.inputs.about = JSON.parse(JSON.stringify(this.$store.state.profile.about))
      // eslint-disable-next-line no-console
      // console.log(this.inputs)
    },
    // setLocalUser (field, value) {
    //   this.$store.dispatch('profile/EDIT_PROFILE', {
    //     field,
    //     value
    //   })
    // }
    editChanges () {
      // eslint-disable-next-line no-console
      console.log(this.inputs)
      this.$store.dispatch('profile/EDIT_PROFILE', this.inputs)
      // eslint-disable-next-line no-console
      console.log(this.$store.state.profile)
    }
  }
}
</script>
