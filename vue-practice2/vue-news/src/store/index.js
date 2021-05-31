import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news: [],
        jobs: [],
        ask: [],
        users: {},
        item: {},
        list: [],
    },
    getters:{
        fetchedNews(state) {return state.news},
        fetchedJobs(state) {return state.jobs},
        fetchedAsk(state) {return state.ask},
        fetchedUsers(state) {return state.users},
        fetchedItems(state) {return state.item},
    },
    mutations,
    actions,
});