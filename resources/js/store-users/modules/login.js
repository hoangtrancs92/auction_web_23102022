export default {
    namespaced: true,
    getters: {
        fullName:  state => `${state.test1} `,
        fullName2:  state => `${state.test2} `,
    },
    state: {
        test1: 'hoang tran',
        test2: 123456,
        test3: true
    },
    mutations: {
        CHANGE_FULLNAME(state, payload){
            state.test1 = payload
        },
        CHANGE_FULLNAME2(state, payload){
            state.test2 = payload
        }
    },
    actions: {
        changeNameUser({state, commit, dispatch, rootState}, payload){
            console.log(payload)
            commit('CHANGE_FULLNAME',payload)
        }
    },
}
