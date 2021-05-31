<template>
  <div>
    <section>
      <UserProfile :info="fetchedItems">
        <!-- <div slot="username"></div> -->
        <RouterLink slot="username" :to="`/user/${fetchedItems.user}`">
          {{ fetchedItems.user }}
        </RouterLink>
        <template slot="time">{{ ' Posted ' + fetchedItems.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <h2>{{fetchedItems.title}}</h2>
    </section>
    <section>
      <div v-html="fetchedItems.content">   
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserProfile from '../components/UserProfile.vue'
export default {
  components:{
    UserProfile,
  },
  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMS', itemId);
  },
  computed: {
    ...mapGetters(['fetchedItems'])
  }
}
</script>

<style scoped>
.user-container{
  padding: 0.5rem;
  display:flex;
  align-items: center;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>