<template>
  <div>
    <navBar></navBar>
    <br><br>
    <router-view/>  
  </div>
</template>


<script>
import Nav from './components/Nav.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    navBar: Nav
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
  computed:{
    
  },
  created: function(){
    this.$http.get('https://vue-app-96298.firebaseio.com/prices/z7FWvNsgwNS5B5KgrsT9.json').then(function(data){
      this.$store.state.completeData = data.body;
      console.log(this.$store.state.completeData);
    })
  }
}
</script>

<style>
</style>
