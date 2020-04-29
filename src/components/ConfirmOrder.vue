<template>
    <div id="confirm" v-show="this.$store.state.disableConfirm">
        <div class="card text-white bg-primary mb-3" style="width: 75%; margin: auto;">
            <div class="card-header">Your Order</div>
            <div class="card-body">
                <h4 class="card-title">{{this.$store.state.city}}</h4>
                <br>
                <h4 class="card-title">{{this.$store.state.quality}} bike
                    <small class="text-muted">on</small>
                    <h4 class="card-title" style="display:inline;">{{this.$store.state.date.toString().slice(4,15)}}</h4>
                    <small class="text-muted">at</small>
                    <h4 class="card-title" style="display:inline;">{{this.$store.state.time.toString().slice(16,21)}}</h4>
                    <small class="text-muted">for {{this.$store.state.price/this.$store.state.inc}} {{this.hour}}</small>
                </h4>
                
                <br>
                <h4 style="display: inline;"><small class="card-title text-muted">TOTAL: ${{this.$store.state.price}}</small></h4>
                <button type="button" class="btn btn-secondary" style="float: right;" v-on:click="confirmOrder()">Confirm order</button>
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
                hour: ''
            }
        },
        methods: {
            confirmOrder: function(){
                this.$store.state.isBooked = true;
                this.$router.push('/checkout');
            }
        },
        computed:{

        },
        updated: function(){
            if((this.$store.state.price/this.$store.state.inc)===1){
                this.hour = 'hour';
            }
            else{
                this.hour = 'hours';
            }
        }
    }
</script>

<style>
</style>
