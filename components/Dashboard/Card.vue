<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    :style="{background: $vuetify.theme.themes.dark.background1}"
    data-test="card"
  >
    <v-list-item>
      <v-icon x-large :color="card.fill">
        {{ card.icon }}
      </v-icon>

      <v-list-item-content>
        <v-list-item-title class="headerText text-right grey--text text--lighten-3">
          {{ card.header }}
        </v-list-item-title>
        <v-list-item-subtitle class="title text-right grey--text text--lighten-4">
          {{ card.info }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <hr>
    <v-card-actions>
      <v-btn text class="text-lowercase font-weight-thin caption" data-test="button">
        <v-icon small class="mr-3">
          {{ card.subicon }}
        </v-icon>
        {{ card.action }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {
        return {
          header: 'Capacity',
          info: '12GB / 100GB',
          icon: 'cloud',
          action: 'update now',
          subicon: 'cached',
          fill: 'rgba(54, 162, 235, 0.5)'
        }
      }
    }
  }
}
</script>
