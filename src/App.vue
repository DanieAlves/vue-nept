<template>
  <div id="app">
    <div>
      <!--<router-link v-if="authenticated" to='/login' v-on:click.native="logout()" replace>Logout</router-link>-->
    </div>  
    <router-view/>
  </div>
</template>

<script>
import authService from './service/AuthenticationService';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAQD-x5heVQdw5e_r3ZvXBnODInc3Bpju0",
  authDomain: "neptune-vue.firebaseapp.com",
  databaseURL: "https://neptune-vue.firebaseio.com",
  projectId: "neptune-vue",
  storageBucket: "neptune-vue.appspot.com",
  messagingSenderId: "231807190582",
  appId: "1:231807190582:web:32b3f06ef7239d4fcc3a97",
  measurementId: "G-BL5T7JG15E"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default {
  name: 'App',
  provide: () => ({ firestore }),
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'admin',
        password: 'admin',
      }
    }
  },
  mounted() {
    if(!authService.isAuthenticated()) {
      this.$router.replace({ name: "login" });
    }
  },
}
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
</style>