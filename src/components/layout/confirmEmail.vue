<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
        <v-layout row wrap>
          <div style="width: 100%">
            <h3 class="headline mb-0" style="color: #ffffff;">
              <strong>Email confirmation done successfully!</strong>
            </h3>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  const {
    Stitch,
    RemoteMongoClient,
    UserPasswordCredential
  } = require('mongodb-stitch-browser-sdk');
  export default {
    data: () => ({
    }),

    computed: {
    },

    created() {
      this.initialize();
    },

    methods: {
      initialize() {
        const client = Stitch.initializeDefaultAppClient('vueadmin-ijxjp');
        const emailPassClient = client.auth.getProviderClient(UserPasswordAuthProviderClient.factory);
        // Parse the URL query parameters
        const url = window.location.search;
        const params = new URLSearchParams(url);
        const token = params.get('token');
        const tokenId = params.get('tokenId');
        return emailPassClient.confirmUser(token, tokenId);
      }
    }
  };
</script>
