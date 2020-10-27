import * as types from './mutation-types'

const mutations = {

    [types.GET_COMPANY_ALL_SUCCESS](state, companies) {
        state.status = 'success'
        state.companies = companies
    },

    [types.GET_COMPANY_ALL_ERROR](state) {
        state.status = 'error'
    },

    [types.CREATE_COMPANY_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.CREATE_COMPANY_ERROR](state) {
        state.status = 'error'
    },

    [types.UPDATE_COMPANY_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.UPDATE_COMPANY_ERROR](state) {
        state.status = 'error'
    },

    [types.DELETE_COMPANY_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_COMPANY_ERROR](state) {
        state.status = 'error'
    },
    [types.SELECTED_COMPANY](state, data) {
        state.selectedCompany = data
    }

}

export default mutations
