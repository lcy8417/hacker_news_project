<template>
  <div>
      <button @click=loginUser1>login</button>
      <ul>
          <li :v-for="item in items">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items: []
        }
    },
    methods: {
        loginUser(){
            axios.get('https://jsonplaceholder.typicode.com/user/1')
                .then(response => {
                    if(response.data.id === 1){
                        console.log('사종자가 인증되었습니다.');
                        axios.get('https://jsonplaceholder.typicode.com/todos')
                            .then(response => {
                                this.items = reponse.data;
                            });
                    }
                })
                .catch(error => console.log(error));
        },
        async loginUser1(){
            try{
                var response = await axios.get('https://jsonplaceholder.typicode.com/user/1');
                if( response.data.id === 1){
                    console.log('사종자가 인증되었습니다.');
                    var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    this.items = list.data;
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }
}


</script>

<style>

</style>