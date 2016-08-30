import {
  GET_USER
} from '../types'


const state = {
  data: {}
}

const mutations = {
  [GET_USER](state, data){
    state.data = data
  }
}

export default {
  state,
  mutations
}