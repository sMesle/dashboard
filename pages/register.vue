<template>
  <v-row>
    <v-col cols="12" md="4" sm="6" offset-md="4" offset-sm="3">
      <v-col v-if="showAlert">
        <Alert :error-message="errorMessage" />
      </v-col>
      <Form form-type="register" @submitForm="registerUser" />
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
  methods: {
    async registerUser (registerInfo) {
      try {
        await this.$store.dispatch('auth/SET_AUTH_REGISTER', registerInfo)
        await this.$router.push({ path: '/dashboard' })
      } catch (e) {
        throw new Error(e)
      }
    },
    dismissed () {
      this.showAlert = false
    }
  }
}
</script>
