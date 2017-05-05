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
          <li class="nav-item" v-for="(list,index) in lists" v-if="list.pid==0&&list.child==0">
            <router-link :to="{ name: 'category',params: {id:list.id} }" class="nav-link" >{{list.name}}</router-link>
          </li>
          <li class="nav-item dropdown" v-for="(list,index) in lists" v-if="list.pid==0&&list.child!=0">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{list.name}}</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link :to="{name: 'category',params: {id:list1.id}}" v-for="(list1,index) in list.child" class="dropdown-item">{{list1.name}}</router-link>
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
              var data = JSON.parse(xhr.responseText).data;
              for(var i = 0;i<data.length;i++){
                var arr = [];
                for(var ii = 0;ii<data.length;ii++){    
                   if(data[i].id == data[ii].pid){
                      arr.push(data[ii]);
                    }
                }
                data[i].child = arr;
              }
              self.lists = data;  
            }
          }
        }
        xhr.send();
      },
    }
	}
</script>
<style scoped>
	
</style>