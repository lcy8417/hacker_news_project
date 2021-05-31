<template>
  <div class="header">
    <RouterLink to="/news">News</RouterLink> |
    <RouterLink to="/ask">Ask</RouterLink> |
    <RouterLink to="/jobs">Jobs</RouterLink>
  </div>
</template>

<style scoped>
.header{
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active{
  color:#35495e;
}
.header a{
  color:white
}
</style>