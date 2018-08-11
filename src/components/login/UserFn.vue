<template>
	<div>
		<div class="row mod_block block_b" v-for="itera in userfns">
			<div class="col-xs-3 text-center" v-for="item in itera">
				<div class="block_icon">
					<img class="img-responsive" :src="item.images" alt="" />
				</div>
				{{item.name}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"UserFn",
		data(){
			return{
				userfns:[
					[
						{
							images:"../../../static/images/ic_my_likes.png",
							name:"喜欢"
						},
						{
							images:"../../../static/images/ic_my_note.png",
							name:"日记"
						},
						{
							images:"../../../static/images/ic_my_album.png",
							name:"相册"
						},
						{
							images:"../../../static/images/ic_my_status.png",
							name:"我的广播"
						}
					],
					[
						{
							images:"../../../static/images/ic_my_movies_tvs.png",
							name:"电影·电视"
						},
						{
							images:"../../../static/images/ic_my_books.png",
							name:"读书"
						},
						{
							images:"../../../static/images/ic_my_music.png",
							name:"音乐"
						},
						{
							images:"../../../static/images/ic_my_events.png",
							name:"同城活动"
						}
					],
					[
						{
							images:"../../../static/images/ic_drama_channel_logo.png",
							name:"舞台剧"
						},
						{
							images:"../../../static/images/ic_my_note.png",
							name:"日记"
						},
						{
							images:"../../../static/images/ic_my_doulist.png",
							name:"豆列"
						},
						{
							images:"../../../static/images/ic_my_orders.png",
							name:"订单"
						}
					]
				]
			}
		}
	}
</script>

<style scoped>
	.mod_block{
		padding: 13px 0px;
	    background-color: #fff;
	    border: 1px solid #e2e2e2;
	}
	.mod_block:first-child{
		margin-top: 20px;
	}
	.mod_block:last-child{
		border: none;
	}
	.block_icon{
		margin-bottom: 10px;
	}
	.block_icon>img{
		margin: 0 auto;
	    width: 36px;
	    height: 36px;
	}
</style>