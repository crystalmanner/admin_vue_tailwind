<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedCompany.generalCompany" label="Company" :rules="companyRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedCompany.generalStreet" label="Street" :rules="streetRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalZip" label="zip" :rules="zipRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalTown" label="town" :rules="townRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalCountry" label="Country" :rules="countryRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalContact.contact" label="Contact"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalContact.email" label="Email"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedCompany.generalContact.mobile" label="Mobile"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import _ from 'lodash'

export default {
  name: "general-company-dialog-template",
  props: {
    title: String,
    dialog: Boolean,
    editedItem: Object
  },

  data: () => ({
    valid: true,
    search: '',
    selectedCompany: {
      generalContact: {}
    },
    isEdit: false,
    companyRules: [v => !!v || "Company Name is required"],
    streetRules: [v => !!v || "Street is required"],
    zipRules: [v => !!v || "Zip is required"],
    townRules: [v => !!v || "Town is required"],
    countryRules: [v => !!v || "Country is required"],
  }),

  watch: {
    editedItem(val) {
      if (val._id) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
      this.selectedCompany =  _.cloneDeep(val);
    }
  },

  methods: {
    ...mapActions("companies", ["handleCreateCompany", "handleUpdateCompany"]),

    close() {
      this.$emit('closed')
      this.selectedCompany = {generalContact: {}}
    },

    save() {
      const data = {
        generalCompany: this.selectedCompany.generalCompany,
        generalStreet: this.selectedCompany.generalStreet,
        generalZip: this.selectedCompany.generalZip,
        generalTown: this.selectedCompany.generalTown,
        generalCountry: this.selectedCompany.generalCountry,
        generalContact: this.selectedCompany.generalContact
      }
      if (this.isEdit) {
        data.id = this.selectedCompany._id;
        if (this.$refs.form.validate()) {
          this.handleUpdateCompany(data);
          this.close();
        }
      } else {
        if (this.$refs.form.validate()) {
          this.handleCreateCompany(data)
          this.close();
        }
      }
    }
  }
};
</script>