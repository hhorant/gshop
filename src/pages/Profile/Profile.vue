<template>
	<div class="profile">
		<HeaderTop title="个人中心"></HeaderTop>
		<div class="profile-number">
			<router-link to="/login" class="profile-link">
				<div class="profile-image">
					<i class="iconfont icon-gerenzhongxin"></i>
				</div>
				<div class="profile-info">
					<div class="info-top" >
						<p v-if="userInfo.phone.length > 0">{{userInfo.name}}</p>
						<p v-else>{{'登录/注册'}}</p>
					</div>
					<div class="info-content">
						<i class="iconfont icon-shouji"></i>
						<p v-if="userInfo.phone.length > 0">{{userInfo.phone}}</p>
						<p v-else>{{'暂无绑定手机号码'}}</p>
					</div>
				</div>
				<div class="profile-arrow">
					<i class="iconfont icon-jiantou_yemian_xiangyou"></i>
				</div>
			</router-link>
		</div>
		<div class="profile-data">
			<div class="data-link">
				<span class="data-link-top"><span>0.00</span>元</span>
				<span class="data-link-bottom">我的余额</span>
			</div>
			<div class="data-link">
				<span class="data-link-top"><span>0</span>个</span>
				<span class="data-link-bottom">我的优惠</span>
			</div>
			<div class="data-link">
				<span class="data-link-top"><span>0</span>分</span>
				<span class="data-link-bottom">我的积分</span>
			</div>
		</div>
		<div class="profile-split"></div>
		<div class="profile-item">
			<a class="item-link">
				<div class="item-link-icon">
					<i class="iconfont icon-jifen3"></i>
				</div>
				<div class="item-link-info">
					<span>我的订单</span>
					<i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
				</div>
			</a>
			<a class="item-link">
				<div class="item-link-icon">
					<i class="iconfont icon-jifenshangcheng"></i>
				</div>
				<div class="item-link-info">
					<span>积分商城</span>
					<i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
				</div>
			</a>
			<a class="item-link">
				<div class="item-link-icon">
					<i class="iconfont icon-huiyuankax"></i>
				</div>
				<div class="item-link-info">
					<span>硅谷外卖会员卡</span>
					<i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
				</div>
			</a>
		</div>
		<div class="profile-split"></div>
		<div class="profile-item">
			<a class="item-link">
				<div class="item-link-icon">
					<i class="iconfont icon-fuwuzhongxin1"></i>
				</div>
				<div class="item-link-info">
					<span>服务中心</span>
					<i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default{
	components: {
		HeaderTop
	},
	data() {
		return {
			logined: true,
			userInfo: {
				phone: '',
				name: '黄烽'
			}
		}
	},
}
</script>

<style scoped lang="stylus">
.profile
	color: darkgreen;
	.profile-number
		margin-top 0.15rem
		width 100%
		height 3.75rem
		background-color #02a774
		padding 1.25rem 1.25rem
		.profile-link
			overflow hidden
			display flex
			align-items center   // 子元素垂直居中
			.profile-image
				float left
				width 3.75rem
				height 3.75rem
				i
					color #e4e4e4
					font-size 4rem
			.profile-info
				float left
				margin-left 1rem
				margin-top 0.2rem
				.info-top p
					font-weight 560
					font-size 1.5rem
					color #fff
					margin-left 0.3125rem
				.info-content
					margin-top 0.625rem
					display flex
					align-items center   // 图标与文字居中对齐
					i
						font-size 1.5rem
						color #fff
						vertical-align text-top
					p
						color #fff
			.profile-arrow
				float right
				margin-right 1.8rem
				flex 1
				text-align right
				i
					font-size 1.5rem
					color #fff
	.profile-data
		display flex
		width 100%
		height 5rem
		background-color #fff
		border 0.0625rem #e4e4e4
		overflow hidden
		justify-content space-around
		align-items center
		text-align center
		.data-link
			display flex
			flex-direction column
			.data-link-top
				display block
				width 100%
				font-size 0.875rem
				padding 0.9375rem 0.3125rem 0.625rem
				>span
					display inline-block
					font-size 1.875rem
					color #f90
					font-weight 700
					line-height 1.875rem
			.data-link-bottom
				font-size 0.875rem
				color #666
				font-weight 400
				padding-bottom 0.625rem
			&:nth-of-type(2)
				.data-link-top
					span
						color #ff5f3e
			&:nth-of-type(3)
				.data-link-top
					span
						color #6ac20b
	.profile-split
		width 100%
		height 0.5rem
		background-color #efefef
	.profile-item
		background #fff
		width 100%
		padding-left 1rem
		overflow hidden
		.item-link
			display flex
			align-items center
			padding-left 0rem
			padding-right 0
			height 3.5rem
			width 100%
			border-bottom 0.0625rem solid #e4e4e4
			.item-link-icon
				.iconfont
					font-size 2rem
				.icon-jifen3
					color #02a774
				.icon-jifenshangcheng
					color #ff5f3e
				.icon-huiyuankax
					color #f90
				.icon-fuwuzhongxin1
					color #02a774
			.item-link-info
				flex 1
				padding-left 0.625rem
				display flex
				justify-content space-between
				>span
					color #333
				>i
					margin-right 1.5rem
					font-weight 700
				
</style>
