import jsonData from "../../../data.json";

export default {

    state: {
        sessionList: [],
    },

    mutations: {
        SET_SESSIONLIST_TO_STATE: (state, data) => {
            state.sessionList = data
        },
    },

    actions: {
        GET_SESSIONLIST_FROM_STATE({ commit }) {
            const data = jsonData.sessions;
            commit("SET_SESSIONLIST_TO_STATE", data);
        }
    },

    getters: {}
}