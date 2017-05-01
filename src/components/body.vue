<template>
	<div class="container">
		<div class="row">
			<transition name="fade">	
			<router-view></router-view>
			</transition>
			<body-right></body-right>	
		</div>
	</div>
</template>
<script>
	import left from './body-left.vue'
	import right from './body-right.vue'
	export default {
		name:"body",
		components: {
			"body-left":left,
			"body-right":right
		}
	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .3s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>