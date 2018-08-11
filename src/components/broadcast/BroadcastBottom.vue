<template>
	<div class="container mod-function navbar-fixed-bottom nav-between">
		<div class="col-xs-4">
			<a href="javascript:void(0);" class="f-replace" >
				<i class="icon-d icon-replace"></i>换一批
			</a>
		</div>
		<div class="col-xs-6 col-xs-push-2">
			<button class="btn btn-default f-btn">选好了，进入广播</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"BroadcastBottom"
	}
</script>

<style>
	.mod-function{
		background: rgba(255,255,255,0.9);
		bottom: 73px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.mod-function .f-replace{
		display: block;
		line-height: 41px;
		color: #999;
	}
	.mod-function .f-replace .icon-replace{
		background: url("../../../static/images/ic_status_detail_reshare_icon.png") 0 0 no-repeat;
		background-size: contain;
		vertical-align: middle;
	}
	.mod-function .f-btn{
		background-color: #dfdfdf;
	    border: none;
	    color: white;
	    font-size: 1.2rem;
	}
</style>