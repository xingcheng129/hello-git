<template>
	<div>
		<douban-content></douban-content>
		<douban-banner></douban-banner>
		<douban-banner></douban-banner>
	</div>
</template>

<script>
	import DoubanContent from '@/components/douban/DoubanContent'
	import DoubanBanner from '@/components/douban/DoubanBanner'
	export default{
		name:"DBLocal",
		components:{
			DoubanContent,
			DoubanBanner
		}
	}
</script>

<style>
</style>