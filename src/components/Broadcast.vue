<template>
	<div class="boradcast_h">
		<nav-heade>
			<h2 slot="title">{{navTop.title}}</h2>
			<img class="img-left" slot="imgleft" :src="navTop.img1" alt="" />
			<img class="img-right" slot="imgright" :src="navTop.img2" alt="" />
		</nav-heade>
		<div class="container mod-container">
			<broadcast-banner></broadcast-banner>
			<broadcast-content></broadcast-content>
		</div>
		<broadcast-bottom></broadcast-bottom>
	</div>
</template>

<script>
	import NavHeade from '@/components/base/NavHeade'
	import BroadcastBanner from '@/components/broadcast/BroadcastBanner'
	import BroadcastContent from '@/components/broadcast/BroadcastContent'
	import BroadcastBottom from '@/components/broadcast/BroadcastBottom'
	export default {
		name: "Boradcast",
		data: function() {
			return {
				navTop: {
					title: "广播",
					img1: "../../../static/images/ic_status_search_user.png",
					img2: "../../../static/images/ic_create_group_chat_blue.png"
				}
			}
		},
		components: {
			NavHeade,
			BroadcastBanner,
			BroadcastContent,
			BroadcastBottom
		}
	}
</script>

<style>
	.mod-container{
		background: #f7f7f7;
	    height: 545px;
	    overflow: auto;
	}
</style>