<template>
	<div class="app">
		<router-view/>
		<FooterGuide v-show="$route.meta.showFooter"/>
	</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default{
	components: {
		FooterGuide
	},
	data() {
		return {
			
		}
	}
}
</script>

<style scoped lang="stylus">
.app
	overflow hidden
	width 100%
	height 100%
	
</style>
