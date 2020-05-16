<template>
  <v-row>
    <v-col v-for="card in cardList" :key="card.id" cols="12" md="3" sm="6">
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" :elevation="hover ? 16 : 2" open-delay="200" :class="{ 'on-hover': hover }">
          <v-parallax :src="card.parallax" height="450">
            <v-row align="start">
              <v-col cols="12">
                <h1 class="display-2 font-weight-black ml-n3 mb-4">
                  {{ card.title }}
                </h1>
              </v-col>
            </v-row>
            <v-card-text class="text-center subtitle-1 font-weight-light mt-3">
              <div>{{ card.team }} different team</div>
              <div>{{ card.member }} team members</div>
              <div>{{ card.membership }} yearly membership</div>
            </v-card-text>
            <v-card-text class="text-center white--text">
              <div>
                <span class="display-1">$</span>
                <span class="display-3">{{ card.price }}</span>
              </div>
            </v-card-text>
            <v-card-title class="justify-center">
              {{ card.title }} Plan
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="subtitle-2 text-capitalize" color="blue-grey darken-1">
                Get Started
              </v-btn>
            </v-card-actions>
          </v-parallax>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cardList: [
      {
        id: 0,
        title: 'Trial',
        team: 2,
        member: 10,
        membership: 1,
        price: 0,
        parallax: 'https://images.unsplash.com/photo-1524313118018-d8139913a0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 1,
        title: 'Basic',
        team: 5,
        member: 25,
        membership: 1,
        price: 19,
        parallax: 'https://images.unsplash.com/photo-1578922348103-46c3a7ebdd86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 2,
        title: 'Medium',
        team: 10,
        member: 50,
        membership: 1,
        price: 39,
        parallax: 'https://images.unsplash.com/photo-1524313118018-d8139913a0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 4,
        title: 'Premium',
        team: '10+',
        member: 100,
        membership: 2,
        price: 69,
        parallax: 'https://images.unsplash.com/photo-1578922427288-a47338083a57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.v-card {
  transition: transform .4s ease-in-out;
}

.v-card:not(.on-hover) {
  transform: scale(1)
 }

 .v-card.on-hover {
  transform: scale(1.1)
 }
</style>
