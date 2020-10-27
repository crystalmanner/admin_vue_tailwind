import * as types from './mutation-types'

const mutations = {

    [types.GET_DEC_CORROSION_ALL_SUCCESS](state, decCorrosions) {
        state.status = 'success'
        state.decCorrosions = decCorrosions
    },

    [types.GET_DEC_CORROSION_ALL_ERROR](state) {
        state.status = 'error'
        state.decCorrosions = []
    },

    [types.CREATE_DEC_CORROSION_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.CREATE_DEC_CORROSION_ERROR](state) {
        state.status = 'error'
    },

    [types.UPDATE_DEC_CORROSION_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.UPDATE_DEC_CORROSION_ERROR](state) {
        state.status = 'error'
    },

    [types.DELETE_DEC_CORROSION_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_DEC_CORROSION_ERROR](state) {
        state.status = 'error'
    },

    [types.SELECTED_DEC_CORROSION](state, data) {
        state.selectedDecCorrosion = data
    }

}

export default mutations
