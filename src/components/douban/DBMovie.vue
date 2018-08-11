<template>
	<div>
		<douban-content></douban-content>
		<douban-banner></douban-banner>
		<douban-content></douban-content>
	</div>
</template>

<script>
	import DoubanContent from '@/components/douban/DoubanContent'
	import DoubanBanner from '@/components/douban/DoubanBanner'
	export default{
		name:"DBMovie",
		components:{
			DoubanContent,
			DoubanBanner
		}
	}
</script>

<style>
</style>