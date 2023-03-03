<template>
	<svg class="icon" aria-hidden="true" :style="{ width: `${size}px`, height: `${size}px` }">
		<use :xlink:href="`#i-${name}`" :fill="color" />
	</svg>
</template>

<script setup>
	defineOptions({
		name: "SvgIcon",
	})

	const props = defineProps({
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: "#000",
		},
		size: {
			type: Number,
			default: 20,
		},
	})
</script>

<style lang="less" scoped></style>
