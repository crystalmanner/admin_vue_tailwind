<template>
  <v-container fluid>
    <!-- table start -->
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
        <v-layout row wrap>
          <div style="width: 100%">
            <h3 class="headline mb-0" style="color: #ffffff;">
              <strong>Edit Account</strong>
            </h3>
          </div>
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12 xl12 >
                <v-card style="height: 50vh;">
                  <v-card-text>
                    <v-flex lg4 xl4>
                      <v-text-field label="username" required></v-text-field>
                    </v-flex>
                    <v-flex lg4 xl4>
                      <v-text-field label="new password" required></v-text-field>
                    </v-flex>
                    <v-flex lg4 xl4>
                      <v-text-field label="confirm new password" required></v-text-field>
                    </v-flex>
                    <v-flex md6 lg3 xl3 >
                        <v-btn fill color="blue" style="color:#fff; float:left;">save</v-btn>
                    </v-flex>
                    <v-flex md6 lg3 xl3 >
                          <v-btn fill color="grey" style="color:#fff; float:left;">cancel</v-btn>
                      </v-flex>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import swal from "sweetalert2";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({}),
  created() {},
  methods: {}
};
</script>
