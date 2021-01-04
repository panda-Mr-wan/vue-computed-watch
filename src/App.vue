<template>
  <div>
    <h3>App组件</h3>
    <p>{{ fullName }}</p>
    <button @click="changeName">改变姓名</button>
  </div>
</template>

<script>
  export default {
    name:"App",
    data(){
      return {
        firstName:"赵",
        lastName:"四"
      }
    },
    methods:{
      changeName(){
        this.fullName="张三"
      }
    },
    computed:{
      fullName:{
        get(){
          console.log("computed get方法被调用了");
          return this.firstName+this.lastName;
        },
        set(val){
          console.log("computed set方法被调用了");
          let name=val.split("");
          this.firstName=name[0];
          this.lastName=name[1];
        }
      }
    }
  }
</script>

<style scoped>
  
</style>