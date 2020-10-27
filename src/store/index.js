import Vue from "vue";
import Vuex from "vuex";

import tables from './modules/tables'
import companies from './modules/companies'
import decCorrosions from './modules/decCorrosions'
import decProducts from './modules/decProducts'
import sampleProjects from './modules/sampleProjects'

import {
    SAMPLE_PROJECT_SELECTED,
    TABLE_SELECTED
} from "./mutationVariables";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {  
        companies,
        decCorrosions,
        decProducts,
        sampleProjects,
        tables
    },

    // state: {
    //     sampleProjectSelected: {
    //         id: "",
    //         projectType: ""
    //     },
    //     tablesSelected: {
    //         id: "",
    //         type: ""
    //     }
    // },
    // getters: {
    //     sampleProject: state => state.sampleProjectSelected,
    //     sampleProjectType: state => state.sampleProjectSelected.projectType,
    //     tablesSelected: state => state.tablesSelected,
    //     tablesSelectedType: state => state.tablesSelected.type
    // },

    // actions: {
    //     sampleProjectSelected: ({
    //         commit
    //     }, projectType) => {
    //         commit(SAMPLE_PROJECT_SELECTED, projectType);
    //     },
    //     tablesSelected: ({
    //         commit
    //     }, type) => {
    //         commit(TABLE_SELECTED, type);
    //     },
    // },
    // mutations: {
    //     [SAMPLE_PROJECT_SELECTED](state, projectType) {
    //         //state.id = id;
    //         state.sampleProjectSelected.projectType = projectType;
    //     },
    //     [TABLE_SELECTED](state, type) {
    //         //state.id = id;
    //         state.tablesSelected.type = type;
    //     }
    // }
})