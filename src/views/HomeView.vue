<template>
	<div class="home">
		<h1>This is an home page</h1>
		<i class="iconfont icon-gouwuchekong">购物车</i>
	</div>
</template>

<script>

export default {
	name: 'HomeView',
	components: {
	}
}
</script>
<style scoped lang="stylus">
$fontcolor = darkgreen;
.home
	h1
		color: $fontcolor;
	i
		color: $fontcolor;
		font-size 1.5rem;
		font-weight: 600
</style>
