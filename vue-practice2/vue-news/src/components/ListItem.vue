<template>
    <ul class="news-list">
        <li v-for="item in items" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
            {{item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>      
            </template>
            <template v-else>
              <RouterLink :to="`item/${item.id}`">
                {{ item.title }}
              </RouterLink>
            </template>
          </p>
          <small class="link-text">
          {{ item.time_ago }} by
          <a :href="item.url" class="link-text" v-if="item.domain">{{ item.domain }}</a>
          <RouterLink :to="`/user/${item.user}`" class="link-text" v-else>{{ item.user }}</RouterLink>
          </small>
        </div>
        </li>
    </ul>
</template>

<script>
export default {
  computed:{
    items(){
      return this.$store.state.list;
      // const name = this.$route.name;
      // if(name === 'news')
      //   return this.$store.state.news;
      // else if(name === 'ask')
      //   return this.$store.state.ask;
      // else if(name === 'jobs')
      //   return this.$store.state.jobs;
    }
  }
}
</script>

<style scoped>
.news-list{
  margin:0;
  padding:0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin:0;
}
.link-text{
  color: #828282;
}
</style>