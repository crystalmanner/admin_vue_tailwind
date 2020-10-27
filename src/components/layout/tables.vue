<template>
  <v-container fluid>
    <!-- table start-->
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
      <v-layout row wrap>
        <div style="width: 100%">
          <h3 class="headline mb-0" style="color: #ffffff;"><strong>{{getTitle}}</strong></h3>
        </div>
      </v-layout>
    </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12 mt-3 px-2>
        <v-toolbar flat color="white">
          <v-toolbar-title></v-toolbar-title>

          <v-spacer></v-spacer>
          <v-flex xs12 sm12 md12 lg3 xl3 mb-2 pr-5>
            <v-text-field
                  v-model="search"
                  prepend-icon="search"
                  label="Search"
                  single-line
                  hide-details
          ></v-text-field>
          </v-flex>
          <v-dialog v-model="dialog" max-width="1200px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>

            <generalCompanyDialog v-if="type== 'company'" :title="getTitle" @closed="close" :editedItem="selectedCompany"></generalCompanyDialog>
            <decProductDialog v-if="type== 'coatingProduct'" :title="getTitle" @closed="close" :editedItem="selectedDecProduct"></decProductDialog>
            <decCorrosionDialog v-if="type== 'corrosionPrimer'" :title="getTitle" @closed="close" :editedItem="selectedDecCorrosion"></decCorrosionDialog>

          </v-dialog>
        </v-toolbar>
        <generalCompanyTable v-if="type== 'company'" :title="getTitle" :search="search" @handleToggleDialog="toggleDialog"></generalCompanyTable>
        <decProductTable v-if="type== 'coatingProduct'" :title="getTitle" :search="search" @handleToggleDialog="toggleDialog"></decProductTable>
        <decCorrosionTable v-if="type== 'corrosionPrimer'" :title="getTitle" :search="search" @handleToggleDialog="toggleDialog"></decCorrosionTable>
      </v-flex>
      <!-- table end -->
    </v-layout>
  </v-container>
</template>

<script>
import Fuse from 'fuse.js';
import swal from 'sweetalert2';
import { mapGetters, mapActions, mapState } from 'vuex';

import decCorrosionTable from '@/components/tables/corrosion/decCorrosionTable';
import decCorrosionDialog from '@/components/tables/corrosion/decCorrosionDialog';
import decProductDialog from '@/components/tables/product/decProductDialog';
import decProductTable from '@/components/tables/product/decProductTable';
import generalCompanyTable from '@/components/tables/company/generalCompanyTable';
import generalCompanyDialog from '@/components/tables/company/generalCompanyDialog';

export default {
  components: {
    decCorrosionTable,
    decCorrosionDialog,
    generalCompanyTable,
    generalCompanyDialog,
    decProductTable,
    decProductDialog
  },
  data: () => ({
    dialog: false,
    type: 'company',
    search: '',
    emptyCompany: {
      generalContact: {}
    },
    emptyObject: {}
  }),

  computed: {
    ...mapGetters('tables', ["tablesSelectedType"]),
    ...mapGetters('companies', ["selectedCompany"]),
    ...mapGetters('decCorrosions', ["selectedDecCorrosion"]),
    ...mapGetters('decProducts', ["selectedDecProduct"]),
    getTitle() {
      let title = ''
      switch(this.type) {
        case 'company':
          title = 'COMPANY';
          break;
        case 'coatingProduct':
          title = 'COATING PRODUCT';
          break;
        case 'corrosionPrimer':
          title = 'CORROSION PRIMER';
          break;
        default:
          title = 'company';
      }
      return title;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    tablesSelectedType(type) {
      if (type == "COMPANY") {
        this.type = 'company';
      }
      else if (type == "COATING PRODUCT") {
        this.type = 'coatingProduct';
      }
      else if (type == "CORROSION PRIMER") {
        this.type = 'corrosionPrimer';
      } else {
        this.type = 'company';
      }
    }
  },

  methods: {
    ...mapActions("companies", ["handleSelectedCompany"]),
    ...mapActions("decCorrosions", ["handleSelectedDecCorrosion"]),
    ...mapActions("decProducts", ["handleSelectedDecProduct"]),
    close() {
      this.dialog = false;
      this.handleSelectedCompany(this.emptyCompany);
      this.handleSelectedDecCorrosion(this.emptyObject);
      this.handleSelectedDecProduct(this.emptyObject);
    },
    toggleDialog(val) {
      this.dialog = val;
    }
  }
};
</script>
