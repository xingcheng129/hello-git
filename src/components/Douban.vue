<template>
	<div class="douban-h">
		<nav-heade>
			<h2 slot="title">{{navTop.title}}</h2>
			<img class="img-left" slot="imgleft" :src="navTop.img1" alt="" />
			<img class="img-right" slot="imgright" :src="navTop.img2" alt="" />
		</nav-heade>
		<div class="tab-content mod-content">
			<douban-heade></douban-heade>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import NavHeade from '@/components/base/NavHeade'
	import DoubanHeade from '@/components/douban/DoubanHeade'
	export default{
		name:"Boradcast",
		data: function(){
			return {
				navTop:
					{
		  				title:"影音书",
						img1:"../../../static/images/ic_group_search.png",
						img2:"../../../static/images/ic_create_group_chat_blue.png"
		  			}
			}
		},
		components:{
			NavHeade,
			DoubanHeade
		}
	}
</script>

<style scoped>
	.mod-content{
		width: 100%;
		overflow: auto;
		height: 605px;
	}
</style>