<template>
  <div>
    <city></city>
    <br><br><br><br>
    <datetime></datetime>
    <br><br><br>
    <quality></quality>
    <br><br>
    <confirmOrder></confirmOrder>
    
    
  </div>
</template>

<script>
import Quality from '../components/Quality.vue';
import City from '../components/City.vue';
import ConfirmOrder from '../components/ConfirmOrder.vue';
import DateTime from '../components/DateTime.vue';
import db from './firebaseInit';

export default {
  components: {
    quality: Quality,
    city: City,
    datetime: DateTime,
    confirmOrder: ConfirmOrder
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
  computed:{
    
  },
  
}
</script>

<style>
</style>
