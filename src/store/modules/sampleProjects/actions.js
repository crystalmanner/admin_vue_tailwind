import axios from 'axios'
import * as types from './mutation-types'
import { Promise, reject } from 'q';

const API_URL = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/vueadmin-ijxjp/service/http/incoming_webhook/'

export const handleGetSampleProjects = ({ commit }) => {
    axios.get(`${API_URL}sampleProjectGetAll`).then((response) => {
        commit(types.GET_SAMPLE_PROJECT_ALL_SUCCESS, response.data.sampleProjects)
    }).catch(err => {
        commit(types.GET_SAMPLE_PROJECT_ALL_ERROR)
    })
}

export const handleCreateSampleProduct = ({ commit, dispatch }, data) => {
    axios.post(`${API_URL}sampleProjectCreate`, data).then((response) => {
        commit(types.CREATE_SAMPLE_PROJECT_SUCCESS, response.data.message)
        dispatch('handleGetSampleProjects')
    }).catch(err => {
        commit(types.CREATE_SAMPLE_PROJECT_ERROR)
    })
}

export const handleUpdateSampleProduct = ({ commit, dispatch }, data) => {
    axios.put(`${API_URL}sampleProjectUpdate`, data).then((response) => {
        commit(types.UPDATE_SAMPLE_PROJECT_SUCCESS, response.data)
        dispatch('handleGetSampleProjects')
    }).catch(err => {
        commit(types.UPDATE_SAMPLE_PROJECT_ERROR)
    })
}

export const handleDeleteSampleProduct = ({ commit, dispatch }, id) => {
    console.log(id);
    axios.post(`${API_URL}sampleProjectDelete`, {id: id}).then((response) => {
        commit(types.DELETE_SAMPLE_PROJECT_SUCCESS, response.data.message)
        dispatch('handleGetSampleProjects')

    }).catch(err => {
        commit(types.DELETE_SAMPLE_PROJECT_ERROR)
    })
}

export const handleSelectedSampleProduct = ({ commit }, data) => {
    commit(types.SELECTED_SAMPLE_PROJECT, data)
}

export const handleCreateProjectRequest = ({ commit }) => {
    commit(types.CREATE_SAMPLE_PROJECT_REQUEST)
}