<template>
  <v-form ref="form">
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
        :rules="[rules.email1, rules.email2, rules.required]"
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
      <v-btn block color="light-blue darken-3" @click="submitForm">
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
      email1: v => !!v || 'E-mail is required',
      email2: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    },
    valid: true
  }),
  methods: {
    submitForm () {
      this.$emit('submitForm', this.userInputs)
    }
  }
}
</script>
