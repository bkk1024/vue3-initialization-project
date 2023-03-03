<template>
	<router-view v-slot="{ Component }">
		<component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
	</router-view>
</template>

<script setup>
	defineOptions({
		name: "app",
	})
</script>

<style lang="less" scoped></style>
