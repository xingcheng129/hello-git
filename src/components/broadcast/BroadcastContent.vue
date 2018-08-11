<template>
	<div>
		<div class="row mod-board" v-for="itear in userinfo">
			<i class="icon-d icon-colse"></i>
			<div class="col-xs-3">
				<img class="img-responsive img-circle" :src="itear.buddha" alt="" />
			</div>
			<div class="col-xs-9">
				<div class="row">
					<div class="col-xs-7">
						<h4 class="d-title">{{itear.name}}</h4>
						<p class="d-content">{{itear.attention}}人关注</p>
					</div>
					<div class="col-xs-5">
						<button class="btn btn-block btn-success m-b">关注</button>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<p>
							{{itear.content}}
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-4 d-content">
						<i class="icon-d icon-praise"></i>{{itear.preise}}
					</div>
					<div class="col-xs-4 d-content">
						<i class="icon-d icon-msg"></i>{{itear.discuss}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"BroadcastContent",
		data:function(){
			return {
				userinfo:[
					{
						name:"陈苍苍",
						buddha:"../../../static/images/ic_user_info_birthday.png",
						attention: 53228,
						content:"我们没小孩的也很不容易啊！在家被别人的小孩吵，三天两头躲出去不就是为了图个清静吗！出门在外接着被各种熊孩子打扰，做个飞机小孩喊一路做个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我",
						preise:50,
						discuss:29
					},
					{
						name:"陈苍苍",
						buddha:"../../../static/images/ic_user_info_birthday.png",
						attention: 53228,
						content:"我们没小孩的也很不容易啊！在家被别人的小孩吵，三天两头躲出去不就是为了图个清静吗！出门在外接着被各种熊孩子打扰，做个飞机小孩喊一路做个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我",
						preise:50,
						discuss:29
					},
					{
						name:"陈苍苍",
						buddha:"../../../static/images/ic_user_info_birthday.png",
						attention: 53228,
						content:"我们没小孩的也很不容易啊！在家被别人的小孩吵，三天两头躲出去不就是为了图个清静吗！出门在外接着被各种熊孩子打扰，做个飞机小孩喊一路做个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我",
						preise:50,
						discuss:29
					},
					{
						name:"陈苍苍",
						buddha:"../../../static/images/ic_user_info_birthday.png",
						attention: 53228,
						content:"我们没小孩的也很不容易啊！在家被别人的小孩吵，三天两头躲出去不就是为了图个清静吗！出门在外接着被各种熊孩子打扰，做个飞机小孩喊一路做个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我",
						preise:50,
						discuss:29
					}
				]
			}
		}
	}
</script>

<style>
	.mod-board{
		position: relative;
		background: #fff;
	    padding-top: 25px;
	    padding-bottom: 20px;
	    border-radius: 7px;
	    box-shadow: 2px 4px 10px 0px #e2e2e2;
	    margin: 0 0 15px 0;
	}
	.mod-board .icon-colse{
		position: absolute;
		right: 10px;
		top: 10px;
		background: url("../../../static/images/ic_close.png") 0 0 no-repeat;
		background-size: contain;
		width: 12px;
		height: 12px;
	}
	.mod-board .d-title{
		margin-top: 5px;
	}
	.mod-board .m-b{
		margin-top: 10px;
	}
	.mod-board .icon-praise{
		background: url("../../../static/images/ic_liked.png") 0 0 no-repeat;
		background-size: contain;
		width: 25px;
		height: 25px;
		vertical-align: bottom;
	}
	.mod-board .icon-msg{
		background: url("../../../static/images/ic_group_comment_0.png") 0 0 no-repeat;
		background-size: contain;
		width: 25px;
		height: 25px;
		vertical-align: bottom;
	}
</style>