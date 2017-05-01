<template>
		<div class="col-md-9">
			<div class="solegan"><h5>&nbsp;搜索结果</h5></div>
			<p>{{msg}}</p>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				msg: "",
			}
		},
		props: ['msg']
		
	}
	
</script>
<style scoped>
	.solegan {
		text-align: left;
	}
	.solegan h5:before {
		content: '|';
		font-size: 24px;
		font-weight: bold;
		color: #8E8E38;
		
	}
</style>