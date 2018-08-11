<template>
	<div class="container navbar-fixed-top">
		<div class="row mod-nav ">
			<div class="col-xs-10">
				<form action="#" class="mod-form">
					<div class="ipt-group">
						<slot name="c-search"></slot>
						<slot name="c-input"></slot>
						<slot name="c-code"></slot>
					</div>
				</form>
			</div>	
			<div class="col-xs-2">
				<slot name="c-chat"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "HomeHeade"
	}
</script>

<style scoped>
	.mod-nav{
		background-color: #42c055;
		height: 70px;
		padding-top: 30px;
	}
	.mod-nav>div{
		padding-right: 0px;
	}
	.mod-nav .mod-form{
		position: relative;
	}
	.mod-nav .mod-form .ipt-group{
	    position: relative;
	    background-color: #fff;
	    border-radius: 5px;
	    padding-left: 30px;
	    line-height: 30px;
	}
	.mod-form .ipt-group .icon-search,.mod-form .ipt-group .icon-code{
	    position: absolute;
	    width: 18px;
	    height: 18px;
	    top: 50%;
	    margin-top: -9px;
	}
	.mod-form .ipt-group .icon-code{
		background:url("../../../static/images/ic_scan_gray.png") 0 0 no-repeat;
		background-size: cover;
		right: 8px;
	}
	.mod-form .ipt-group .icon-search{
		background:url("../../../static/images/ic_search_gray.png") 0 0 no-repeat;
		background-size: cover;
		left: 6px;
	}
	.mod-form .ipt-group .ipt{
	    border: none;
	    outline: none;
	    font-size: 16px;
	    color: #2e2e2e;
	}
	.mod-nav .icon-chat{
		background:url("../../../static/images/ic_chat_white.png") 0 0 no-repeat;
		background-size: cover;
		width: 30px;
		height: 30px;
	}
</style>