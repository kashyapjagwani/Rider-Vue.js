<template>
  <div>
    <div class="jumbotron">
    <h1 class="display-3" style="display: inline;">Hello,  </h1> 
    <h4 style="display: inline;" class=".text-lowercase">{{this.$store.state.userEmail}}</h4>
    <p class="lead">Click CONFIRM to book your bike.</p>
    <hr class="my-3">
    <p class="lead">Your Order</p>
    <h5>{{this.art}} {{this.$store.state.quality}} bike in {{this.$store.state.city}} on <u>{{this.$store.state.date.toString().slice(4,15)}}</u> from <u>{{this.$store.state.time.getHours()}}:{{this.$store.state.time.toString().slice(19,21)}}-{{this.$store.state.time.getHours()+this.$store.state.price/this.$store.state.inc}}:{{this.$store.state.time.toString().slice(19,21)}}</u>.</h5>
    <p class="card-text">Please pickup your bike within 15 minutes from the pickup time.</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Confirm</a>
    </p>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      art: '',
    }
  },
  methods: {
    
  },
  computed:{
  
  },
  mounted: function(){
    if(this.$store.state.quality === 'expensive'){
        this.art = 'An';
      }
      else{
        this.art = 'A';
      }
  }
  
}
</script>

<style>
</style>
