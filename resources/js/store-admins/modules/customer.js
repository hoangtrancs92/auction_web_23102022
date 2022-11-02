export default {
    namespaced: true,
    getters: {
        show_dialog: state => state.show_dialog
    },
    state: {
        show_dialog: false
    },
    mutations: {
        CHANGE_STATUS_DIALOG(state, payload) {
            state.show_dialog = payload
        }
    },
    actions: {

    },

}
