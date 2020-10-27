import * as types from './mutation-types'

const mutations = {

    [types.GET_DEC_PRODUCT_ALL_SUCCESS](state, decProducts) {
        state.status = 'success'
        state.decProducts = decProducts
    },

    [types.GET_DEC_PRODUCT_ALL_ERROR](state) {
        state.status = 'error'
    },

    [types.CREATE_DEC_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.CREATE_DEC_PRODUCT_ERROR](state) {
        state.status = 'error'
    },

    [types.UPDATE_DEC_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.UPDATE_DEC_PRODUCT_ERROR](state) {
        state.status = 'error'
    },

    [types.DELETE_DEC_PRODUCT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_DEC_PRODUCT_ERROR](state) {
        state.status = 'error'
    },

    [types.SELECTED_DEC_PRODUCT](state, data) {
        state.selectedDecProduct = data
    }

}

export default mutations
