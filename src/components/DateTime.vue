<template>
  <div style="text-align:center; width: 720px; margin: auto;" v-show="this.$store.state.showdt">
    <h2 class="card-header">Select the date & time</h2>
    <p class="card-text">Please pickup your bike within 15 minutes from the selected time.</p>
    <div>
            <datepicker v-model="date" lang="en" format="DD MMMM YYYY" confirm :not-Before="new Date()" placeholder="Enter Date" class="citycont"></datepicker>
            <datepicker v-model="time" type = "time" :minute-step="30" format="HH:mm" confirm placeholder="Enter Time" class="citycont"></datepicker>
            <button type="button" class="btn btn-outline-primary" id="clear" v-on:click="clear()">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
    
    <br>
    <button v-on:click="datetime()" type="button" class="btn btn-primary">Next</button>
    
  </div>
</template>


<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    datepicker: DatePicker
  },
  data () {
    return {
        date: null,
        time: null
    }
  },
  methods: {
    datetime: function(){
        if(this.date === null | this.time === ''){
            alert('Please enter the date and time details');
        }
        else{
            this.$store.state.date = this.date;
            this.$store.state.time = this.time;
            this.$store.state.disableQlty = false;
            this.$store.state.disabledDivQlty = true;
        }
        
    },
    clear: function(){
        this.$store.state.date = '';
        this.$store.state.time = '';
        this.$store.state.disableQlty = true;
        this.$store.state.disableQty = true;
        this.$store.state.disabledDivQlty = false;
        this.$store.state.disableConfirm = false;
        this.$store.state.disableConfirm = false;
        this.date = null;
        this.time = '';
    }
  },
  computed:{
    
  },
  updated: function(){
        this.$store.state.date = this.date;
        this.$store.state.time = this.time;
  }
}
</script>

<style scoped>
/* #clear{
    height: 30px;
    float: left;
    margin-left: 1px;
} */
.citycont{
    border: 1px solid black;
}
#clear{
    width: 34px;
    height: 36px;
    padding: 1px 1px 1px 1px;
    box-sizing: border-box;
}
</style>
