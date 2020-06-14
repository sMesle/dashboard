<template>
  <v-row>
    <v-col
      v-for="card in cardList"
      :key="card.id"
      cols="12"
      md="3"
      sm="6"
      data-test="col"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" :elevation="hover ? 16 : 2" open-delay="200" :class="{ 'on-hover': hover }">
          <v-parallax dark :src="card.parallax ? card.parallax : parallax" height="475">
            <v-row align="start">
              <v-col cols="12">
                <div class="title text-lg-h3 text-h4 font-weight-black white--text ml-n3 mb-4">
                  {{ card.title }}
                </div>
              </v-col>
            </v-row>
            <v-card-text class="text-center text-md-subtitle-1 text-subtitle-2 font-weight-light white--text mt-3">
              <div>{{ card.team }} different team</div>
              <div>{{ card.member }} team members</div>
              <div>{{ card.membership }} yearly membership</div>
            </v-card-text>
            <v-card-text class="text-center white--text">
              <div>
                <span class="text-h4">$</span>
                <span class="text-h2">{{ card.price }}</span>
              </div>
            </v-card-text>
            <v-card-title class="justify-center white--text text-md-h6 text-subtitle-1">
              {{ card.title }} Plan
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="subtitle-2 text-capitalize" color="teal darken-4">
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
  data () {
    return {
      parallax: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      cardList: [
        {
          id: 0,
          title: 'Trial',
          team: 2,
          member: 10,
          membership: 1,
          price: 0
        },
        {
          id: 1,
          title: 'Basic',
          team: 5,
          member: 25,
          membership: 1,
          price: 19,
          parallax: 'https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
          id: 2,
          title: 'Medium',
          team: 10,
          member: 50,
          membership: 1,
          price: 39
        },
        {
          id: 4,
          title: 'Premium',
          team: '10+',
          member: 100,
          membership: 2,
          price: 69
        }
      ]
    }
  }
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
