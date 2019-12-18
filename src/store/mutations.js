import * as types from './mutation-types'
const mutations = {
  [types.In_crement](state, num) {
    state.count += num
  },
  [types.De_crement](state, num) {
    state.count -= num
  },

}
export default mutations
