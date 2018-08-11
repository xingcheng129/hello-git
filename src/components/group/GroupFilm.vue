<template>
	<div class="mod-film">
		<div class="">
			<img class="img-responsive" src="../../../static/images/abc_b_v.png" alt="" />
		</div>
		<div class="row mod-title">
			<hr />
			<h3 class="f-film">影视</h3>
		</div>
		<div class="f-rec" v-for="itera in films">
			<div class="r-img">
				<img class="img-responsive" :src="itera.images" alt="" />
			</div>
			<div class="r-intr">
				<h4>{{itera.title}}</h4>
				<p>
					{{itera.disc}}
				</p>
			</div>
			<div class="r-peo">
				<span>{{itera.attention}}人</span>
				<img :src="itera.images2" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GroupFilm",
		data(){
			return {
				films:[
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"佳片推荐(只迷电影最独特之处)",
						disc:"加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影、剧集、等等",
						attention:612808
					},
					{
						images:"../../../static/images/abc_v.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"The Criterion Collection",
						disc:"Criterion Collection的出品是最传统亦是最具美感的DVD产品。如果你酷爱欧美",
						attention:6060
					},
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"老友记",
						disc:"喜欢FRIENDS申请进组是请引用一句老",
						attention:65145
					},
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"老友记",
						disc:"喜欢FRIENDS申请进组是请引用一句老",
						attention:65145
					},
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"老友记",
						disc:"喜欢FRIENDS申请进组是请引用一句老",
						attention:65145
					},
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"老友记",
						disc:"喜欢FRIENDS申请进组是请引用一句老",
						attention:65145
					},
					{
						images:"../../../static/images/abc_video.png",
						images2:"../../../static/images/ic_group_check_anonymous.png",
						title:"老友记",
						disc:"喜欢FRIENDS申请进组是请引用一句老",
						attention:65145
					}
					
				]
			}
		}
	}
</script>

<style scoped>
	.mod-film .mod-title{
		position: relative;
	}
	.mod-film .mod-title .f-film{
		position: absolute;
	    left: 50%;
	    margin-left: -44px;
	    text-align: center;
	    width: 88px;
	    top: -9px;
	    background: #fff;	
	    font-size: 1.1rem;
	}
	.mod-film .f-rec{
		display: flex;
		margin-top: 19px;
	}
	.mod-film .f-rec .r-intr{
		width: 220px;
		padding-left: 7px;
	}
	.mod-film .f-rec .r-img>img{
		width: 60px;
		height: 60px;
	}
	.mod-film .f-rec .r-intr>h4{
		font-size: 1.3rem;
	    margin-top: 0;
	    margin-bottom: 0;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-weight: bold;
	    white-space: nowrap;
	}
	.mod-film .f-rec .r-intr>p{
		display: -webkit-box;
		color: #999;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 0.8rem;
	}
	.mod-film .f-rec .r-peo{
		color: #999;
		align-self: center;
		font-size: 0.8rem;
		padding-left: 7px;
	}
	.mod-film .f-rec .r-peo>span{
		display: inline-block;
		width: 57px;
		text-align: right;
	}
	.mod-film .f-rec .r-peo>img{
		width: 30px;
		margin-left: 6px;
	}
</style>