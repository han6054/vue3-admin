<template>
  <div class="navbar">
    <hambuger @toggleClick="toggleSidebar" :is-active="sidebar.opened"/>
    <breadcrumb />
    <div class="right-menu">
      <screenFull id="screenfull" class="right-menu-item hover-effect"/>
        <!-- element组件size切换 -->
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select class="right-menu-item hover-effect" />
      </el-tooltip>
       <avatar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hambuger from '@/components/Hambuger/index.vue'
import { useStore } from '@/store/index'
import ScreenFull from '@/components/ScreenFull/index.vue'
import SizeSelect from '@/components/SizeSelect/index.vue'
import Avatar from './avatar/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hambuger,
    ScreenFull,
    SizeSelect,
    Avatar
  },
  setup() {
    const store = useStore()
    const toggleSidebar = () => {
      console.log('click')
      store.dispatch('app/toggleSidebar')
    }
    console.log(store)
    const sidebar = computed(() => store.getters.sidebar)

    return {
      toggleSidebar,
      sidebar
    }
  }
})
</script>
<style lang="scss">
  .navbar {
    display: flex;
    background: #fff;
    border-bottom: 1px solid rgba(0, 21, 41, .08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .right-menu {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
      &-item {
        padding: 0 8px;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025);
          }
        }
      }
    }
  }
</style>
