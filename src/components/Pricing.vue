<template>
    <div id="pricing">
        <h1>Checkout the pricing across cities</h1>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" v-bind:class="{active:nycb}" v-on:click="nyc()" data-toggle="tab" href="#">New York</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-bind:class="{active:sfb}" v-on:click="sf()" data-toggle="tab" href="#">San Francisco</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-bind:class="{active:sab}" v-on:click="sa()" href="#">Seattle</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">More cities are coming soon...</a>
            </li>
        </ul>
        <br>
        <div id="nycprice" v-if="nycb">
            <p>Expensive Bike: ${{this.$store.state.completeData['New York'].expensive}}/hour</p>
            <p>Medium Bike: ${{this.$store.state.completeData['New York'].medium}}/hour</p>
            <p>Cheap Bike: ${{this.$store.state.completeData['New York'].cheap}}/hour</p>
        </div>
        <div id="sfprice" v-if="sfb">
            <p>Expensive Bike: ${{this.$store.state.completeData['San Fransisco'].expensive}}/hour</p>
            <p>Medium Bike: ${{this.$store.state.completeData['San Fransisco'].medium}}/hour</p>
            <p>Cheap Bike: ${{this.$store.state.completeData['San Fransisco'].cheap}}/hour</p>
        </div>
        <div id="saprice" v-if="sab">
            <p>Expensive Bike: ${{this.$store.state.completeData['Seattle'].expensive}}/hour</p>
            <p>Medium Bike: ${{this.$store.state.completeData['Seattle'].medium}}/hour</p>
            <p>Cheap Bike: ${{this.$store.state.completeData['Seattle'].cheap}}/hour</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            nycb: true,
            sfb: false,
            sab: false
        }
    },
    methods:{
        nyc: function(){
            this.nycb=true,
            this.sfb=false,
            this.sab= false
        },
        sf: function(){
            this.nycb=false,
            this.sfb=true,
            this.sab= false
        },
        sa: function(){
            this.nycb=false,
            this.sfb=false,
            this.sab= true
        }
    },
    mounted: function(){
        
    }
}
</script>

<style scoped>
#pricing{
    width: 750px;
    margin: auto;
}
</style>