import { App } from 'vue'
import {
  locale,
  ElButton,
  ElMessage,
  ElNotification,
  ElMessageBox
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'

// $ELEMENT size属性类型
export type Size = 'default' | 'medium' | 'small' | 'mini'

export default (app: App): void => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox
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
    size: 'medium'
  }
}
