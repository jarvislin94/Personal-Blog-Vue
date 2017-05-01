<template>
<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">梦想家</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">主页 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-for="(list,index) in lists" v-if="list.pid==0">
            <router-link to="/category/:1" class="nav-link" >{{list.name}}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category/:1" class="nav-link">学习</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category/:1" class="nav-link">娱乐</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category/:1" class="nav-link">科技</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">大学</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">大一</a>
              <a class="dropdown-item" href="#">大二</a>
              <a class="dropdown-item" href="#">大三</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <router-link to="/search/" tag="button" type="submit" class="btn btn-outline-success my-2 my-sm-0">Search</router-link> 
        </form>
      </div>
    </nav>
</template>
<script>
	export default {
		name: "header",
		data() {
      return {
       lists:[],
      };
		},
		mounted() {
      this.getNav();
		},
    methods: {
      getNav: function(){
        let self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET","../../static/mock/nav.json",true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              self.lists = JSON.parse(xhr.responseText).data;
              console.log(this.lists);

            }
          }
        }
        xhr.send();
      }
    }
	}
</script>
<style scoped>
	
</style>