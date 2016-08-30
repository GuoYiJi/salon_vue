import {
  GET_ARTICLE
} from '../types'

const state = {
  data: {}
}
const mutations = {
  [GET_ARTICLE](state, data){
    state.data = data
  }
}

export default {
  state,
  mutations
}