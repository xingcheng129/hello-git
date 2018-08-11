<template>
	<div class="group_h">
		<nav-heade>
			<h2 slot="title">{{navTop.title}}</h2>
			<img class="img-left" slot="imgleft" :src="navTop.img1" alt="" />
			<img class="img-right" slot="imgright" :src="navTop.img2" alt="" />
		</nav-heade>
		<div class="container mod-container">
			<group-banner></group-banner>
			<group-film></group-film>
		</div>
		<group-bottom></group-bottom>
	</div>
</template>

<script>
	import NavHeade from '@/components/base/NavHeade'
	import GroupBanner from '@/components/group/GroupBanner'
	import GroupFilm from '@/components/group/GroupFilm'
	import GroupBottom from '@/components/group/GroupBottom'
	export default{
		name:"Boradcast",
		data: function(){
			return {
				navTop:
					{
		  				title:"小组",
						img1:"../../../static/images/ic_group_search.png",
						img2:"../../../static/images/ic_create_group_chat_blue.png"
		  			}
			}
		},
		components:{
			NavHeade,
			GroupBanner,
			GroupFilm,
			GroupBottom
		}
	}
</script>

<style scoped>
	.mod-container{
		background: #fff;
	    height: 560px;
	    overflow: auto;
	}
	.mod-function{
	    background: rgba(255,255,255,0.9);
	    justify-content: flex-end;
		bottom: 73px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.mod-function .f-btn{
		background-color: #dfdfdf;
	    border: none;
	    color: white;
	    font-size: 1.2rem;
	}
</style>