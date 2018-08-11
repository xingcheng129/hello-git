<template>
	<div class="mod-cinema container">
		<h4 class="cinema-name">
			影院热映
			<a href="#" class="n-more">
				更多
				<i class="icon-d icon-chevron-right"></i>
			</a>
		</h4>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
				<div class="swiper-slide">
					<img class="s-banner" src="../../../static/images/p2510145629.jpg" alt="" />
					<h5 class="s-title">加勒比海盗5:死无对证</h5>
					<div class="s-grede">
						<span class="g-shape">★★★★★</span>
						<span class="g-score">7.5</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DoubanContent",
		mounted:function(){
			new Swiper(".swiper-container",{
				direction: "horizontal",
				slidesPerView: 3,
				spaceBetween: 10,
			})
		}
	}
</script>

<style scoped>
	.icon-chevron-right{
		background: url("../../../static/images/ic_arrow_green_right.png") 0 0 no-repeat;
		background-size: contain;
		width: 20px;
	    height: 22px;
	    vertical-align: bottom;
	}
	.mod-content .mod-cinema{
		margin-top: 10px;
		background: #fff;
	 	padding-top: 15px; 
	 	padding-bottom: 20px; 
	}
	.mod-content .mod-cinema .cinema-name{
		font-weight: bold;
		margin-bottom: 25px;
	}
	.mod-cinema .cinema-name a.n-more{
		color: green;
		float: right;
	}
	.mod-cinema .cinema-name a.n-more:active,
	.mod-cinema .cinema-name a.n-more:focus{
		color: green;
		text-decoration: none;
	}
	.swiper-container{
		
	}
	.swiper-wrapper{
		display: -ms-flexbox;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	.swiper-wrapper .swiper-slide{
		max-width: 200px;
	}
	.swiper-wrapper .swiper-slide .s-banner{
		width: 100%;
		min-height: 180px;
		height: 50%;
	}
	.swiper-wrapper .swiper-slide .s-title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	.swiper-wrapper .swiper-slide .s-grede{
		color: #999;
	}
	.swiper-slide .s-grede .g-shape{
		color: transparent;
		background: linear-gradient(90deg,orange 75%,#eee 25%);
		-webkit-background-clip: text;
	}
</style>