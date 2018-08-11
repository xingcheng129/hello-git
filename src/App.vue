<template>
  <div id="app">
  	<router-view></router-view>
		<nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '@/components/base/NavFooter'
export default {
  name: 'App',
  components:{
  	NavFooter  
  }
}
</script>

<style>
	*{
		margin:0;
		padding:0;
	}
	html,body{
		position: relative;
		height: 100%;
	}	
	html{
		font-size: 100%;
	}
	body{
		background-color:#eee;
		font-size: 1rem;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		color: #000;
	}
	
	.icon-d{
		display: inline-block;
		position: relative;
		width: 35px;
		height: 35px;
	}
		
	.fixed-top{
		position: fixed;
		width: 100%;
    top: 0;
    left: 0;
		z-index: 99;
	}
	.wrap{
		width: 100%;
		height: 600px;
		overflow: auto;
		margin-top: 70px;
	}
</style>
