import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        completeData: null,
        elementData: null,
        city: '',
        quality: '',
        price: 0,
        inc: 1,
        date: '',
        time: '',
        userEmail: '',
        disableCity: false,
        disableQlty: true,
        disableQty: true,
        diableDivQlty: false,
        disableConfirm: false,
        isBooked: false,
        isLogged: false,
        showdt: false
    }
})