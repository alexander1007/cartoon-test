import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartoons: [],
        maxLimitNumberCartoon: 2539,
        quantityCartoonsLoad: 5,
    },
    mutations: {
        SET_CARTOON(state, payload) {
            const newCartoon = payload;
            newCartoon.active = false;
            state.cartoons.push(newCartoon);
        },
        CHANGE_ACTIVE(state, payload) {
            state.cartoons[payload.index].active = payload.active;
        },
        RESET_CARTOONS(state) {
            state.cartoons = [];
        }
    },
    actions: {
        getCartoon({
            commit
        }, payload) {
            return new Promise((res, rej) => {
                axios.post('https://api-cartoon-test.herokuapp.com', {
                        cartoon: payload
                    })
                    .then(response => {
                        commit('SET_CARTOON', response.data);
                        res('success');
                    })
                    .catch((error) => {
                        rej(error);
                    })
            })
        },
        setActiveAll({
            commit,
            state
        }, payload) {
            for (let i = 0; i < state.quantityCartoonsLoad; i++) {
                if (i === payload) {
                    commit('CHANGE_ACTIVE', {
                        index: i,
                        active: true
                    });
                } else {
                    commit('CHANGE_ACTIVE', {
                        index: i,
                        active: false
                    });
                }
            }
        },
        setActive({
            commit
        }, payload) {
            commit('CHANGE_ACTIVE', {
                index: payload,
                active: true
            });
        },
        resetAllCartoons({ commit }) {
            commit('RESET_CARTOONS');
        }
    },
    modules: {},
});