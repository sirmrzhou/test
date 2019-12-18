import Vue from 'vue'
import Vuex from 'Vuex'
import createLogger from 'vuex/dist/logger' // 打印日志
import createPersistedState from 'vuex-persistedstate' // vuex 持久化
import {state} from './state'
import * as getters from './getters'
import  mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 存储到 sessionStorage
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug, // 开发环境开启严格模式 检测 state 的变动是否由 mutation 发起（若有则警告，有性能损耗，正式环境关闭）
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted],

})
