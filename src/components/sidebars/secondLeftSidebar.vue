<template>
  <!-- second sidebar start -->
  <v-navigation-drawer fixed class="secondLeftSidebar" disable-resize-watcher>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn
          block
          class="my-0"
          style="background-color:#b00e79; color:#fff;"
          @click="filterData('all')"
          v-bind:class="{ activeProject: filter=='all'}"
        >ALL</v-btn>
      </v-flex>
      <v-layout row wrap v-if="$route.path=='/'">
        <v-flex xs6 sm6 md12 lg6 xl6>
          <v-btn block class="my-0" style="background-color:#bc3c90; color:#fff;">#</v-btn>
        </v-flex>
        <v-flex xs6 sm6 md12 lg6 xl6>
          <v-btn
            block
            class="my-0"
            style="background-color:#bc3c90; color:#fff;"
            @click="filterData('date')"
            v-bind:class="{ activeProject: filter=='date'}"
          >DATE</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$route.path=='/tables'">
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-btn
            block
            class="my-0"
            style="background-color:#bc3c90; color:#fff;"
            @click="filterData('GENERAL')"
            v-bind:class="{ activeProject: filter=='GENERAL'}"
          >GENERAL</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
      <v-flex xs6 sm6 md12 lg6 xl6>
        <v-btn block class="my-0 grey-btn" @click="filterData('DECORATIVE')" v-bind:class="{ activeProject: filter=='DECORATIVE'}">DECORATIVE</v-btn>
      </v-flex>
      <v-flex xs6 sm6 md12 lg6 xl6>
        <v-btn block class="my-0 grey-btn" @click="filterData('FUNCTIONAL')" v-bind:class="{ activeProject: filter=='FUNCTIONAL'}">FUNCTIONAL</v-btn>
      </v-flex>
      <v-flex xs6 sm6 md12 lg6 xl6>
        <v-btn block class="mt-0 grey-btn" @click="filterData('MOBILITY')" v-bind:class="{ activeProject: filter=='MOBILITY'}">MOBILITY</v-btn>
      </v-flex>
      <v-flex xs6 sm6 md12 lg6 xl6>
        <v-btn block class="mt-0 grey-btn" @click="filterData('ARCHITECTURE')" v-bind:class="{ activeProject: filter=='ARCHITECTURE'}">ARCHITECTURE</v-btn>
      </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$route.path=='/'">
        <v-flex xs12 v-for="(data, index) in sampleProjectsDataFiltered" v-bind:key="index">
          <v-btn block class="mt-0 project-btn" @click="selectSampeProduct(data, index)" v-bind:class="{ activeProject: seletedIndex==index}">
            <span class="project-number">{{data.generalProjectNumber}}-{{Object.values(data.generalProjectNumberSub)[0]}}</span>
            <span class="project-create-date">{{data.generalDate.substr(0, 10)}}</span>
            <span class="project-general-company">{{data.generalCompany}}</span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$route.path=='/tables'">
        <v-flex xs12 sm12 md12 lg12 xl12 v-for="(data, index) in tableDataFiltered" v-bind:key="'t'+ index">
          <v-btn block class="mt-0 project-btn" @click="handleTablesSelected(data.title, index)" v-bind:class="{ activeProject: tableSeletedIndex==index}">
            <span class="table-type">{{data.type}}</span>
            <span
              style=" position: absolute; left: -5px; margin-top:5px; color:#AF0D7B;"
            >{{data.title}}</span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="$route.path=='/settings'">
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-btn block class="mt-0 project-btn user-type" @click="adminSelected('admin')" v-bind:class="{ activeProject: userType=='admin'}">User Administration</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-navigation-drawer>
  <!-- second sidebar end -->
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import _ from 'lodash';

export default {
  data: () => ({
    tableData: [
      {
        id: "1",
        type: "GENERAL",
        title: "COMPANY",

      },
      {
        id: "2",
        type: "DECORATIVE",
        title: "COATING PRODUCT",

      },
      {
        id: "3",
        type: "DECORATIVE",
        title: "CORROSION PRIMER"
      },
      {
        id: "4",
        type: "DECORATIVE",
        title: "RAL COLORS"
      },
      {
        id: "5",
        type: "FUNCTIONAL",
        title: "COATING PRODUCTS"
      },
      {
        id: "6",
        type: "FUNCTIONAL",
        title: "CORROSION PRODUCTS"
      },
      {
        id: "7",
        type: "MOBILITY",
        title: "COATING PRODUCT"
      }
    ],
    sampleProjectsDataFiltered: [],
    tableDataFiltered: [],
    filter: 'all',
    seletedIndex: -1,
    tableSeletedIndex: -1,
    userType: ''
  }),

  created() {
    this.initialize();
  },

  computed: {
    ...mapGetters('sampleProjects', ['sampleProjects']),
  },

  watch: {
    sampleProjects(val) {
      this.sampleProjectsDataFiltered = _.cloneDeep(val);
    }
  },

  methods: {
    ...mapActions('tables', ['tablesSelected']),
    ...mapActions('sampleProjects', ['handleSelectedSampleProduct', 'handleGetSampleProjects']),
    ...mapActions('users', ['handleAdminSelect']),

    initialize() {
      this.handleGetSampleProjects();
      this.tableDataFiltered = this.tableData;
    },

    filterData(filter) {
      this.filter = filter;
      if (
        filter == "GENERAL" ||
        filter == "DECORATIVE" ||
        filter == "FUNCTIONAL" ||
        filter == "MOBILITY" ||
        filter == "ARCHITECTURE"
      ) {
        this.sampleProjectsDataFiltered = this.sampleProjects.filter(
          e => e.type == filter
        );

        this.tableDataFiltered = this.tableData.filter(e => e.type == filter);
      }
      if (filter == "all") {
        this.sampleProjectsDataFiltered = this.sampleProjects;
        this.tableDataFiltered = this.tableData;
      }
    },

    adminSelected(type) {
      this.userType = type;
      this.handleAdminSelect()
    },

    selectSampeProduct(data, index) {
      this.handleSelectedSampleProduct(data)
      this.seletedIndex = index;
    },

    handleTablesSelected(title, index) {
      this.tablesSelected(title);
      this.tableSeletedIndex = index;
    }
  },

};
</script>
<style>
.project-number {
  position: absolute;
  left: -5px;
  margin-top: -10px;
  font-size: 13px;
  color: rgb(176, 14, 121);
  font-weight: bold;
}
.project-create-date {
  position: absolute;
  right: -5px;
  margin-top: -10px;
  color: #777777;
  font-weight: normal;
}
.project-general-company {
  position: absolute;
  left: -5px;
  margin-top:7px;
  color:#000000;
  font-weight: normal;
}

.activeProject .project-create-date, .activeProject .project-general-company {
  color: #ffffff;
}

.table-type {
  position: absolute;
  left: -5px;
  margin-top: -10px;
}

.activeProject .table-type {
  color: #ffffff;
}

.user-type.activeProject div{
  color: #ffffff;
}
</style>
