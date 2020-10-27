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
              <v-text-field v-model="selectedDecProduct.brand" label="Brand" :rules="brandRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedDecProduct.product" label="Product" :rules="productRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="selectedDecProduct.color" label="Color" :rules="colorRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedDecProduct.structure" label="Structure" :rules="structureRules"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="selectedDecProduct.glossiness" label="Glossiness" :rules="glossinessRules"></v-text-field>
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
  name: "dec-product-dialog-template",
  props: {
    title: String,
    editedItem: Object
  },

  data: () => ({
    valid: true,
    search: '',
    selectedDecProduct: {},
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
      this.selectedDecProduct =  _.cloneDeep(val);
    }
  },

  methods: {
    ...mapActions("decProducts", ["handleCreateDecProduct", "handleUpdateDecProduct"]),

    close() {
      this.$emit('closed')
      this.selectedDecProduct = {}
    },

    save() {
      const data = {
        brand: this.selectedDecProduct.brand,
        product: this.selectedDecProduct.product,
        color: this.selectedDecProduct.color,
        structure: this.selectedDecProduct.structure,
        glossiness: this.selectedDecProduct.glossiness
      }
      if (this.isEdit) {
        data.id = this.selectedDecProduct._id;
        if (this.$refs.form.validate()) {
          this.handleUpdateDecProduct(data);
          this.close();
        }
      } else {
        if (this.$refs.form.validate()) {
          // console.log(data)
          this.handleCreateDecProduct(data)
          this.close();
        }
      }
    }
  }
};
</script>
