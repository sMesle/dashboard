<template>
  <v-alert
    close-text="Close Alert"
    color="error"
    dismissible
    transition="scale-transition"
    @input="closeAlert"
  >
    {{ errorMessage }}
  </v-alert>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeAlert () {
      this.$emit('dismissed')
    }
  }
}
</script>
