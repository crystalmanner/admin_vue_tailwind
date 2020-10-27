import * as types from './mutation-types'

const mutations = {

    [types.GET_USER_ALL_SUCCESS](state, users) {
        state.status = 'success'
        state.users = users
    },

    [types.GET_USER_ALL_ERROR](state) {
        state.status = 'error'
    },

    [types.CREATE_USER_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.CREATE_USER_ERROR](state) {
        state.status = 'error'
    },

    [types.UPDATE_USER_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.UPDATE_USER_ERROR](state) {
        state.status = 'error'
    },

    [types.DELETE_USER_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_USER_ERROR](state) {
        state.status = 'error'
    },

    [types.USER_ADMIN_SELECT](state) {
        state.isAdminUser = true
    }

}

export default mutations
