import axios from 'axios'
import * as types from './mutation-types'

const API_URL = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/vueadmin-ijxjp/service/http/incoming_webhook/'

export const handleGetFunProducts = ({ commit }) => {
    axios.get(`${API_URL}companyGetAll?secret=utom-vue-admin`).then((response) => {
        commit(types.GET_FUN_PRODUCT_ALL_SUCCESS, response.data.companies)
    }).catch(err => {
        commit(types.GET_FUN_PRODUCT_ALL_ERROR)
    })
}

export const handleCreateFunProduct = ({ commit, dispatch }, data) => {
    axios.post(`${API_URL}companyCreate`, data).then((response) => {
        commit(types.CREATE_FUN_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetFunProducts')
    }).catch(err => {
        commit(types.CREATE_FUN_PRODUCT_ERROR)
    })
}

export const handleUpdateFunProduct = ({ commit, dispatch }, data) => {
    axios.put(`${API_URL}companyUpdate`, data).then((response) => {
        commit(types.UPDATE_FUN_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetFunProducts')
    }).catch(err => {
        commit(types.UPDATE_FUN_PRODUCT_ERROR)
    })
}

export const handleDeleteFunProduct = ({ commit, dispatch }, id) => {
    axios.post(`${API_URL}companyDelete`, {id: id}).then((response) => {
        console.log(response);
        commit(types.DELETE_FUN_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetFunProducts')

    }).catch(err => {
        commit(types.DELETE_FUN_PRODUCT_ERROR)
    })
}