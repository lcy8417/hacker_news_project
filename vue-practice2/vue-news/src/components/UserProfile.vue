<template>
  <div>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">          
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의될 영역 -->
            </slot>
            <div class="time">
                <slot name="time">
                    <!-- 상위 컴포넌트에서 정의될 영역 -->
                </slot>
                <slot name="karma">

                </slot>
            </div>
        </div>
     </div>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
    props: {
        info: Object
    },
    // computed: {
    //     ...mapGetters(['fetchedUsers'])
    // }
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