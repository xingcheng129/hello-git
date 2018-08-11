<template>
	<div class="nav-top navbar-fixed-top">
		<slot name="title"></slot>
		<slot name="imgleft"></slot>
		<slot name="imgright"></slot>
	</div>
</template>

<script>
	export default{
		name: "NavTop",
		data: function(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.nav-top{
		width: 100%; line-height: 60px;
		background: #f7f7f7; text-align: center;
		position: relative;
	}
	.nav-top h2{
	    font-weight: bold;
	    font-size: 1.4rem;
	    position: relative;
	    height: 57px;
	    line-height: 57px;
	    margin-top: 0;
	    margin-bottom: 0;
	    background: #f7f7f7;
	    border-bottom: 1px solid #ccc;
	}
	.nav-top>img{
		position: absolute;
		width: 30px; height: 30px;
		top: 50%; margin-top: -15px;
	}
	.nav-top .img-left{
		right: 70px;
	}
	.nav-top .img-right{
		right: 15px;
	}
</style>