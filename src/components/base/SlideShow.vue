<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="itear in images">
				<img :src="itear" class="img-responsive" alt="" />
			</div>
		</div>
		<!--分页器-->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script scoped>
	import Swiperc from '../../../static/swiper/css/swiper.css'
	import Swiperj from '../../../static/swiper/js/swiper.js'
	export default{
		name:"SlideShow",
		mounted: function(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				pagination:{
					el:".swiper-pagination",
				}
			})
		},
		data:function(){
			return {
				images:[
					"../../static/images/banner/01.jpg",
					"../../static/images/banner/02.jpg",
					"../../static/images/banner/03.jpg",
					"../../static/images/banner/01.jpg",
					"../../static/images/banner/02.jpg"
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.swiper-container{
		width: 100%;
		height: 150px;
	}
	.swiper-slide{
		display: -webkit-flex;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;			
	}
	.swiper-pagination{
		text-align: right;
		padding-right: 25px;
	}
	.swiper-pagination-bullet{
		background: rgba(255, 255, 255, 0.9);
	}
	.swiper-pagination-bullet-active{
		background: rgba(255, 255, 255, 1);
	}
</style>