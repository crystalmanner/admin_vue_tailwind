<template>
  <v-data-table
    :headers="headers"
    :items="decCorrosions"
    :search.sync="search"
    :pagination.sync="pagination"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.brand }}</td>
      <td class="text-xs-left">{{ props.item.product }}</td>
      <td class="text-xs-left">{{ props.item.color }}</td>
      <td class="text-xs-left">{{ props.item.structure }}</td>
      <td class="text-xs-left">{{ props.item.glossiness }}</td>
      <td class="justify-center layout px-0">
        <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
        <v-icon small @click="deleteItem(props.item)">delete</v-icon>
      </td>
    </template>
    <template v-slot:no-results>
      <v-alert
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
  name: "dec-corrosion-table-template",
  props: {
    title: String,
    search: String
  },

  data: () => ({
    dialog: false,
    valid: true,
    // search: '',
    pagination: {
      sortBy: "brand",
      page: 1,
      rowsPerPage: 50 // -1 for All",
    },
    editedItem: {},
    headers: [
      {
        text: "Brand",
        align: "left",
        sortable: false,
        value: "brand"
      },
      { text: "Product", value: "product", align: "left" },
      { text: "Color", value: "color", align: "left" },
      { text: "Structure", value: "structure", align: "left" },
      { text: "Glossiness", value: "glossiness", align: "left" },
      { text: "Actions", value: "name", align: "left", sortable: false }
    ],
  }),

  created() {
    this.initialize()
  },

  computed: {
    ...mapGetters('decCorrosions', ["decCorrosions"]),
  },

  methods: {
    ...mapActions("decCorrosions", ["handleGetDecCorrosions", "handleDeleteDecCorrosion", "handleSelectedDecCorrosion"]),

    initialize() {
      this.handleGetDecCorrosions();
    },

    editItem(item) {
      this.isEdit = true;
      this.handleSelectedDecCorrosion(item)
      this.$emit('handleToggleDialog', true)
    },

    deleteItem(item) {
      confirm("Are you sure you want to delete this item?") &&
        this.handleDeleteDecCorrosion(item._id);
    },
  }
};
</script>
