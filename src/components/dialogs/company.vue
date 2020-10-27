<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="600">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Company</v-card-title>

        <v-data-table :headers="headers" :items="tableData" class="elevation-1">
          <template v-slot:items="props">
            <td>
              <v-checkbox></v-checkbox>
            </td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.street }}</td>
            <td>{{ props.item.zip }}</td>
            <td>{{ props.item.town }}</td>
            <td>{{ props.item.country }}</td>
          </template>
        </v-data-table>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import bus from "../../eventBus";

export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Select", value: "select" },
        { text: "Name", value: "name" },
        { text: "Street", value: "street" },
        { text: "Zip", value: "zip" },
        { text: "Town", value: "town" },
        { text: "Country", value: "country" }
      ],
      tableData: [
        {
          name: "Name1",
          street: "Street1",
          zip: "Zip1",
          town: "Town1",
          country: "Country1"
        },
        {
          name: "Name2",
          street: "Street2",
          zip: "Zip2",
          town: "Town2",
          country: "Country2"
        },
        {
          name: "Name3",
          street: "Street3",
          zip: "Zip3",
          town: "Town3",
          country: "Country3"
        },
        {
          name: "Name4",
          street: "Street4",
          zip: "Zip4",
          town: "Town4",
          country: "Country4"
        },
        {
          name: "Name5",
          street: "Street5",
          zip: "Zip5",
          town: "Town5",
          country: "Country5"
        }
      ]
    };
  },
  created() {
    let self = this;
    bus.$on("company", function() {
      console.log("clicked");
      self.dialog = !self.dialog;
      console.log(self.dialog);
    });
  }
};
</script>