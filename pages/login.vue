<template>
  <v-row>
    <v-col cols="12" md="4" sm="6" offset-md="4" offset-sm="3">
      <v-col v-if="showAlert">
        <Alert :error-message="errorMessage" />
      </v-col>
      <Form form-type="login" @submitForm="loginUser" />
    </v-col>
  </v-row>
</template>

<script>
import Form from '@/components/Form'
import Alert from '@/components/Alert'
export default {
  components: {
    Form,
    Alert
  },
  data: () => ({
    showAlert: false,
    errorMessage: ''
  }),
  computed: {
    profile: {
      get () {
        return this.$store.state.profile
      }
    }
  },
  methods: {
    async loginUser (loginInfo) {
      try {
        if (loginInfo.email === this.profile.email && loginInfo.password === this.profile.password) {
          await this.$store.dispatch('auth/SET_AUTH_REQUEST', loginInfo)
        } else {
          this.showAlert = true
          this.errorMessage = 'The username and password did not matched.'
        }
      } catch (e) {
        throw new Error(e)
      } finally {
        // not working on production mode
        await this.$router.push({ path: '/dashboard' })
      }
    },
    dismissed () {
      this.showAlert = false
    }
  }
}
</script>
