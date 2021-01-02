<template>
  <div>
    <p>App组件</p>
    <ul :class="{loading:flag}">
      <li v-for="value in stus" v-bind:key="value.id">
          学号:{{value.id}}
          姓名:{{value.name}}
          年龄:{{value.age}}
          性别:{{value.sex}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"App",
    data(){
      return {
        stus:[],
        flag:false
      }
    },
    created(){
      this.flag=true;
      axios.post("/data")
      .then(res=>{
        console.log(res);
        this.stus=res.data.data
        this.flag=false
      })
    }
}
</script>

<style  scoped>
  ul{
    width:400px;
    height:400px;
    border:1px solid #f00;
  }
  .loading{
      background: url(assets/1.gif) no-repeat 50% 50%;
    }
</style>