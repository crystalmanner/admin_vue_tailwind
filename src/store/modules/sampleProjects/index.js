import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const initialState = {
  selectedSampleProject: {
    generalContact: {},
    decQmaLayerthickness: {}
  },
  status: '',
  message: '',
  isCreateRequest: false,
  createdProject: {},
  sampleProjects: []
}

export default {
  namespaced: true,

  state: initialState,
  getters,
  actions,
  mutations
}
