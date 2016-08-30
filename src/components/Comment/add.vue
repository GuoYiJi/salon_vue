<style lang="sass">
	.add-comment {
		position: relative;
		margin-left: -15px;
		padding: 10px 20px;
		height: 100%;
		border-top: 1px solid #ddd;
		border-right: 1px solid #ddd;

		box-sizing: border-box;
		textarea {
			display: block;
			width: 100%;
			height: 60%;
			border: none;
			resize: none;
		}
		.addpic {
			cursor: pointer;
		}
		.send-btn {
			position: absolute;
			right: 15px;
			bottom: 15px;
		}
	}
</style>
<template>
	<div class="add-comment">
		<i class="glyphicon glyphicon-picture addpic"></i>
		<textarea name="" id=""></textarea>
		<button class="btn btn-primary send-btn">发送</button>
	</div>
</template>