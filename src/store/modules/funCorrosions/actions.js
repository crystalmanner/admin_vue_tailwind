import axios from 'axios'
import * as types from './mutation-types'

const API_URL = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/vueadmin-ijxjp/service/http/incoming_webhook/'

export const handleGetfunCorrosions = ({ commit }) => {
    axios.get(`${API_URL}funCorrosionGetAll?secret=utom-vue-admin`).then((response) => {
        commit(types.GET_FUN_CORROSION_ALL_SUCCESS, response.data.companies)
    }).catch(err => {
        commit(types.GET_FUN_CORROSION_ALL_ERROR)
    })
}

export const handleCreateFunCorrosion = ({ commit, dispatch }, data) => {
    axios.post(`${API_URL}funCorrosionCreate`, data).then((response) => {
        commit(types.CREATE_FUN_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetfunCorrosions')
    }).catch(err => {
        commit(types.CREATE_FUN_CORROSION_ERROR)
    })
}

export const handleUpdateFunCorrosion = ({ commit, dispatch }, data) => {
    axios.put(`${API_URL}funCorrosionUpdate`, data).then((response) => {
        commit(types.UPDATE_FUN_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetfunCorrosions')
    }).catch(err => {
        commit(types.UPDATE_FUN_CORROSION_ERROR)
    })
}

export const handleDeleteFunCorrosion = ({ commit, dispatch }, id) => {
    axios.post(`${API_URL}funCorrosionDelete`, {id: id}).then((response) => {
        console.log(response);
        commit(types.DELETE_FUN_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetfunCorrosions')

    }).catch(err => {
        commit(types.DELETE_FUN_CORROSION_ERROR)
    })
}