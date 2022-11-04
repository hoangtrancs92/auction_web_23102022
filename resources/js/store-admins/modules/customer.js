import {ApiCaller} from "../../api/api";
import {URLS} from "../../api/url";

export default {
    namespaced: true,
    getters: {
        show_dialog: state => state.show_dialog,
        customers: state => state.customers,
    },
    state: {
        customers: [],
        show_dialog: false
    },
    mutations: {
        CHANGE_STATUS_DIALOG(state, payload) {
            state.show_dialog = payload
        },
        SET_CUSTOMERS(state, payload) {
            state.customers = payload
        }
    },
    actions: {
        fetchCustomers(){
            return ApiCaller('admin').get(URLS.ADMIN_CUSTOMERS())
        }
    },
}
