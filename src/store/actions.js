import * as types from './mutation-types'
export const myIncrement = function ({
  commit,
  dispatch,
  getters
}) {
  commit(types.In_crement, 1)
  setTimeout(() => {
    dispatch('myGetter')
  }, 1000)
}

export const myDecrement = function myDecrement(context, num) {
  context.commit(types.De_crement, 1)
}

export const myGetter = function ({
  commit,
  getters
}) {

  console.log(getters.getCount)
}
