<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedDecCorrosion.brand" label="Brand" :rules="brandRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedDecCorrosion.product" label="Product" :rules="productRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedDecCorrosion.color" label="Color" :rules="colorRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedDecCorrosion.structure" label="Structure" :rules="structureRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedDecCorrosion.glossiness" label="Glossiness" :rules="glossinessRules"></v-text-field>
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
export default {
  name: "dec-corrosion-dialog-template",
  props: {
    title: String,
    editedItem: Object
  },

  data: () => ({
    valid: true,
    search: '',
    selectedDecCorrosion: {},
    isEdit: false,
    brandRules: [v => !!v || "Brand is required"],
    productRules: [v => !!v || "Product is required"],
    colorRules: [v => !!v || "Color is required"],
    structureRules: [v => !!v || "Structure is required"],
    glossinessRules: [v => !!v || "glossiness is required"],
  }),

  watch: {
    editedItem(val) {
      if (val._id) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
      this.selectedDecCorrosion =  _.cloneDeep(val);
    }
  },

  methods: {
    ...mapActions("decCorrosions", ["handleCreateDecCorrosion", "handleUpdateDecCorrosion"]),

    close() {
      this.$emit('closed')
      this.selectedDecCorrosion = {}
    },

    save() {
      const data = {
        brand: this.selectedDecCorrosion.brand,
        product: this.selectedDecCorrosion.product,
        color: this.selectedDecCorrosion.color,
        structure: this.selectedDecCorrosion.structure,
        glossiness: this.selectedDecCorrosion.glossiness
      }
      if (this.isEdit) {
        data.id = this.selectedDecCorrosion._id;
        if (this.$refs.form.validate()) {
          this.handleUpdateDecCorrosion(data);
          this.close();
        }
      } else {
        if (this.$refs.form.validate()) {
          this.handleCreateDecCorrosion(data)
          this.close();
        }
      }
    }
  }
};
</script>
