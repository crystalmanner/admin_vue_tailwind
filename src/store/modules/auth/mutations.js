import * as types from './mutation-types'

const mutations = {

    [types.AUTH_SUCCESS](state, user) {
        state.user.profile = user.profile
        state.user.id = user.id
        state.status = 'success'
    },

    [types.AUTH_LOGOUT](state) {
        state.user = null
    },

    [types.AUTH_ERROR](state) {
        state.user = null
        state.status = 'error'
    },

    [types.SIGNUP_SUCCESS](state) {
        state.status = 'success'
    },

    [types.SIGNUP_ERROR](state) {
        state.status = 'error'
    },

    [types.RESET_PASSWORD_REQUEST_SUCCESS](state) {
        state.status = 'success'
    },

    [types.RESET_PASSWORD_REQUEST_ERROR](state) {
        state.status = 'error'
    },

    [types.RESET_PASSWORD_SUCCESS](state) {
        state.status = 'success'
    },

    [types.RESET_PASSWORD_ERROR](state) {
        state.status = 'error'
    },

    [types.RESEND_CONFIRM_EMAIL_SUCCESS](state) {
        state.status = 'success'
    },

    [types.RESEND_CONFIRM_EMAIL_ERROR](state) {
        state.status = 'error'
    },

    [types.CONFIRM_EMAIL_SUCCESS](state) {
        state.status = 'success'
    },

    [types.CONFIRM_EMAIL_ERROR](state) {
        state.status = 'error'
    },

}

export default mutations
