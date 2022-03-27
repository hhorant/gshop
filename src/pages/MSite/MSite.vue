<template>
	<div class="msite">
		<HeaderTop title="福建省泉州市丰泽新村5-501">
			<template #left>
				<router-link class="header-search" to="/search">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
			</template>
			<template #right>
				<router-link class="header-login" slot="right" to="/login">
					<span class="login-text">登录|注册</span>
				</router-link>
			</template>
		</HeaderTop>
		<div class="msite-nav">
			<swiper :pagination="true" :modules="modules" class="mySwiper">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 5</swiper-slide>
			</swiper>
		</div>
		<div class="msite-shop">
			<div class="shop-header">
				<i class="iconfont icon-xuanxiang"></i>
				<span class="header-title">附近商家</span>
			</div>
			<ShopList />
		</div>
	</div>
</template>

<script>
import '@/common/stylus/mixins.styl'
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
import ShopList from '@/components/ShopList/ShopList.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "@/assets/css/swiper.css";
export default{
	components: {
		HeaderTop, Swiper, SwiperSlide, ShopList
	},
	data() {
		return {
			modules: [Pagination]
		}
	},
}
</script>

<style scoped lang="stylus">
.msite
	width 100%
	height 100%
	.header-search
		margin-left 0.625rem
		.iconfont
			font-size 1.5625rem
			color #fff
	.header-login
		margin-right 0.625rem
		.login-text
			font-size 1rem
			color #fff
	.msite-nav
		width 100%
		height 15rem
		border-bottom 1px solid green
	.msite-shop
		// top-border-1px(#e4e4e4)
		border-top 1px solid #e4e4e4
		background-color #fff
		.shop-header
			padding 0.625rem 0.625rem 0
			i
				color #999
			span
				margin-left 0.3125rem
				font-size 0.875rem
				line-height 1.25rem
				color #999
				
</style>
