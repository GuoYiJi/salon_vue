<style lang="sass">
	.login-box {
		padding-top: 60px;
		margin: 0 auto;
		width: 300px;
		.logo {
			text-align: center;
			& > p {
				font-size: 16px;
				color: #666;
			}
		}
	}
	.login__form {
		margin-top: 50px;
		.input-group {
			margin: 10px 0;
			width: 100%;
		}
		.input-txt {
			padding-left: 10px;
			width: 100%;
			box-sizing: border-box;
			height: 36px;
			line-height: 36px;
			font-size: 16px;
			border: none;
			border-bottom: 1px solid #ddd;
		}
		.input-btn {
			margin-top: 80px;
			width: 100%;
			height: 50px;
			text-align: center;
			font-size: 16px;
			border: none;
			border-radius: 8px;
			cursor: pointer;
			background-color: #504e4e;
			color: #fff;

		}
	}
</style>
<template>
	<div class="login-box">
		<div class="logo">
			<img src="./logowrap@3x.png" height="80" width="80" alt="" class="logo__pic">
			<p>从此以后，你和书将前所未有接近</p>
		</div>
		<validator name="signinValidation">
			<form class="login__form" @submit.prevent="a($signinValidation)" novalidate>
				<div class="input-group"><input class="input-txt" type="text" name="user" placeholder="手机" v-model="user.user"></div>
				<div class="input-group"><input class="input-txt" type="password" name="password" placeholder="密码" v-model="user.password"></div>
				<div class="input-group"><input class="input-btn" type="submit" value="登录" :disabled="$signinValidation.invalid"></div>
			</form>
		</validator>
	</div>
</template>
<script>
	import { checkLogin } from '../../vuex/actions'
	import { getCookie } from '../../utils/authService'
	export default {
		vuex: {
			getters: {
				token: ({auth}) => auth.token,
				user: ({auth}) => auth.user
			},
			actions: { checkLogin }
		},
		data(){
			return {
				user: {
					user: '',
					password: ''
				}
			}
		},
		route: {

			activate(transition){
				let token = getCookie('token')
				!token ? transition.redirect('/home') : transition.next()
			}
		},
		methods: {
			a(signinValidation){
				if (signinValidation.valid) {
					this.checkLogin(this.user)
				}
				
			}
		},
		ready(){
			
		}
	}
</script>