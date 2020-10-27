import * as types from './mutation-types'

export const tablesSelected = ({ commit }, type) => {
    commit(types.TABLE_SELECTED, type);
}
