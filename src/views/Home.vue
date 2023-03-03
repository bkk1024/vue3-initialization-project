<template>
	<div class="home">
		<svg-icon name="complete" />
		<p>counter: {{ homeStore.counter }}</p>
		<div class="plus" @click="plusHomeCounter">点击counter++</div>
		<div class="reset" @click="resetHomeCounter">点击counter复原</div>
		<div class="get-mock" @click="getInfo">axios获取mock数据(不跨域)</div>
		<div class="get-nest" @click="getPostsInfo">axios获取nest数据(跨域)</div>
		<p>{{ info }}</p>
	</div>
</template>

<script setup>
	import { useHomeStore } from "@/stores/home.js"
	import { getAll, getPosts } from "@/api/request.js"

	defineOptions({
		name: "home",
	})

	const homeStore = useHomeStore()

	const plusHomeCounter = () => {
		homeStore.plusCounter()
	}

	const resetHomeCounter = () => {
		homeStore.resetCounter(0)
	}

	const info = ref("")
	// 请求接口，mock 数据接口
	const getInfo = async () => {
		let res = await getAll()
		info.value = res.data.list
		console.log("res", res)
	}

	// 请求接口，本地 nestjs 启动的服务的接口
	const getPostsInfo = async () => {
		let res = await getPosts()
		info.value = res.data
		console.log("res", res)
	}
</script>

<style lang="less" scoped>
	.home {
		width: 100%;
		height: 100%;

		.plus {
			width: 100px;
			background-color: pink;
			cursor: pointer;
			user-select: none;
		}

		.reset {
			width: 100px;
			background-color: skyblue;
			cursor: pointer;
			user-select: none;
		}

		.get-mock {
			width: 100px;
			background-color: burlywood;
			cursor: pointer;
			user-select: none;
		}

		.get-nest {
			width: 100px;
			background-color: darkcyan;
			cursor: pointer;
			user-select: none;
		}
	}
</style>
