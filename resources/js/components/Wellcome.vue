<template>
    <div>
    <v-alert type="success">
      I'm a success alert.
    </v-alert>

    <v-alert type="info">
      I'm an info alert.
    </v-alert>

    <v-alert type="warning">
      I'm a warning alert.
    </v-alert>

    <v-alert type="error">
      I'm an error alert.
    </v-alert>
    <v-btn rounded text color="primary" @click="dasboard()">dash</v-btn>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    mounted() {
       // console.log('ok')
    },
        computed:{
        ...mapGetters([
            'loggedIn'
    ]),
    },
    methods: {
        dasboard() {
            if (this.loggedIn)
                this.$router.push({ name: "dashboard" });
            else
                this.$router.push({ name: "login" });
        }
    }
}
</script>
