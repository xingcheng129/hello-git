<template>
	<div class="row mod_block">
		<div class="col-xs-12 block_warn">
			<span class="icon-d icon-warn"></span>
			提醒
			<i class="glyphicon glyphicon-menu-right pull-right"></i>
		</div>
		<div class="col-xs-12 text-center new_warn">
			暂无新提醒
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.mod_block{
		padding: 12px 0px;
	    margin-top: 20px;
	    background-color: #fff;
	}
	.mod_block_t{
		border: 1px solid #e2e2e2;
	    padding: 15px 0px;
	    background-color: #fff;
	}
	.mod_block .block_warn{
		position: relative;
	    padding: 10px 0;
	    margin-left: 20px;
	    border-bottom: 1px solid #999;
	    box-sizing: content-box;
	}
	.mod_block .block_warn .icon-warn{
		background: url("../../../static/images/ic_mine_notification.png") 0px 0px no-repeat;
	    background-size: contain;
	    vertical-align: middle;
	}
	.mod_block .block_warn>i{
		color: #e2e2e2;
		margin-right: 60px;
		margin-top: 6px;
	}
	.mod_block .new_warn{
	    padding-top: 20px;
	    color: #e2e2e2;
	}
</style>