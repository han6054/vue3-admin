<template>
  <div>
     <!-- 测试展开收起 -->
      <h8 @click="isCollapse=!isCollapse">展收测试</h8>
      <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="scssVariables.menuBg"
      :text-color="scssVariables.menuText"
      :active-text-color="scssVariables.menuActiveText"
      :collapse="isCollapse"
      :collapse-transition="true"
      >
      <sidebar-item />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
// 导入scss变量在组件中使用
import variables from '@/styles/variables.scss'
// el-menu-item封装
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const route = useRoute()
    const activeMenu = computed(() => {
      const { path } = route
      return path
    })
    // scss变量
    const scssVariables = computed(() => variables)
    // 菜单展开收起状态 后面会放store里
    const isCollapse = ref(false)
    return {
      scssVariables,
      isCollapse,
      activeMenu
    }
  }
})
</script>
