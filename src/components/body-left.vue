<template>
<div class="col-md-9">
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">首页</a></li>
  <li class="breadcrumb-item"><a href="#">{{parentTitle}}</a></li>
  <li class="breadcrumb-item active" v-if="ok !=null">{{lists[0].category}}</li>
</ol>
<div class="article-list" >
	<dl v-for="(list,index) in lists">
		<div class="title">
			<router-link :to="{ name: 'detail',params:{ id:list.id } }">{{list.title}}</router-link>
			<span class="time">{{list.create_time}}</span>
		</div>
		<div class="content">
			<p>
				{{list.content}}
			</p>
			
		</div>
		<div class="more">
			<router-link to="/detail">阅读全文</router-link>
		</div>
	</dl>
</div>	
</div>
</template>
<script>
	export default {
		name: "body-left",
		conponents:{
		},
		data() {
			return {
				lists:[],
				parentTitle:"",
				ok:null
			}
		},
		watch:{
			'$route' (to,from){
				this.getCategory();	
				this.getParentTitle();
			},
			
		},
		mounted() {
		  this.$nextTick(function () {
		    this.getCategory();
		    this.getParentTitle();
		  });
		},//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
		methods:{
			getCategory(){
				var self = this;
				var id = this.$route.params.id;
				var xhr = new XMLHttpRequest();
				xhr.open("GET","../../static/mock/detail.json",false);
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						self.lists = [];
						var data = JSON.parse(xhr.responseText).data;
						data.forEach(function(x,index,data){
							if(x.category_id == id){
								x.create_time = new Date(parseInt(x.create_time)*1000).toLocaleString().replace(/:\d{1,2}$/,'');
								self.lists.push(x);
								self.ok = true;
							}
						})
					}
				}
				xhr.send();	
				console.log(self.lists)
			},
			getParentTitle(){
				var self = this;
				var id = this.$route.params.id;
				var xhr = new XMLHttpRequest();
				xhr.open("GET","../../static/mock/nav.json",false);
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						self.parentTitle = '';
						var data = JSON.parse(xhr.responseText).data;
						data.forEach(function(x,index,data){
							if(x.id == id){
								if(x.pid == 0){
									self.parentTitle = x.name;
									self.ok = null;
								}else{
									for(let i of data){
										if(i.id == x.pid){
											self.parentTitle = i.name;
										}
									}
								}
								
							}
						})
					}
				}
				xhr.send();	
				console.log(self.parentTitle);
			}
		}
	}
</script>
<style lang="less" scoped>
@blue:black;
	a {
		color: @blue;
		transition: color .1s ease-in;
	}
	a:hover {
		color: #C06161;
		text-decoration: none;
	}
	.title {
		text-align: left;
		margin-bottom: 5px;
	}
	.time {
		float: right;
		color: #422B2B;
	}
	.content {
		width: 100%;
		height: 100px;
		overflow: hidden;
		text-overflow: clip;
		text-align: left;
	}
	.more {
		text-align: center;
		border: dashed 1px black;
		width: 85px;
		position: relative;
		left: 89%;
	}
	.article-list {
		
	}
	.article-list dl {
		margin-top: 10px;
	}
</style>