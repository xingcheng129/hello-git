<template>
	<div class="login-h">
		<nav-heade>
			<h2 slot="title">{{navTop.title}}</h2>
			<img class="img-left" slot="imgleft" :src="navTop.img1" alt="" />
			<img class="img-right" slot="imgright" :src="navTop.img2" alt="" />
		</nav-heade>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="container">
						<login-user></login-user>
						<user-remind></user-remind>
						<user-fn></user-fn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NavHeade from '@/components/base/NavHeade'
	import LoginUser from '@/components/login/LoginUser'
	import UserRemind from '@/components/login/UserRemind'
	import UserFn from '@/components/login/UserFn'
	export default{
		name:"Boradcast",		
		mounted:function(){
			new Swiper(".swiper-container",{
				direction: "vertical"
			})
		},
		data: function(){
			return {
				navTop:
					{
		  				title:"我的",
						img1:"",
						img2:"../../../static/images/ic_settings.png"
		  			}
			}
		},
		components:{
			NavHeade,
			LoginUser,
			UserRemind,
			UserFn
		}
	}
</script>

<style>
</style>