<template>
  <v-row data-test="row">
    <v-col
      v-for="card in cards"
      :key="card.header"
      cols="12"
      md="6"
      lg="3"
      data-test="col"
    >
      <Card :card="card" />
    </v-col>
  </v-row>
</template>

<script>
import Card from './Card'
export default {
  name: 'Cards',
  components: {
    Card
  },
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
