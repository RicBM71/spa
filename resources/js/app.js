/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'
import App from './components/App'


router.beforeEach((to, from, next) => {
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        next({
          name: 'login',
        })
      } else {
           next()
      }
    } else {
           next() // make sure to always call next()!
    }
})

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    vuetify
});
