import * as types from './mutation-types'

const mutations = {

    [types.GET_SAMPLE_PROJECT_ALL_SUCCESS](state, sampleProjects) {
        state.status = 'success'
        state.sampleProjects = sampleProjects
        // state.selectedSampleProject = sampleProjects[0]
        state.isCreateRequest = false
    },

    [types.GET_SAMPLE_PROJECT_ALL_ERROR](state) {
        state.status = 'error'
        state.isCreateRequest = false
    },

    [types.CREATE_SAMPLE_PROJECT_SUCCESS](state, result) {
        state.status = 'success'
        state.selectedSampleProject = result
    },

    [types.CREATE_SAMPLE_PROJECT_ERROR](state) {
        state.status = 'error',
        state.isCreateRequest = false
    },

    [types.UPDATE_SAMPLE_PROJECT_SUCCESS](state, result) {
        state.status = 'success'
        state.isCreateRequest = false
        state.selectedSampleProject = result
    },

    [types.UPDATE_SAMPLE_PROJECT_ERROR](state) {
        state.status = 'error'
        state.isCreateRequest = false
    },

    [types.DELETE_SAMPLE_PROJECT_SUCCESS](state, message) {
        state.status = 'success'
        state.message = message
    },

    [types.DELETE_SAMPLE_PROJECT_ERROR](state) {
        state.status = 'error'
    },

    [types.SELECTED_SAMPLE_PROJECT](state, data) {
        //state.id = id;
        state.selectedSampleProject = data;
    },

    [types.CREATE_SAMPLE_PROJECT_REQUEST](state) {
        //state.id = id;
        state.isCreateRequest = true;
    },

}

export default mutations
