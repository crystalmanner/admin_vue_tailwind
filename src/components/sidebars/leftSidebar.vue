<template>
  <v-navigation-drawer fixed app class="leftSidebar" disable-resize-watcher>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 mt-3 mb-3 pl-3>
        <v-img mt-5 src="static/image/logo_01@2x.png" width="140"></v-img>
      </v-flex>
      <v-flex xs12 sm12 md12 lg5 xl5>
        <v-img mt-5 src="static/image/dom_profile_01@2x.png" width="70"></v-img>
      </v-flex>
      <v-flex xs12 sm12 md12 lg7 xl7>
        <v-btn block class="my-0 edit-btn" to="/profile">edit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn block class="leftMenu-btn" to="/">Sample projects</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn block class="leftMenu-btn" to="/tables">Tables</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn block class="leftMenu-btn" to="/administration">User administration</v-btn>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
  <!-- left sidebar end -->
</template>

<style>
.edit-btn {
  background-color: #ff473b !important;

  color: #fff !important;
  height: 94px;
  font-size: 12px;
}
</style>
