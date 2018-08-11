<template>
	<div class="row mod_user">
		<div class="col-xs-3">
			<img class="img-responsive" src="../../../static/images/ic_share_default_user.png" alt="" />
		</div>
		<div class="col-xs-9 mod_userInfo">
			<div class="row userInfo_boundary">
				<div class="col-xs-12">
					<h2 class="m-b">
						畅斯基
						<span class="icon-d icon-user"></span>
					</h2>
				</div>
				<div class="col-xs-6">ID:158746672</div>
				<div class="col-xs-6 text-right">
					个人主页
					<span class="icon-d icon-left"></span>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-3">关注1</div>
				<div class="col-xs-4">被关注0</div>
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped>
	.icon-config{
	    background: url("../../../static/images/ic_settings.png") 0 0 no-repeat;
	    background-size: cover;
	    margin-top: 10px;
	    position: absolute;
	    right: 15px;
	}
	.mod_user{
		background: url("../../../static/images/camera_bg.png") 0 0 no-repeat;
		background-size: cover;
		padding: 20px 0;
		color: #FFFFFF;
	}
	.mod_userInfo{
		/*padding-left: 50px;*/
	}
	.mod_userInfo>.row{
		padding-top: 17px;
		text-indent: -16px;
	}
	.mod_userInfo .userInfo_boundary{
	    padding-top: 0px;
	    border-bottom: 1px solid;
	    text-indent: -16px;
	}
	.mod_userInfo .userInfo_boundary .m-b{
		margin-top: 0;
	}
	.userInfo_boundary .icon-user{
	    background: url("../../../static/images/ic_mine_female.png") 0px 0px no-repeat;
	    background-size: contain;
	    width: 20px;
	    height: 20px;
	    vertical-align: middle;
	}
	.userInfo_boundary .icon-left{
	    width: 17px;
	    height: 17px;
	    background: url('../../../static/images/ic_small_arrow_white.png') 0px 0px no-repeat;
	    background-size: contain;
	    vertical-align: top;
	    margin-left: 10px;
	    margin-right: 22px;
	    margin-bottom: 17px;
	}
	.mod_userInfo .userInfo_title{
		display: inline-block;
	}
	
</style>