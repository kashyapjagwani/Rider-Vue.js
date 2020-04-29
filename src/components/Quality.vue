<template>
    <div style="text-align:center; width: 720px; margin: auto;" v-show="this.$store.state.disabledDivQlty">
        <h2 class="card-header" disbaled='true'>select your bike quality</h2>
        <br>
        <button type="button" class="btn btn-primary" v-on:click="expensive()" v-bind:disabled="this.$store.state.disableQlty">Expensive</button>
        <button type="button" class="btn btn-primary" v-on:click="medium()" v-bind:disabled="this.$store.state.disableQlty">Medium</button>
        <button type="button" class="btn btn-primary" v-on:click="cheap()" v-bind:disabled="this.$store.state.disableQlty">Cheap</button>
        <br><br>
        <div id="citycont">
            <div id="city">
                <h4>Price ${{this.$store.state.price}}</h4>
            </div>
            <div id="clear">
                <button type="button" class="btn btn-outline-primary" v-on:click="clear() ">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <br><br>
        <div id="hours">
          <p style="display: inline;" class="lead">Hours:</p>
          <button type="button" class="btn btn-primary btn-sm" v-on:click="sub()" v-bind:disabled="this.$store.state.disableQty">-</button>
          <p style="display: inline;" class="lead">{{this.$store.state.price/this.$store.state.inc}}</p>
          <button type="button" class="btn btn-primary btn-sm" v-on:click="add()" v-bind:disabled="this.$store.state.disableQty">+</button>
        </div>
    </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      type: '',
    }
  },
  methods: {
    expensive: function(){
      this.$store.state.price = this.$store.state.completeData[this.$store.state.city].expensive;
      this.$store.state.quality = 'expensive';
      this.$store.state.inc = this.$store.state.completeData[this.$store.state.city].expensive;
      this.$store.state.disableQlty = true;
      this.$store.state.disableQty = false;
      this.$store.state.disableConfirm = true;
    },
    medium: function(){
      this.$store.state.price = this.$store.state.price = this.$store.state.completeData[this.$store.state.city].medium;
      this.$store.state.quality = 'medium';
      this.$store.state.inc = this.$store.state.price = this.$store.state.completeData[this.$store.state.city].medium;
      this.$store.state.disableQlty = true;
      this.$store.state.disableQty = false;
      this.$store.state.disableConfirm = true;
    },
    cheap: function(){
      this.$store.state.price = this.$store.state.price = this.$store.state.completeData[this.$store.state.city].cheap;
      this.$store.state.quality = 'cheap';
      this.$store.state.inc = this.$store.state.price = this.$store.state.completeData[this.$store.state.city].cheap;
      this.$store.state.disableQlty = true;
      this.$store.state.disableQty = false;
      this.$store.state.disableConfirm = true;
    },
    add: function(){
      this.$store.state.price = this.$store.state.price + this.$store.state.inc;
    },
    sub: function(){
      this.$store.state.price = this.$store.state.price - this.$store.state.inc;
      if(this.$store.state.price === 0){
        this.$store.state.disableQlty = false;
        this.$store.state.disableQty = true;
        this.$store.state.disableConfirm = false;
      }
    },
    clear: function(){
        this.$store.state.price = 0;
        this.$store.state.disableQlty = false;
        this.$store.state.disableQty = true;
        this.$store.state.disableConfirm = false;
    }
  }
}
</script>

<style scoped>
#citycont{
    margin: auto;
    width: 211px;
}
#city{
    width: 180px;
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
#hours{
  width: 211px;
  margin: auto;
}
</style>