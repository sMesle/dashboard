<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <EditProfile />
      </v-col>
      <v-col cols="5">
        <UserCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditProfile from '@/components/Profile/EditProfile'
import UserCard from '@/components/Profile/UserCard'
export default {
  components: {
    EditProfile,
    UserCard
  }
}
</script>
