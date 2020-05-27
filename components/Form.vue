<template>
  <v-form ref="form" @submit.prevent="submitForm">
    <template v-if="formType === 'signup'">
      <v-col>
        <v-text-field
          v-model="userInputs.name"
          label="Name"
          :rules="[rules.required, rules.min3]"
          type="text"
          name="name"
          hide-details="auto"
        />
      </v-col>
    </template>
    <v-col>
      <v-text-field
        v-model="userInputs.email"
        label="Email"
        :rules="[rules.email, rules.required]"
        type="text"
        name="username"
        hide-details="auto"
      />
    </v-col>
    <v-col>
      <v-text-field
        v-model="userInputs.password"
        label="Password"
        :rules="[rules.required, rules.min6]"
        :append-icon="passwordVisibility ? 'mdi-eye' : 'mdi-eye-off'"
        type="password"
        name="password"
        hide-details="auto"
        @click:append="passwordVisibility = !passwordVisibility"
      />
    </v-col>
    <v-col>
      <v-btn block type="submit" color="light-blue darken-3" data-test="button" @click="submitForm">
        {{ formType }}
      </v-btn>
    </v-col>
  </v-form>
</template>

<script>
export default {
  props: {
    formType: {
      type: String,
      default: 'login'
    }
  },
  data: () => ({
    userInputs: {
      name: '',
      email: '',
      password: ''
    },
    passwordVisibility: false,
    rules: {
      required: value => !!value || 'Required',
      min3: value => (value && value.length >= 3) || 'Min 3 characters',
      min6: value => (value && value.length >= 6) || 'Min 6 characters',
      email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    }
  }),
  created () {
    this.checkFormType()
  },
  methods: {
    checkFormType () {
      if (this.formType === 'login') {
        this.userInputs.email = JSON.parse(JSON.stringify(this.$store.state.profile.email))
        this.userInputs.password = JSON.parse(JSON.stringify(this.$store.state.profile.password))
      }
    },
    submitForm () {
      this.$emit('submitForm', this.userInputs)
    }
  }
}
</script>
