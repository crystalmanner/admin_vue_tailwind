import * as types from './mutation-types'
import Api from '../../../services/Api'

export const handleGetDecProducts = ({ commit }) => {
    Api().get(`/api/v1/product/products`).then((response) => {
        commit(types.GET_DEC_PRODUCT_ALL_SUCCESS, response.data.data)
    }).catch(err => {
        commit(types.GET_DEC_PRODUCT_ALL_ERROR)
    })
}

export const handleCreateDecProduct = ({ commit, dispatch }, data) => {
    Api().post(`/api/v1/product/product/create`, data).then((response) => {
        commit(types.CREATE_DEC_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetDecProducts')
    }).catch(err => {
        commit(types.CREATE_DEC_PRODUCT_ERROR)
    })
}

export const handleUpdateDecProduct = ({ commit, dispatch }, data) => {
    Api().put(`/api/v1/product/product/:`, data).then((response) => {
        commit(types.UPDATE_DEC_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetDecProducts')
    }).catch(err => {
        commit(types.UPDATE_DEC_PRODUCT_ERROR)
    })
}

export const handleDeleteDecProduct = ({ commit, dispatch }, id) => {
    Api().post(`/api/v1/product/product/delete/:`, {id: id}).then((response) => {
        commit(types.DELETE_DEC_PRODUCT_SUCCESS, response.data.message)
        dispatch('handleGetDecProducts')

    }).catch(err => {
        commit(types.DELETE_DEC_PRODUCT_ERROR)
    })
}

export const handleSelectedDecProduct = ({ commit }, data) => {
    commit(types.SELECTED_DEC_PRODUCT, data)
}