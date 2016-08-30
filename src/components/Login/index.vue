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
		<form class="login__form" action="">
			<div class="input-group"><input class="input-txt" type="text" name="user" placeholder="手机"></div>
			<div class="input-group"><input class="input-txt" type="password" name="password" placeholder="密码"></div>
			<div class="input-group"><input class="input-btn" type="submit" value="登录" @click="a()"></div>
		</form>
	</div>
</template>
<script>
	import { checkLogin } from '../../vuex/actions'
	export default {
		vuex: {
			actions: { checkLogin }
		},
		methods: {
			a(){
				alert(1)
			}
		},
		ready(){
			this.checkLogin('18219181051', 'Mqpzla150')
		}
	}
</script>