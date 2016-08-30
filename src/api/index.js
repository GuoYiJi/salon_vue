import { checkLogin, loginUser, getUser, getTopic, getRectangle, getPk, getLibrary, getArticle } from './resources'

export default {
  checkLogin: function (user, pass){
    return checkLogin.post({account: user, password: pass})
  },
  loginUser: function (token){
    return loginUser.get({token})
  },
  getUser: function (user_id){
    return getUser.get({user_id})
  },
  getTopic: function (topic_id){
    return getTopic.jsonp({topic_id})
  },
  getRectangle: function (id, to_id){
    return getRectangle.jsonp({id, to_id})
  },
  getPk: function (id){
    return getPk.get({id})
  },
  getLibrary: function (id){
    return getLibrary.get({id})
  },
  getArticle: function (id){
    return getArticle.get({id})
  }
}