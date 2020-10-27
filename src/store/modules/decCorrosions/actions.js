import * as types from './mutation-types'
import Api from '../../../services/Api'

export const handleGetDecCorrosions = ({ commit }) => {
    Api().get(`/api/v1/corrosion/corrosions`).then((response) => {
        commit(types.GET_DEC_CORROSION_ALL_SUCCESS, response.data.data)
    }).catch(err => {
        commit(types.GET_DEC_CORROSION_ALL_ERROR)
    })
}

export const handleCreateDecCorrosion = ({ commit, dispatch }, data) => {
    Api().post(`/api/v1/corrosion/corrosion/create`, data).then((response) => {
        commit(types.CREATE_DEC_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetDecCorrosions')
    }).catch(err => {
        commit(types.CREATE_DEC_CORROSION_ERROR)
    })
}

export const handleUpdateDecCorrosion = ({ commit, dispatch }, data) => {
    Api().put(`/api/v1/corrosion/corrosion/:`, data).then((response) => {
        commit(types.UPDATE_DEC_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetDecCorrosions')
    }).catch(err => {
        commit(types.UPDATE_DEC_CORROSION_ERROR)
    })
}

export const handleDeleteDecCorrosion = ({ commit, dispatch }, id) => {
    Api().post(`/api/v1/corrosion/corrosion/delete/:`, {id: id}).then((response) => {
        commit(types.DELETE_DEC_CORROSION_SUCCESS, response.data.message)
        dispatch('handleGetDecCorrosions')

    }).catch(err => {
        commit(types.DELETE_DEC_CORROSION_ERROR)
    })
}

export const handleSelectedDecCorrosion = ({ commit }, data) => {
    commit(types.SELECTED_DEC_CORROSION, data)
}