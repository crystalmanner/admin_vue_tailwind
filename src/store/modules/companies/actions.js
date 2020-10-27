// import axios from 'axios'
import * as types from './mutation-types'
import Api from '../../../services/Api'

export const handleGetCompanies = ({ commit }) => {
    Api().get(`/api/v1/company/companys`).then((response) => {
        commit(types.GET_COMPANY_ALL_SUCCESS, response.data.data)
    }).catch(err => {
        commit(types.GET_COMPANY_ALL_ERROR)
    })
}

export const handleCreateCompany = ({ commit, dispatch }, data) => {
    Api().post(`/api/v1/company/company/create`, data).then((response) => {
        commit(types.CREATE_COMPANY_SUCCESS, response.data.message)
        dispatch('handleGetCompanies')
    }).catch(err => {
        commit(types.CREATE_COMPANY_ERROR)
    })
}

export const handleUpdateCompany = ({ commit, dispatch }, data) => {
    Api().put(`/api/v1/company/company/:`, data).then((response) => {
        commit(types.UPDATE_COMPANY_SUCCESS, response.data.message)
        dispatch('handleGetCompanies')
    }).catch(err => {
        commit(types.UPDATE_COMPANY_ERROR)
    })
}

export const handleDeleteCompany = ({ commit, dispatch }, id) => {
    Api().post(`/api/v1/company/company/delete/:`, {id:id}).then((response) => {
        
        commit(types.DELETE_COMPANY_SUCCESS, response.data.message)
        dispatch('handleGetCompanies')

    }).catch(err => {
        commit(types.DELETE_COMPANY_ERROR)
    })
}

export const handleSelectedCompany = ({ commit }, data) => {
    commit(types.SELECTED_COMPANY, data)
}