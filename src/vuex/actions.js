import api from '../api'
import * as types from './types'
import { saveCookie } from '../utils/authService'


export const getUser = ({dispatch}, id) => {
  api.getUser(id).then((response) => {
    dispatch(types.GET_USER, response.data)
  })  
}

export const getTopic = ({dispatch}, id) => {
  api.getTopic(id).then((response) => {
    document.title = '《' + response.data.title + '|美丽阅读》'
    dispatch(types.GET_TOPIC, response.data)
  })
}

// 获取六维图数据
export const getRectangle = ({dispatch}, id, to_id) => {
  api.getRectangle(id, to_id).then((response) => {
    dispatch(types.GET_RECTANGLE, response.data)
  })
}

// 获取自己与他人藏书pk数据
export const getPk = ({dispatch}, id, to_id) => {

  api.getLibrary(id).then((response) => {
    dispatch(types.GET_PK_SELF_LIBRARY, response.data.data)
  })
  api.getLibrary(to_id).then((response) => {
    dispatch(types.GET_PK_OTHER_LIBRARY, response.data.data)
  })

  api.getPk(id).then((response) => {
    dispatch(types.GET_PK_SELF, response.data.data)
  })
  api.getPk(to_id).then((response) => {
    dispatch(types.GET_PK_OTHER, response.data.data)
  })

  api.getUser(id).then((response) => {
    dispatch(types.GET_PK_SELF_AVATAR, response.data)
  })
  api.getUser(to_id).then((response) => {
    dispatch(types.GET_PK_OTHER_AVATAR, response.data)
  })
}

// get Article
export const getArticle = ({dispatch}, id) => {
  api.getArticle(id).then((response) => {
    dispatch(types.GET_ARTICLE, response.data.data)
  }, response => {

  })
}

export const showMsg = ({dispatch}, content,type='error') => {
  dispatch(types.SHOW_MSG, {content:content,type:type})
}

// login
export const checkLogin = (store, userInfo) => {
  api.checkLogin(userInfo.user, userInfo.password).then(response => {
    const token = response.data.data.access_token
    api.loginUser(token).then(response => {
      saveCookie('token', token)
      getUserInfo(store, response.data.data)
      store.dispatch(types.LOGIN_SUCCESS, token)
      showMsg(store, '登录成功', 'success')
      store.router.go({path: '/home'})
    }, response => {
      showMsg(store,response.data.error_msg || '登录失败')
    })
  }, response => {
    showMsg(store,response.data.error_msg || '登录失败')
  })
}

export const getUserInfo = ({dispatch}, data) => {
  dispatch(types.USERINFO_SUCCESS, { user: data })
}
