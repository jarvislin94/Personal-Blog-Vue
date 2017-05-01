<template>
<div class="col-md-9">
<div class="solegan"><h5>&nbsp;文章推荐</h5></div>
<div class="article-list" >
	<dl>
		<div class="title">
			<router-link to="/detail">直播结束｜到底要删除什么？魅蓝 E2 新品发布会</router-link>
			<span class="time">2017-05-20</span>
		</div>
		<div class="content">
			<p>
				2016 年 8 月，魅蓝 E 首次亮相，不同于其他魅蓝手机外形的千篇一律，魅蓝 E 在外观上有着较大的差异性，相信此次魅蓝 E2 也会在机身外观上做出一些改变。
			</p>
			
		</div>
		<div class="more">
			<router-link to="/detail">阅读全文</router-link>
		</div>
	</dl>
	<dl>
		<div class="title">
			<router-link to="/detail">直播结束｜到底要删除什么？魅蓝 E2 新品发布会</router-link>
			<span class="time">2017-05-20</span>
		</div>
		<div class="content">
			<p>
				2016 年 8 月，魅蓝 E 首次亮相，不同于其他魅蓝手机外形的千篇一律，魅蓝 E 在外观上有着较大的差异性，相信此次魅蓝 E2 也会在机身外观上做出一些改变。
			</p>
		</div>
		<div class="more">
			<router-link to="/detail">阅读全文</router-link>
		</div>
	</dl>
	<dl>
		<div class="title">
			<router-link to="/detail">直播结束｜到底要删除什么？魅蓝 E2 新品发布会</router-link>
			<span class="time">2017-05-20</span>
		</div>
		<div class="content">
			<p>
				2016 年 8 月，魅蓝 E 首次亮相，不同于其他魅蓝手机外形的千篇一律，魅蓝 E 在外观上有着较大的差异性，相信此次魅蓝 E2 也会在机身外观上做出一些改变。
			</p>
		</div>
		<div class="more">
			<router-link to="/detail">阅读全文</router-link>
		</div>
	</dl>
	<dl>
		<div class="title">
			<router-link to="/detail">直播结束｜到底要删除什么？魅蓝 E2 新品发布会</router-link>
			<span class="time">2017-05-20</span>
		</div>
		<div class="content">
			<p>
				2016 年 8 月，魅蓝 E 首次亮相，不同于其他魅蓝手机外形的千篇一律，魅蓝 E 在外观上有着较大的差异性，相信此次魅蓝 E2 也会在机身外观上做出一些改变。
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
		name: "index",
		conponents:{
		},
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped>
	a {
		color: black;
		transition: color .1s ease-in;
	}
	a:hover {
		color: #C53E72;
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
		margin-top: 50px;
	}
	.article-list dl {
		margin-top: 10px;
	}
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