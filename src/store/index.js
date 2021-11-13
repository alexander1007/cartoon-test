import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartoons: [],
        maxLimitNumberCartoon: 2539,
        quantityCartoonsLoad: 5,
        rating: 0,
    },
    mutations: {
        SET_CARTOON(state, payload) {
            const newCartoon = payload;
            newCartoon.active = false;
            newCartoon.rate = 0;
            state.cartoons.push(newCartoon);
        },
        CHANGE_ACTIVE(state, payload) {
            state.cartoons[payload.index].active = payload.active;
        },
        RESET_CARTOONS(state) {
            state.cartoons = [];
        },
        SET_CHOOSE_RATE(state, payload) {
            state.cartoons[payload.index].rate = payload.chooseRate;
        },
        SET_RATING(state, payload) {
            state.rating = payload;
        }
    },
    actions: {
        getCartoon({
            commit,
            dispatch
        }, payload) {
            dispatch('setRate', 0);
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
        },
        setRatingCartoon({ commit }, payload) {
            commit('SET_CHOOSE_RATE', payload)
        },
        setRate({ commit }, payload) {
            commit('SET_RATING', payload);
        }
    },
    modules: {},
});