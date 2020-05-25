<template>
  <v-row>
    <v-col
      v-for="card in cards"
      :key="card.header"
      cols="12"
      md="6"
      lg="3"
    >
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        :style="{background: $vuetify.theme.themes.dark.background1}"
      >
        <v-list-item>
          <v-icon x-large :color="card.fill">
            {{ card.icon }}
          </v-icon>

          <v-list-item-content>
            <v-list-item-title class="text-right grey--text text--lighten-3">
              {{ card.header }}
            </v-list-item-title>
            <v-list-item-subtitle class="title text-right grey--text text--lighten-4">
              {{ card.info }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr>
        <v-card-actions>
          <v-btn text class="text-lowercase font-weight-thin caption">
            <v-icon small class="mr-3">
              {{ card.subicon }}
            </v-icon>
            {{ card.action }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      cards: [
        {
          header: 'Capacity',
          info: '12GB / 100GB',
          icon: 'cloud',
          action: 'update now',
          subicon: 'cached',
          fill: 'rgba(54, 162, 235, 0.5)'
        },
        {
          header: 'Message',
          info: '158',
          icon: 'message',
          action: 'mark unread',
          subicon: 'markunread',
          fill: 'rgba(255, 206, 86, 1)'
        },
        {
          header: 'Followers',
          info: '72',
          icon: 'person',
          action: 'take feedback',
          subicon: 'timeline',
          fill: 'rgba(255, 99, 132, 1)'
        },
        {
          header: 'Following',
          info: '72',
          icon: 'person',
          action: 'take feedback',
          subicon: 'timeline',
          fill: 'rgba(75, 192, 192, 1)'
        }
      ]
    }
  }
}
</script>
