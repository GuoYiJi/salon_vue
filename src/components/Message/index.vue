<style lang="sass">
	.message {
		@at-root {
			#{&}__items {
				margin: 15px 0;
				padding: 20px;
			}
			#{&}__avatar {
				$size: 32px;
				float: left;
				overflow: hidden;
				& > img {
					display: block;
					width: $size;
					height: $size;

				}
			}
			#{&}__info {
				margin-left: 60px;
			}
			#{&}__user {
				font-size: 12px;
				color: #999;
				& > h3 {
					float: left;
					margin: 0;
				}
				& > span {
					float: right;
				}
			}
			#{&}__main {
				padding: 10px;
				font-size: 14px;
				background-color: #eee;
				border: 1px solid #ccc;
				border-radius: 15px;
				border-top-left-radius: 0;
			}
		}
	}
</style>
<template>
	<div class="message">
		<div class="message__items clearfix">
			<div class="message__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="message__info">
				<div class="message__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="message__main">田原：河南漯河人，旅日诗人、日本文学博士。2001年获日本第一届“留学生文学奖”，2009年凭诗集《石的记忆》获得日本第60届H氏诗人大奖，现任教于城西国际大学人文学部。编有日文版《谷川俊太郎诗选集》，译有《谷川俊太郎诗选》，已出版诗集《田原诗选》《梦蛇》等。</div>
			</div>
		</div>
		<div class="message__items clearfix">
			<div class="message__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="message__info">
				<div class="message__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="message__main">田原：河南漯河人，旅日诗人、日本文学博士。2001年获日本第一届“留学生文学奖”，2009年凭诗集《石的记忆》获得日本第60届H氏诗人大奖，现任教于城西国际大学人文学部。编有日文版《谷川俊太郎诗选集》，译有《谷川俊太郎诗选》，已出版诗集《田原诗选》《梦蛇》等。</div>
			</div>
		</div>
		<div class="message__items clearfix">
			<div class="message__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="message__info">
				<div class="message__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="message__main">田原：河南漯河人，旅日诗人、日本文学博士。2001年获日本第一届“留学生文学奖”，2009年凭诗集《石的记忆》获得日本第60届H氏诗人大奖，现任教于城西国际大学人文学部。编有日文版《谷川俊太郎诗选集》，译有《谷川俊太郎诗选》，已出版诗集《田原诗选》《梦蛇》等。</div>
			</div>
		</div>
	</div>
</template>