<template>
    <div style="text-align:center; width: 720px; margin: auto;">
        <h1>Book a bike now</h1>
        <br>
        <h2 class="card-header">Select your city</h2>
        <p class="card-text">We are expanding to more cities soon!</p>
        <!-- <h1>select your city</h1> -->
        <button type="button" class="btn btn-primary" v-on:click="nyc()" v-bind:disabled="this.$store.state.disableCity">New York</button>
        <button type="button" class="btn btn-primary" v-on:click="sf()" v-bind:disabled="this.$store.state.disableCity">San francisco</button>
        <button type="button" class="btn btn-primary" v-on:click="seattle()" v-bind:disabled="this.$store.state.disableCity">Seattle</button>
        <br><br>
        <div id="citycont">
            <div id="city">
                <h4>{{this.$store.state.city}}</h4>
            </div>
            <div id="clear">
                <button type="button" class="btn btn-outline-primary" v-on:click="clear()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      price: 0,
      type: '',
      inc: 1,
      disabled: true,
      city: ''
    }
  },
  methods: {
    nyc: function(){
      this.price = this.price+5;
      this.type = 'expensive';
      this.inc = 5;
      this.$store.state.disableCity = true;
      this.$store.state.city = 'New York';
      this.$store.state.showdt = true;

    },
    sf: function(){
      this.price = this.price+3;
      this.type = 'expensive';
      this.inc = 3;
      this.$store.state.disableCity = true;
      this.$store.state.city = 'San Francisco';
      this.$store.state.showdt = true;
    },
    seattle: function(){
      this.price = this.price+2;
      this.type = 'expensive';
      this.inc = 2;
      this.$store.state.disableCity = true;
      this.$store.state.city = 'Seattle';
      this.$store.state.showdt = true;
    },
    clear: function(){
        this.$store.state.price = 0;
        this.$store.state.disableCity = false;
        this.$store.state.disabledDivQlty = false;
        this.$store.state.city = '';
        this.$store.state.showdt = false;
        this.$store.state.disableConfirm = false;
    }
  }
}
</script>

<style scoped>
#citycont{
    margin: auto;
    width: 331px;
}
#city{
    width: 300px;
    height: 30px;
    border: 2px solid black;
    float: left;
}
#clear{
    height: 30px;
    float: left;
    margin-left: 1px;
}
#clear button{
    width: 30px;
    height: 30px;
    padding: 1px 1px 1px 1px;
    box-sizing: border-box;
}
</style>