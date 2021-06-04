import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app, { IAppState } from '@/store/modules/app'
import tagsView, { ITagsViewState } from '@/store/modules/tagsView'
import settings, { ISettingsState } from '@/store/modules/settings'
import user, { IUserState } from '@/store/modules/user'
import getters from './getters'

// 模块声明在根状态下
export interface IRootState {
  app: IAppState;
  user: IUserState;
  tagsView: ITagsViewState;
  settings: ISettingsState;
}

// 通过下面方式使用 TypeScript 定义 store 能正确地为 store 提供类型声明。
// https://next.vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<IRootState>> = Symbol()

// vuex store持久化 默认使用localstorage持久化
const persisteAppState = createPersistedState({
  storage: window.sessionStorage, // 指定storage 也可自定义
  key: 'vuex_app', // 存储名 默认都是vuex 多个模块需要指定 否则会覆盖
  paths: ['app.sidebar.opened', 'app.size'] // 通过点连接符指定state路径
})

export default createStore<IRootState>({
  plugins: [
    persisteAppState
  ],
  getters,
  modules: {
    app,
    tagsView,
    settings,
    user
  }
})

// 定义自己的 `useStore` 组合式函数
// https://next.vuex.vuejs.org/zh/guide/typescript-support.html#%E7%AE%80%E5%8C%96-usestore-%E7%94%A8%E6%B3%95
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore () {
  return baseUseStore(key)
}
