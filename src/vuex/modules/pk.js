import {
  GET_RECTANGLE,
  GET_PK_SELF,
  GET_PK_OTHER,
  GET_PK_SELF_LIBRARY,
  GET_PK_OTHER_LIBRARY,
  GET_PK_SELF_AVATAR,
  GET_PK_OTHER_AVATAR
} from '../types'

const state = {
  data: {},
  self: {},
  other: {},
  library: {
    self: {},
    other: {}
  },
  avatar: {
    self: {},
    other: {}
  }
}

const mutations = {
  [GET_RECTANGLE](state, data){
    state.data = data
  },
  [GET_PK_SELF](state, data){
    state.self = data
  },
  [GET_PK_OTHER](state, data){
    state.other = data
  },
  [GET_PK_SELF_LIBRARY](state, data){
    state.library.self = data
  },
  [GET_PK_OTHER_LIBRARY](sate, data){
    state.library.other = data
  },
  [GET_PK_SELF_AVATAR](state, data){
    state.avatar.self = data
  },
  [GET_PK_OTHER_AVATAR](state, data){
    state.avatar.other = data
  }
}

export default {
  state,
  mutations
}
