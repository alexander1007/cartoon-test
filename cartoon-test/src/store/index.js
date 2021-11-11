import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartoon: {},
        max: 2539,
    },
    mutations: {
        SET_CARTOON(state, cartoon) {
            state.cartoon = cartoon
        }
    },
    actions: {
        getCartoon({
            commit
        }, payload) {
            return axios.post('https://api-cartoon-test.herokuapp.com', {
                    cartoon: payload
                })
                .then(response => {
                    console.log(response.data);
                    commit('SET_CARTOON', response.data)
                })
        }
    },
    modules: {},
});