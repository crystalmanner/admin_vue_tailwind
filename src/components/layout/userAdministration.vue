<template>
  <v-container fluid>
    <!-- table start-->
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
        <v-layout row wrap>
          <div style="width: 100%">
            <h3 class="headline mb-0" style="color: #ffffff;">
              <strong>User administration</strong>
            </h3>
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
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New User</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        v-model="editedItem.email"
                        label="email"
                        :disabled="editedIndex > -1"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="editedItem.password1"
                        label="password"
                        :type="'password'"
                        v-if="editedIndex == -1"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="editedItem.password2"
                        label="confirm password"
                        :type="'password'"
                        v-if="editedIndex == -1"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field v-model="editedItem.givenName" label="given name"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field v-model="editedItem.familyName" label="family name"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.position" label="position"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.mobile" label="mobile"></v-text-field>
                    </v-flex>
                    <v-flex lg12>
                      <v-select dense :items="roles" label="role" v-model="editedItem.role"></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="tableData"
          :search="search"
          :pagination.sync="pagination"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.givenName + " " + props.item.familyName }}</td>
            <td class="text-xs-left">{{ props.item.position }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.mobile }}</td>
            <td class="text-xs-left">{{ props.item.role }}</td>

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
      </v-flex>
      <!-- table end -->
    </v-layout>
  </v-container>
</template>
<script>
import Fuse from "fuse.js";
import swal from "sweetalert2";
import { mapGetters, mapActions, mapState } from "vuex";
import userAdministration from "../../services/userAdministration";
export default {
  data: () => ({
    dialog: false,
    search: "",
    pagination: {
      sortBy: "name",
      page: 1,
      rowsPerPage: 20 // -1 for All",
    },
    headers: [],
    tableData: [],
    headers1: [
      {
        text: "full name",
        align: "left",
        sortable: true,
        value: "name"
      },
      { text: "position", value: "position" },
      { text: "email", value: "email", align: "left" },
      { text: "mobile", value: "mobile" },
      { text: "role", value: "role" },

      { text: "Actions", value: "name", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {},
    roles: ["user", "superuser", "admin"]
  }),

  computed: {
    ...mapGetters(["tablesSelectedType"]),
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    tablesSelectedType(type) {
      /*
      if (type == "COMPANY") {
        this.headers = this.headers1;
        this.tableData = this.tableData1;
      }
      if (type == "COATING PRODUCT") {
        this.headers = this.headers2;
        this.tableData = this.tableData2;
      }
      if (type == "CORROSION PRIMER") {
        this.headers = this.headers3;
        this.tableData = this.tableData3;
      }
      */
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      let res = await userAdministration.getUsers();
      this.tableData = res.data.data;
      this.headers = this.headers1;
    },

    editItem(item) {
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?");
      let res = await userAdministration.deleteUser({ userID: item["_id"] });
      if (!res.data.success) {
        console.log("Edit user error!!");
        return;
      }
      this.tableData.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = {};
        this.editedIndex = -1;
      }, 300);
    },

    async save() {
      if (this.editedIndex > -1) {
        console.log(this.tableData[this.editedIndex]);
        // Edit User
        Object.assign(this.tableData[this.editedIndex], {
          id: this.editedItem["_id"],
          givenName: this.editedItem.givenName,
          familyName: this.editedItem.familyName,
          position: this.editedItem.position,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          role: this.editedItem.role
        });
        let res = await userAdministration.updateUser({
          userID: this.editedItem["_id"],
          givenName: this.editedItem.givenName,
          familyName: this.editedItem.familyName,
          position: this.editedItem.position,
          username: this.editedItem.username,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          role: this.editedItem.role
        });
        if (!res.data.success) {
          console.log("Edit user error!!");
          return;
        }
      } else {
        // New User
        let res = await userAdministration.createUser({
          givenName: this.editedItem.givenName,
          familyName: this.editedItem.familyName,
          position: this.editedItem.position,
          username: this.editedItem.username,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          role: this.editedItem.role,
          password: this.editedItem.password1
        });

        console.log(res.data);

        if (!res.data.success) {
          console.log("Create user error!!");
          return;
        }
        this.tableData.push({
          id: res.data.userID,
          givenName: this.editedItem.givenName,
          familyName: this.editedItem.familyName,
          position: this.editedItem.position,
          email: this.editedItem.email,
          mobile: this.editedItem.mobile,
          role: this.editedItem.role
        });
      }
      this.close();
    }
  }
};
</script>
