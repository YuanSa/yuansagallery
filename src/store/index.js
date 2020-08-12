import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        section: "home",
    },
    mutations: {
        CHANGE_SECTION(state, payload) {
            state.section = payload;
        },
    },
    actions: {
        navigateTo({ commit }, target) {
            commit("CHANGE_SECTION", target);
        },
    },
    modules: {},
});
