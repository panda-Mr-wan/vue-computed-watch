<template>
  <div>
    <input type="text" v-bind:disabled="flag">
    <button @click="changeEdit">更改可编辑状态</button>
    <hr>
    <button @click="popArray">弹出一个数组元素</button>
    <p v-if="stus.length==0">暂无数据.....</p>
    <p v-else>
      <ul>
        <li v-for="(value,index) in stus" v-bind:key="index">
          {{value}}
        </li>
      </ul>
    </p>
    <hr>
    <a v-bind:href="url">点击百度一下</a>
    <hr>
    <textarea cols="30" rows="10" v-model="str" v-on:input="tips"></textarea>
    <span v-if="num<=40">已输入{{num}}字</span>
    <span v-else v-bind:class="red">已超出{{num-40}}字</span>
    <hr>
    <textarea cols="30" rows="5" v-on:keyup.13="cons"></textarea>
    <hr>
    <a v-bind:href="url" @click.prevent="show">百度以下</a>
    <hr>
    <form action="check.html" v-on:submit.prevent="tijiao">
      用户名：<input type="text" v-model="userName"><span>{{userNameTips}}</span><br>
      密码：<input type="password" v-model="password"><span>{{passwordTips}}</span><br>
      <input type="submit" name="submit" value="登录">
    </form>
    <hr>
    <p>{{name | check}}</p>
    <hr>
    <ul>
      <li v-for="(value,index) in kemu" v-bind:key="index">
        {{value | select}}
      </li>
    </ul>
    <hr>
    <a v-bind:href="urls | qurl">百度</a>
    <hr>
  </div>
</template>

<script>
  export default {
    name:"App",
    data(){
      return {
        flag:false,
        stus:["tom","jerry","marry","lucy"],
        url:"http://www.baidu.com",
        str:"",
        num:0,
        red:"red",
        userName:"",
        password:"",
        userNameTips:"",
        passwordTips:"",
        name:"tom",
        kemu:["数学","英语","语文","体育"],
        urls:"baidu"
      }
    },
    methods:{
      changeEdit(){
        if(this.flag){
          this.flag=false
        }else{
          this.flag=true
        }
      },
      popArray(){
        this.stus.pop()
      },
      tips(){
        this.num=this.str.length;
      },
      cons(){
        console.log("你按了回车键")
      },
      show(){
        console.log("被阻止了")
      },
      tijiao(){
        if(this.userName==""){
          this.userNameTips="用户名不能为空";
        }
        if(this.password==""){
          this.passwordTips="用户名不能为空";
        }
      }
    },
    filters:{
      check(data){
        if(data=="tom"){
          return "jarry"
        }
      },
      select(data){
        if(data=="语文"){
          return "选修"+data;
        }
        return "必修"+data;
      },
      qurl(data){
        return "http://www."+data+".com";
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color:#f00;
  }
  .red{
    color:#f00;
  }
</style>