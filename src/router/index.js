import Vue from 'vue'
import Router from 'vue-router'
import Booking from '../components/Booking.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Checkout from '../components/Checkout.vue'
import Pricing from '../components/Pricing.vue'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
        path: '/',
        name: 'booking',
        component: Booking,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/home',
        name: 'booking',
        component: Booking,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing,
        meta: {
            requiresAuth: false
        }
    }
    
  ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!firebase.auth().currentUser){
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        else{
            next();
        }
    }else{
        next();
    }
});

export default router;