<template>
<div class="col-md-9">
	<div class="article-detail">
		<ol class="breadcrumb">
		  <li class="breadcrumb-item"><a href="#">首页</a></li>
		  <li class="breadcrumb-item"><a href="#">数码科技</a></li>
		  <li class="breadcrumb-item active">{{list[0].title}}</li>
		</ol>
		<div class="title text-center">{{list[0].title}}</div>
			<div class="sub-title">
				<div class="row">
					<div class="col-md-3 col-md-offset-1"><i class="glyphicon glyphicon-time"></i>{{list[0].create_time}}</div>
					<div class="col-md-3"><i class="glyphicon glyphicon-user"></i>Jack Zong</div>
					<div class="col-md-2"><i class="glyphicon glyphicon-eye-open"></i>{{list[0].hits}}</div>
				</div>
			</div>
			<div class="content">
				<p>{{list[0].content}}</p>
			</div>
			<div class="key-word "><i class="glyphicon glyphicon-tag"></i> 标签：小清新 胶卷</div>
	</div>
</div>
</template>
<script>
	export default {
		data(){
			return{
				list:[]
			}
		},
		watch:{
			'$route' (to,from){
				this.getDetail();
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getDetail();
			})
		},
		methods:{
			getDetail(){
					var self = this;
					var id = this.$route.params.id;
					var xhr = new XMLHttpRequest();
					xhr.open("GET","../../static/mock/detail.json",false);
					xhr.onreadystatechange = function(){
						if(xhr.readyState == 4 && xhr.status == 200){
							self.list = [];
							var data = JSON.parse(xhr.responseText).data;
							data.forEach(function(x,index,data){
								if(x.id == id){
									x.create_time = new Date(parseInt(x.create_time)*1000).toLocaleString().replace(/:\d{1,2}$/,'');
									self.list.push(x);
								}
							})
						}
					}
					xhr.send();	
					console.log(self.list)
			}
		}
	}
</script>
<style scoped>
	
</style>