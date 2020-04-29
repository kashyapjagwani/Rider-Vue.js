<template>
  <div>
    <title>Rent Your Ride</title>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Rider</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link"> Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">get a bike</a>
          </li>
          <li class="nav-item">
            <router-link to="/pricing" class="nav-link">Pricing</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <router-link to="/login"><button class="btn btn-secondary my-2 my-sm-0" type="submit" v-show="!this.$store.state.isLogged">Login</button></router-link>
        <router-link to="/register"><button class="btn btn-secondary my-2 my-sm-0" type="submit" v-show="!this.$store.state.isLogged">Register</button></router-link>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" v-show="this.$store.state.isLogged" v-on:click="logout()">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      time: 12
    }
  },
  methods: {
    logout: function(){
      this.$store.state.isLogged = false;
      this.$store.state.isBooked = false;
      this.$store.state.city = '';
      this.$store.state.price = 0;
      this.$store.state.disableCity = false;
      this.$store.state.disabledDivQlty = false;
      this.$store.state.disableConfirm = false;
      this.$store.state.disableQty = true;
      this.$store.state.showdt = false;
      firebase.auth().signOut().then(()=>{
        console.log('log out');
        this.$router.push('/login');
      })
    },
    sub: function(){
      console.log(document.getElementById('customRange1').value);
    }
  }
}
</script>

<style scoped>
button{
  margin-right: 5px;
}
</style>