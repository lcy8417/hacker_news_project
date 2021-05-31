<template>
  <div>
    <user-profile :info="fetchedUsers">
      <div slot="username">{{fetchedUsers.id}}</div>
      <span slot="time">Joined : {{fetchedUsers.created}}, </span>
      <span slot="karma">{{fetchedUsers.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile.vue'
export default {
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERS', userName);
  },
  components:{
    UserProfile,
  },
  computed:{
    ...mapGetters(['fetchedUsers']),
  }
}
</script>

<style>

</style>