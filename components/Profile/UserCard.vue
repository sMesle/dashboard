<template>
  <v-card :style="{background: $vuetify.theme.themes.dark.background2}" class="bg">
    <v-row class="bg">
      <v-col cols="12" align="center" justify="end">
        <div class="block block-1" />
        <div v-if="$vuetify.breakpoint.lgOnly" class="block block-2" />
        <div v-if="$vuetify.breakpoint.mdAndDown" class="block block-3" />
        <v-avatar size="100">
          <v-img :src="profile.avatar" />
        </v-avatar>
      </v-col>
    </v-row>
    <v-row class="mt-9">
      <v-col>
        <v-card-title class="justify-center" data-test="name">
          {{ profile.firstName }} {{ profile.lastName }}
          <template v-if="profile.private">
            <v-icon>lock</v-icon>
          </template>
        </v-card-title>
        <v-card-subtitle class="text-center">
          @{{ profile.username }}
        </v-card-subtitle>
        <v-card-text data-test="post">
          {{ profile.post }}
        </v-card-text>
        <v-card-text class="grey--text grey-lighten-1">
          <v-icon color="grey">
            event
          </v-icon>
          joined {{ profile.joined }}
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn icon>
            <i class="fab fa-facebook-f" />
          </v-btn>
          <v-btn icon>
            <i class="fab fa-instagram" />
          </v-btn>
          <v-btn icon>
            <i class="fab fa-twitter" />
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  computed: {
    profile: {
      get () {
        return this.$store.state.profile
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.bg{
  overflow: hidden;
}
.block{
  position: absolute;
  width: 20rem;
  height: 10rem;
  background: $bglinear;
  &-1{
    transform: rotate(150deg);
    margin-top: -50px;
    margin-left: -70px;
  }
  &-2{
    transform: rotate(75deg);
    margin-left: 257px;
    margin-top: -9px;
    @media (max-width: 959px) {
      margin-left: 200px;
    }
  }
  &-3{
    transform: rotate(225deg);
    margin-top: -45px;
    margin-left: 576px;
  }
}

</style>
