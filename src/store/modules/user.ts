import { Module, MutationTree, ActionTree } from 'vuex'
import { IRootState } from '@/store'
import { getUserInfo, login } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

// login params
export interface IUserInfo {
  username: string;
  password: string;
}

export interface Profile {
  avatar: string;
  email: string;
  id: number;
  isSuper: boolean;
  mobile: string;
  status: boolean;
  username: string
}

// 定义state类型
export interface IUserState {
  token: string;
  userInfo: Profile | null
}

// mutations类型
type IMutations = MutationTree<IUserState>

// actions类型
type IActions = ActionTree<IUserState, IRootState>

// 定义state
const state: IUserState = {
  token: '',
  userInfo: null
}

// 定义mutation
const mutations: IMutations = {
  SET_TOKEN(state, token: string) {
    state.token = token
  },
  SET_USER_INFO(state, data: Profile) {
    state.userInfo = data
  }
}

// 定义action
const actions: IActions = {
  login({ commit }, userInfo: IUserInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token) // localStorage中保存token
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit, dispatch }) {
    // 退出登录接口我这里就不写了
    return new Promise<void>((resolve) => {
      // 清空store里token
      commit('SET_TOKEN', '')
      // 清空localStorage里的token
      removeToken()
      // 清除所有tag views
      dispatch('tagsView/delAllViews', null, { root: true })
      resolve()
    })
  },
  resetToken({ commit }) {
    return new Promise<void>((resolve) => {
      // 清空store里token
      commit('SET_TOKEN', '')
      // 清空localStorage里的token
      removeToken()
      resolve()
    })
  },
  getUserInfo({ commit }) {
    getUserInfo().then(response => {
      const { data } = response
      commit('SET_USER_INFO', data)
    })
  }
}

// 定义user module
const user: Module<IUserState, IRootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user