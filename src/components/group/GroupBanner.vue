<template>
	<div class="row">
		<div class="mod-block">
			<hgroup class="text-center b-content">
				<h2 >418832个小组等你来玩</h2>
				<h3>立即选择加入吧!</h3>
			</hgroup>
			<p class="b-bottom">根据你的兴趣推荐</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GroupBanner"
	}
</script>

<style scoped>
	.mod-block{
		position: relative;
		background: url("../../../static/images/live_player_bg.jpg") 0 0 no-repeat;
		background-size: cover;
		height: 200px;
	}
	.mod-block .b-content{
		position: absolute;
	    top: 50%;
	    margin-top: -35px;
	    left: 50%;
	    margin-left: -140px;
	    color: #eee;
	}
	.mod-block .b-content>h2{
	    color: #000;
	    margin-top: 0;
	    font-size: 1.7rem;
	}
	.mod-block .b-content>h3{
		margin-top: 0;
	    font-size: 1.3rem;
	}
	.mod-block .b-bottom{
		position: absolute;
		bottom: 0;
		left: 15px;
		color: #eee;
	}
</style>