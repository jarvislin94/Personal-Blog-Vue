<template>
	<div class="col-md-3">
	<div class="solegan"><h5>&nbsp;博主中心</h5></div>
		<div class="card" style="width: 20rem;">
		  <div class="card-block">
		    <h4 class="card-title"></h4>
		    <p class="card-text">颜色不一样的花火</p>
		  </div>
		  <ul class="list-group list-group-flush">
		    <li class="list-group-item">性别：男</li>
		    <li class="list-group-item">电话：13047912876</li>
		    <li class="list-group-item">github:jackzong.github.io</li>
		  </ul>
		  <div class="card-block">
		    <a href="#" class="card-link"></a>
		    <a href="#" class="card-link"></a>
		  </div>
		</div>
		<div class="pu">
			<h5>&nbsp;热门文章</h5>
			<ul class="list-group">
			  <li class="list-group-item">
			   <a href="">老板的冬天来了</a>
			  </li>
			  <li class="list-group-item">
			   <a href="">老板的冬天来了</a>
			  </li>
		    </ul>
		</div>
		<div class="pu">
			<h5>&nbsp;访问流量</h5>
			<ul class="list-group">
			  <li class="list-group-item justify-content-between">
			    在线人数
			    <span class="badge badge-default badge-pill">14</span>
			  </li>
		    </ul>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less"scoped>
	.pu {
		margin-top: 40px;
		text-align: left;
	}
	.pu h5:before {
		content: '|';
		font-size: 24px;
		font-weight: bold;
		color: #8E8E38;
	}
	.card {

	}
	.solegan {
		text-align: left;
		h5:before {
		content: '|';
		font-size: 24px;
		font-weight: bold;
		color: #8E8E38;
		};
	}
</style>