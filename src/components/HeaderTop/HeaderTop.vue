<template>
	<div class="header">
		<slot name="left"></slot>
		<span class="header-title">
			<span class="title-text">{{title}}</span>
		</span>
		<slot name="right"></slot>
	</div>
</template>

<script>
export default{
	props: {
		title: {
			type: String,
			default: '中华人民共和国'
		},
	},
}
</script>

<style scoped lang="stylus">
.header
	width 100%
	height 2.8125rem
	display flex
	flex-direction row
	justify-content space-between
	text-align center
	align-items center
	background-color #02a774
	.header-title
		width 55%
		margin 0 auto   // 水平居中
		flex-wrap nowrap  // css单行显示举出显示省略号
		text-align center
		overflow hidden
		display -webkit-box
		-webkit-box-orient vertical
		-webkit-line-clamp 1
		.title-text
			font-size 1.25rem
			color #fff
			display block
</style>
