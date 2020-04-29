<template>
    <div >
        <br><br><br>
        <form>
            <fieldset id="loginform">
                <legend>Login to Rider</legend>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>  
            </fieldset>
            <div id="loginbutton">
                <button type="button" class="btn btn-primary" v-on:click="login">Login</button>
            </div>
        </form>
        <br><br><br>
        <div id="signupbutton">
            <p>New to Rider? <router-link to="/register">Create Account</router-link></p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data(){
        return{
            email: '',
            password: ''
        }
        
    },
    methods: {
        login: function(event){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(user => {
                if(firebase.auth().currentUser){
                    this.$store.state.userEmail = firebase.auth().currentUser.email;
                    this.$store.state.isLogged = true;
                    if(this.$store.state.isBooked){
                        this.$router.push('/checkout');
                    }
                    else{
                        this.$router.push('/');
                    }
                }
            },
            error => {
                alert(`Error ${error.message}`)
            })
            event.preventDefault();
        }
    }
}
</script>

<style scoped>
#loginform{
    width: 500px;
    margin: auto;
}
#loginbutton{
    width: 85px;
    margin: auto;
}
#signupbutton{
    width: 290px;
    margin: auto;
}
#signupbutton p{
    margin-left: 35px;
}
</style>