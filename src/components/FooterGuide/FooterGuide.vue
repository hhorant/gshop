<template>
	<div class="footer-guide">
		<span class="guide-item" :class="{on: '/msite'===$route.path}" @click="GoTo('/msite')">
			<span><i class="iconfont icon-waimai"></i></span>
			<span>外卖</span>
		</span>
		<span class="guide-item" :class="{on: '/search'===$route.path}" @click="GoTo('/search')">
			<span><i class="iconfont icon-sousuo"></i></span>
			<span>搜索</span>
		</span>
		<span class="guide-item" :class="{on: '/order'===$route.path}" @click="GoTo('/order')">
			<span><i class="iconfont icon-dingdan"></i></span>
			<span>订单</span>
		</span>
		<span class="guide-item" :class="{on: '/profile'===$route.path}" @click="GoTo('/profile')">
			<span><i class="iconfont icon-gerenzhongxin1"></i></span>
			<span>个人中心</span>
		</span>
	</div>
</template>

<script>
export default {
	methods: {
		GoTo(path) {
			this.$router.replace(path);
		}
	},
}
</script>

<style scoped lang="stylus">
@import '@/common/stylus/mixins.styl'
.footer-guide
	position fixed
	left 0
	right 0
	bottom 0
	width 100%
	height 3.125rem
	background-color #fff
	display flex
	justify-content space-around
	.guide-item
		color #999999
		display flex
		flex-direction column
		align-items center
		margin 0.3125rem
		&.on
			color #02a774
		span
			font-size 0.75rem
			margin-top 0.125rem
			margin-bottom 0.125rem
			.iconfont
				font-size 1.375rem
	
</style>
