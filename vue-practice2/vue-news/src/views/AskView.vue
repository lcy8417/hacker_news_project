<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components:{
    ListItem,
  },
  mounted(){
    bus.$emit('end:spinner')
  }
}
</script>

