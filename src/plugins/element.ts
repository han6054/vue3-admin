import { App } from 'vue'
import {
  locale,
  ElButton,
  ElMessage,
  ElNotification,
  ElMessageBox,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTooltip,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSwitch,
  ElInput,
  ElForm,
  ElFormItem
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'

// $ELEMENT size属性类型
export type Size = 'default' | 'medium' | 'small' | 'mini'

interface ElementOptions {
  size: Size
}

export default (app: App, options: ElementOptions): void => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTooltip,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElSwitch,
    ElInput,
    ElForm,
    ElFormItem
  ]
  components.forEach(component => {
    app.component(component.name, component)
  })

  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt

  app.config.globalProperties.$ELEMENT = {
    size: options.size
  }
}
