import * as types from './mutation-types'

const mutations = {
    [types.TABLE_SELECTED](state, type) {
        //state.id = id;
        state.tablesSelected.type = type;
    }

}

export default mutations
