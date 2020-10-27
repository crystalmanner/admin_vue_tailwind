import axios from 'axios'
import * as types from './mutation-types'

const API_URL = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/vueadmin-ijxjp/service/http/incoming_webhook/'

export const handleGetUsersInfo = ({ commit }) => {
    axios.get(`${API_URL}userGetAll?secret=utom-vue-admin`).then((response) => {
        commit(types.GET_USER_ALL_SUCCESS, response.data.users)
    }).catch(err => {
        commit(types.GET_USER_ALL_ERROR)
    })
}

export const handleCreateUserInfo = ({ commit, dispatch }, data) => {
    axios.post(`${API_URL}userCreate`, data).then((response) => {
        commit(types.CREATE_USER_SUCCESS, response.data.message)
        dispatch('handleGetUsersInfo')
    }).catch(err => {
        commit(types.CREATE_USER_ERROR)
    })
}

export const handleUpdateUserInfo = ({ commit, dispatch }, data) => {
    axios.put(`${API_URL}userUpdate`, data).then((response) => {
        commit(types.UPDATE_USER_SUCCESS, response.data.message)
        dispatch('handleGetUsersInfo')
    }).catch(err => {
        commit(types.UPDATE_USER_ERROR)
    })
}

export const handleDeleteUserInfo = ({ commit, dispatch }, email) => {
    axios.delete(`${API_URL}userDelete?email=${email}`).then((response) => {
        console.log(response);
        commit(types.DELETE_USER_SUCCESS, response.data.message)
        dispatch('handleGetUsersInfo')

    }).catch(err => {
        commit(types.DELETE_USER_ERROR)
    })
}

export const handleAdminSelect = ({ commit }) => {
    commit(types.USER_ADMIN_SELECT)
}