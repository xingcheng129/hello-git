<template>
	<div class="row mod-r-navs">
		<ul class="nav nav-tabs mod-nav" >
			<li v-for="(itera,index) in sources" @click="change(index)">
				<router-link :class="{active:itera.flag}" :to="itera.path">{{itera.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"DoubanHeade",
		data(){
			return {
				sources:[
					{
						name:'电影',
						path:'/douban/DBMovie',
						flag: true
					},
					{
						name:'读书',
						path:'/douban/DBStudy',
						flag: false
					},
					{
						name:'电视',
						path:'/douban/DBTel',
						flag: false
					},
					{
						name:'同城',
						path:'/douban/DBLocal',
						flag: false
					},
					{
						name:'音乐',
						path:'/douban/DBMusic',
						flag: false
					}
				]
			}
		},
		methods:{
			change:function(index){
				for(var i=0;i<this.sources.length;i++){
					this.sources[i].flag = false;
				}
				this.sources[index].flag = true;
			}
		}
	}
</script>

<style>
	.mod-r-navs{
		background: #fff;
	}
	.mod-r-navs .mod-nav{
		display: flex;
		justify-content: space-between;
		text-align: center;
	}
	.mod-r-navs .mod-nav li.active{
		
	}
	.nav-tabs>li>a{
		color: #999;
		border: none;
	    padding-left: 18px;
	    padding-right: 18px;
	}
	.nav-tabs>li>a.active{
		border: none;
	    background-color: transparent;
	    border-bottom: 3px solid #7acf91;
	    color: #7acf91;
	}
	.nav-tabs>li.active>a:focus{
		border: none;
	    background-color: transparent;
	    border-bottom: 3px solid #7acf91;
	    color: #7acf91;
	}
	.nav-tabs>li.active>a:focus{
		color: #7acf91;
	}
	.nav>li>a:focus, .nav>li>a:hover{
		background-color: transparent;
	}
</style>