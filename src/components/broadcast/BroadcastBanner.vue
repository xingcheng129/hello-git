<template>
	<div class="row mod-discover">
		<div class="col-xs-4 col-xs-push-1">
			<img class="img-responsive" src="../../../static/images/ic_status_anonymous_header.png" alt="" />
		</div>
		<div class="col-xs-8 col-xs-push-1">
			<h4 class="d-title">发现有趣的人</h4>
			<p class="d-content">关注他们,发现更大的世界</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"BroadcastBanner"
	}
</script>

<style>
	.mod-discover{
		padding: 20px 0;
	}
	.mod-discover .d-title,.mod-board .d-title{
		font-size: 1.4rem;
	    font-weight: bold;
	    margin-top: 18px;
	}
	.mod-discover .d-content,.mod-board .d-content{
		color: #999;
	}
</style>