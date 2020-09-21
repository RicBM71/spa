<template>
  <h1 class="title">This is your Dashboard, you are logged in :)</h1>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    mounted(){

        console.log(this.token);
        axios.post('/api/test', '', this.token )

            .then(res => {

                console.log(res);
            })
            .catch(err => {
                console.log(err);
        })

    },
    computed:{
        ...mapGetters([
            'token'
		]),
    },
}
</script>
