import * as types from './mutation-types'

const mutations = {

    [types.GET_FUN_PRODUCT_ALL_SUCCESS](state, users) {
        state.status = 'success'
        state.users = users
    },

    [types.GET_FUN_PRODUCT_ALL_ERROR](state) {
        state.status = 'error'
    },

    [types.CREATE_FUN_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.CREATE_FUN_PRODUCT_ERROR](state) {
        state.status = 'error'
    },

    [types.UPDATE_FUN_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.UPDATE_FUN_PRODUCT_ERROR](state) {
        state.status = 'error'
    },

    [types.DELETE_FUN_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_FUN_PRODUCT_ERROR](state) {
        state.status = 'error'
    }

}

export default mutations
