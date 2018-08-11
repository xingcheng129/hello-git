<template>
	<div>
		<home-heade>
			<span slot="c-search" class="icon-d icon-search"></span>
			<input slot="c-input" class="ipt" type="text" placeholder="影视 图书 唱片 小组等"/>
			<span slot="c-code" class="icon-d icon-code"></span>
			<div slot="c-chat" class="icon-d icon-chat"></div>
		</home-heade>
		<div class="wrap">
			<slide-show></slide-show>
			<home-hot></home-hot>
		</div>
	</div>
</template>

<script>
	import HomeHeade from '@/components/home/HomeHeade'
	import SlideShow from '@/components/base/SlideShow'
	import HomeHot from '@/components/home/HomeHot'
	export default{
		name:"Home",
		components:{
			HomeHeade,
			SlideShow,
			HomeHot
		}
	}
</script>

<style>
</style>