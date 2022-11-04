import {ApiCaller} from "../../api/api";
import {URLS} from "../../api/url";

export default {
    namespaced: true,
    getters: {
        edit_admin: state => state.edit_admin,
    },
    state: {
        edit_admin : {}
    },
    mutations: {

    },
    actions: {
        loginAdmin({}, payload) {
            return ApiCaller().post(URLS.ADMIN_LOGIN(), payload)
        }
    },

}
