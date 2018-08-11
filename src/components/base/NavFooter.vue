<template>
	<ul class="nav-bottom navbar-fixed-bottom">
		<li v-for="(itear,index) in navBottoms" :class="{ative:itear.flag}" 
			@click="changeBFn()" @load="changeBFn()">
			<router-link :to="itear.path">
				<img v-if="itear.flag" :src="itear.yImage" alt="" />
				<img v-else :src="itear.nImage" alt="" />
				{{itear.name}}
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		data:function(){
			return {
				navBottoms:[
					{
						nImage:"../../../static/images/ic_tab_home_normal.png",
						yImage:"../../../static/images/ic_tab_home_active.png",
						name:"首页",
						path:"/Home",
						flag: true
					},
					{
						nImage:"../../../static/images/ic_tab_subject_normal.png",
						yImage:"../../../static/images/ic_tab_subject_active.png",							
						name:"影音书",
						path:"/Douban",
						flag: false
					},
					{
						nImage:"../../../static/images/ic_tab_status_normal.png",
						yImage:"../../../static/images/ic_tab_status_active.png",
						name:"广播",
						path:"/Broadcast",
						flag: false
					},
					{
						nImage:"../../../static/images/ic_tab_group_normal.png",
						yImage:"../../../static/images/ic_tab_group_active.png",
						name:"小组",
						path:"/Group",
						flag: false
					},
					{
						nImage:"../../../static/images/ic_tab_profile_female_normal.png",
						yImage:"../../../static/images/ic_tab_profile_female_active.png",
						name:"我的",
						path:"/Login",
						flag: false
					}
				]
			}
		},
		methods:{
			changeBFn(){
				var place = location.href.lastIndexOf("/");
				console.log(place);
				var path = location.href.substring(place);
				console.log(path);
				var index = 0;
				for(var i=0;i<this.navBottoms.length;i++){
					this.navBottoms[i].flag = false;
					if(this.navBottoms[i].path == path){
						index = i;
					}
				}
				console.log(index);
				this.navBottoms[index].flag = true;
			}
		}
	}
</script>

<style scoped>
	.nav-bottom{
	    width: 100%;
	    list-style: none;
	    position: fixed;
	    bottom: 0;
	    display: flex;
	    justify-content: space-around;
	    background: #f7f7f7;
	    border-top: 1px solid #c0c0c0;
	    margin-bottom: 0;
	}
	.nav-bottom li{
		text-align: center;
		color: #999;
	}
	.nav-bottom li a{
		color: #999;
		text-decoration: none;
	}
	.nav-bottom li.ative{
		color: green;
	}
	.nav-bottom li img{
		display: block;
		width: 50px;
		height: 50px;
		margin: 0 auto;
	}
</style>