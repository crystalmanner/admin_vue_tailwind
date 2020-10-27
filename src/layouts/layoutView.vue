<template>
  <div>
    <rightSidebar></rightSidebar>
    <leftSidebar></leftSidebar>
    <secondLeftSidebar></secondLeftSidebar>
    <!-- main content start-->

    <router-view></router-view>
    <company></company>

    <!-- main content end-->
  </div>
</template>

<script>
import rightSidebar from "@/components/sidebars/rightSidebar";
import leftSidebar from "@/components/sidebars/leftSidebar";
import secondLeftSidebar from "@/components/sidebars/secondLeftSidebar";
import company from "@/components/dialogs/company";

// import bus from "./eventBus";
export default {
  components: {
    rightSidebar,
    leftSidebar,
    secondLeftSidebar,
    company
  },
  data: () => ({
    drawer: null,
    // bus: bus,
    right: false,
    left: false
  }),
  props: {
    source: String
  }
};
</script>

<style>
.leftSidebar {
  width: 170px !important;
  background-color: #48525a !important;
}
.rightSidebar {
  width: 190px !important;
  background-color: #48525a !important;
}
.secondLeftSidebar {
  width: 220px !important;
  transform: translateX(170px) !important;
  background-color: #58646e !important;
}
.rside-grey-btn {
  background-color: #98a5a9 !important;
  color: #fff !important;
  height: 70px;
  font-size: 13px;
  border-radius: 0px !important;
  border-top: 1px solid #bbb !important;
}
.grey-btn {
  background-color: #98a5a9 !important;
  color: #fff !important;
  height: 50px;
  font-size: 12px;
  border-radius: 0px !important;
  border-top: 1px solid #bbb !important;
}
.project-btn {
  background-color: #e6e7eb !important;
  color: #000 !important;
  height: 70px;
  font-size: 12px;
  border-radius: 0px !important;
  margin-top: 0px;
  margin-bottom: 0px;
}
.leftMenu-btn {
  background-color: transparent !important;
  color: #ffffff !important;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 60px;
  color: #fff;
  font-size: 11px;
}
.v-card {
  border-radius: 8px !important;
}
.v-toolbar {
  border-radius: 8px 8px 0 0 !important;
}
.v-datatable {
}
.v-datatable__actions {
  background-color: #e6e7eb !important;
  border-radius: 0 0 8px 8px !important;
}
.v-table {
  /*background-color: transparent !important;*/
}
.v-card__title {
  padding-top: 12px;
}
.v-chip__content {
  margin: 0 auto;
}
.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  overlay: 16% #ffffff !important;
}
.activeProject {
  background-color: #1976d2 !important;
}
</style>