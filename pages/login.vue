<template>
  <v-row>
    <v-col cols="12" md="4" sm="6" offset-md="4" offset-sm="3">
      <v-col v-if="showAlert">
        <Alert :error-message="errorMessage" />
      </v-col>
      <v-col>
        <div>Email: jane@email.com</div>
        <div>Password: admin123</div>
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
      if (loginInfo.email === this.profile.email && loginInfo.password === this.profile.password) {
        try {
          await this.$store.dispatch('auth/SET_AUTH_REQUEST', loginInfo)
          await this.$router.push('/dashboard')
        } catch (e) {
          throw new Error(e)
        }
      } else {
        this.showAlert = true
        this.errorMessage = 'The username and password did not matched.'
      }
    },
    dismissed () {
      this.showAlert = false
    }
  }
}
</script>
