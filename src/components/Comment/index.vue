<style lang="sass">
	.comment {
		@at-root {
			#{&}__items {
				margin: 15px 0;
				padding: 20px;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
			#{&}__avatar {
				$size: 40px;
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
				& > h3 {
					float: left;
					margin: 0;
					font-size: 18px;
				}
				& > span {
					float: right;
				}
			}
			#{&}__main {
				& > img {
					display: block;
					width: 100%;
					height: auto;
				}
			}
		}
	}
</style>
<template>
	<div class="comment">
		<div class="comment__items clearfix">
			<div class="comment__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="comment__info">
				<div class="comment__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="comment__main"><p>田原：河南漯河人，旅日诗人、日本文学博士。2001年获日本第一届“留学生文学奖”，2009年凭诗集《石的记忆》获得日本第60届H氏诗人大奖，现任教于城西国际大学人文学部。编有日文版《谷川俊太郎诗选集》，译有《谷川俊太郎诗选》，已出版诗集《田原诗选》《梦蛇》等。</p></div>
			</div>
		</div>
		<div class="comment__items clearfix">
			<div class="comment__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="comment__info">
				<div class="comment__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="comment__main"><img src="http://ac-7JMVeXNY.clouddn.com/0iv8qAK1vccrBH4lXsCvfl7tlOr3gr6UhMahu50f" alt=""></div>
			</div>
		</div>
		<div class="comment__items clearfix">
			<div class="comment__avatar"><img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/a277d6f4c285d8669a7af14480f7d529.png" alt=""></div>
			<div class="comment__info">
				<div class="comment__user clearfix">
					<h3>美丽阅读</h3>
					<span>18:35:14</span>
				</div>
				<div class="comment__main"><audio controls="controls"><source type="audio/mpeg" src="http://ac-7JMVeXNY.clouddn.com/dAFjAi0eKracHMJ5vhGvJ6ZcnFz93IVhmaBMALQU"></audio></div>
			</div>
		</div>
	</div>
</template>