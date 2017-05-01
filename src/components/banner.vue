<template>
	<div class="jumbotron">
	      <div class="container">
	        <h1></h1>
	        <p> 爱过就够了<br>
				即使舍不得也会好起来<br>
				你说对吗
			</p>
	         <p><img class="card-img-top" src="../assets/u.jpg" alt="Card image cap"></p>
	      </div>
	    </div>
</template>
<script>
	export default {
		name: "banner",
		data() {
			return {}
		}
	}
	
</script>
<style scoped>
	.jumbotron {
		background: url("../assets/banner.jpg") ;

	}
	.jumbotron p,h1 {
		text-align: left;

	}
	.jumbotron .container {
		width: 500px;
		font-weight: bold;
		border-radius: 0;
	}
	.container p img {
		border-radius: 50%;
		width: 110px;
		height: 110px;
		position: absolute;
		top: -10px;
		left: 700px;
		border: 5px solid hsla(120,0%,100%,.5);  
	}
</style>