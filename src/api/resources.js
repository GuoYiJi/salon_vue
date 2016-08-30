import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
import { API_USER, API_MAGIC, API_RIO } from '../config'

export const checkLogin = Vue.resource(API_USER + '/sign_in', {}, { post: {method: 'post'} }, {
	headers: {
		'Authorization': 'Basic bG9zZXI6ZW5nbGFuZA==',
		'Content-Type': 'application/json'
	}
})

export const loginUser = Vue.resource(API_USER + '/profile', {}, { get: {method: 'get'} }, {
	headers: {
		'Authorization': 'Basic bG9zZXI6ZW5nbGFuZA==',
		'Content-Type': 'application/json'
	}
})


export const getUser = Vue.resource(API_USER + '/user/share/{user_id}')

export const getTopic = Vue.resource(API_MAGIC + '/share/post/{topic_id}', {}, { jsonp: { method: 'jsonp' } })

export const getRectangle = Vue.resource(API_MAGIC + '/share/pk/{id}/vs/{to_id}', {}, { jsonp: { method: 'jsonp' } })

export const getPk = Vue.resource(API_RIO + '/beautilfulreading/bs/report/v2/favour/{id}')
export const getLibrary = Vue.resource(API_RIO + '/beautilfulreading/bs/report/v2/base/{id}')

export const getArticle = Vue.resource(API_RIO + '/beautilfulreading/bs/article/{id}', {}, {}, { headers: { 'Authorization': 'Basic bG9zZXI6ZW5nbGFuZA==' } })

