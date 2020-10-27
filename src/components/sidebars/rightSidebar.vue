
<template>
  <!-- right sidebar start -->
  <v-navigation-drawer fixed right app class="rightSidebar" disable-resize-watcher>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn class="rside-grey-btn" block style="font-size:11px; margin-top:0px; margin-bottom:0px;">Sample Project</v-btn>
      </v-flex>
      <v-flex xs6 sm6 md6 lg6 xl6 d-flex>
        <v-btn
          class="rside-grey-btn"
          block
          style="font-size:11px; margin-top:0px; margin-bottom:0px; height:45px !important; min-width: 20px;"
        >duplicate</v-btn>
      </v-flex>
      <v-flex xs6 sm6 md6 lg6 xl6 d-flex>
        <v-btn
                class="rside-grey-btn"
          block
          style="font-size:16px; margin-top:0px; margin-bottom:0px; height:45px !important; min-width: 20px;"
        >+</v-btn>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
  <!-- right sidebar end -->
</template>
