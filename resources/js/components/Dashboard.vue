<template>
    <div>
        <h1 class="title">This is your Dashboard, you are logged in :)</h1>
        <v-btn rounded text color="primary" @click="logout">Logout</v-btn>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    mounted(){


        axios.post('/api/test', '', this.token )

            .then(res => {


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
     methods: {

        logout() {
            this.$store.dispatch("destroyToken").then(response => {
            this.$router.push({ name: "wellcome" });
            });
        }

    }
}
</script>
