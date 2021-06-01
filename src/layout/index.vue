<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar/>
    </div>
    <div class="main-container">
      <div class="header">
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import Navbar from './components/NavBar.vue'
import TagsView from './components/TagsView'

export default {
  components: {
    Sidebar,
    AppMain,
    Navbar,
    TagsView
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    .main-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      .app-main {
        /* 50= navbar  50  如果有tagsview + 34  */
        min-height: calc(100vh - 84px);
      }
    }
  }
</style>
