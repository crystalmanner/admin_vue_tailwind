<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="companies"
      :search.sync="search"
      :pagination.sync="pagination"
      class="elevation-1"
      item-key="generalCompany"
    >
      <template v-slot:items="props">
        <td>{{ props.item.generalCompany }}</td>
        <td class="text-xs-left">{{ props.item.generalStreet }}</td>
        <td class="text-xs-left">{{ props.item.generalZip }}</td>
        <td class="text-xs-left">{{ props.item.generalTown }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: "general-company-table-template",
  props: {
    title: String,
    search: String
  },

  data: () => ({
    dialog: false,
    valid: true,
    // searchContent: '',
    pagination: {
      sortBy: "name",
      page: 1,
      rowsPerPage: 50 // -1 for All",
    },
    headers: [
      {
        text: "GENERAL company name",
        align: "left",
        sortable: true,
        value: "generalCompany"
      },
      { text: "street", value: "generalStreet", align: "left" },
      { text: "zip", value: "generalZip" },
      { text: "town", value: "generalTown" },
      { text: "Actions", value: "name", sortable: false }
    ],
  }),

  created() {
    this.initialize()
  },

  computed: {
    ...mapGetters('companies', ["companies"]),
  },

  methods: {
    ...mapActions("companies", ["handleGetCompanies", "handleDeleteCompany", "handleSelectedCompany"]),

    initialize() {
      this.handleGetCompanies();
    },

    editItem(item) {
      this.isEdit = true;
      this.handleSelectedCompany(item)
      this.$emit('handleToggleDialog', true)
    },

    deleteItem(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.handleDeleteCompany(item._id);
    }
  }
};
</script>