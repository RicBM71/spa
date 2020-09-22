import Vue from 'vue'
import VueRouter from 'vue-router'

import Dash from '../components/Dash.vue';

Vue.use(VueRouter)


let routes = [
    {path: '/', component: Dash},
    // {path: '*', component: NotFoundView}
];

export default  new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});
