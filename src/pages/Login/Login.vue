<template>
	<div class="login-main">
		<div class="login-back">
			<i class="iconfont icon-jiantou_yemian_xiangzuo" @click="go_back()"></i>
		</div>
		<div class="login-inner">
			<div class="login-header">
				<div class="header-logo">硅谷外卖</div>
				<div class="header-title">
					<el-link class="title-link" :underline="false" @click="checkWay(true)">短信登录</el-link>
					<el-link class="title-link" :underline="false" @click="checkWay(false)">密码登录</el-link>
				</div>
			</div>
			<div class="login-content">
				<el-form ref="loginForm" :model="loginForm" label-width="0">
					<div v-if="loginWay">
						<el-form-item prop="phone">
							<el-input v-model="loginForm.phone" placeholder="手机号" size="large">
								<template #append>
									<el-button @click='getSendCode()'>获取验证码</el-button>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item prop="code">
							<el-input v-model="loginForm.code" placeholder="验证码" size="large"></el-input>
						</el-form-item>
						<section class="login-hint">
							温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
							<a href="javascript:;">《用户服务协议》</a>
						</section>
					</div>
					<div v-else>
						<el-form-item prop="name">
							<el-input v-model="loginForm.name" placeholder="手机/邮箱/用户名" size="large"></el-input>
						</el-form-item>
						<el-form-item prop="pwd">
							<el-input v-model="loginForm.pwd" :type="showType()" placeholder="密码" size="large">
								<template #append>
									<el-switch v-model="showPwd" inline-prompt active-text="明" inactive-text="密" @change="showChg"></el-switch>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item prop="captcha">
							<el-input v-model="loginForm.captcha" placeholder="验证码" size="large">
								<template #append>
									验证码
								</template>
							</el-input>
						</el-form-item>
					</div>
					<el-button class="login-submit">登录</el-button>
					<el-link class="login-about">关于我们</el-link>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import {reqSendCode} from '@/api/index.js'
export default{
	components: {
	},
	data() {
		return {
			loginWay: true,  // true代表短信登陆, false代表密码
			computedTime: 0,  // 计时时间
			showPwd: false,   // 是否显示密码
			loginForm: {
				way: 1,       // 1:短信登录，2:密码登录
				phone: '',    // 手机号
				code: '',     // 短信验证码
				name: '',     // 用户名
				pwd: '',      // 密码
				captcha: '',  // 图形验证码
			},
			alertText: '',    // 提示文本
			alertShow: false, // 是否显示警告框
		}
	},
	methods: {
		checkWay(flag) {
			this.loginWay = flag;
			this.loginForm.way = flag ? 1 : 2;
		},
		showChg(val){
			this.showPwd = val;
		},
		showType(){
			return this.showPwd ? "text" : "password";
		},
		go_back() {
			this.$router.back();
		},
		async getSendCode() {
			const response = await reqSendCode(this.loginForm.phone);
			console.log(response);
		}
	},
}
</script>

<style scoped lang="stylus">
.login-main
	width 100%
	height 100%
	background-color #fff
	.login-back
		margin-top 0.25rem
		margin-left 0.625rem
		i
			font-size 2rem
			color #999
	.login-inner
		padding-top 3rem
		width 80%
		margin 0 auto  // 元素居中
		.header-logo
			font-size 2.5rem
			font-weight bold
			color #02a774
			text-align center  // 文字居中
		.header-title
			padding-top 2.5rem
			text-align center
			.el-link
				margin 0 1.25rem
				font-size 0.875rem
				padding-bottom 0.25rem
				color #333
				&:hover
					color #02a774
					font-weight 700
					border-bottom 0.125rem solid #02a774
	.login-content
		margin-top 0.625rem
		.login-hint
			color #999
			font-size 0.875rem
			line-height 1.25rem
			margin-bottom 0.75rem
			>a
				color #02a774
		.login-submit
			margin-top 0.75rem
			width 100%
			height 2.5rem
			font-size 1rem
			background-color #4cd96f
			color #fff
			display block
		.login-about
			margin-top 1rem
			width 100%
			font-size 0.75rem
			color #999
			text-align center
			display block
</style>
