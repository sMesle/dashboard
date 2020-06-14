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
    registerUser (registerInfo) {
      this.$store.dispatch('auth/SET_AUTH_REGISTER', registerInfo)
        .then(() => {
          this.$router.push({ path: '/dashboard' })
        })
    },
    dismissed () {
      this.showAlert = false
    }
  }
}
</script>
