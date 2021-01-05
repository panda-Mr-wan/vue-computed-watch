<template>
  <div>
    <h3>App组件</h3>
    <p>{{ fullName }}</p>
    <button @click="changeFname">改变姓</button>
    <button @click="changeLname">改变名</button>
  </div>
</template>

<script>
  export default {
    name:"App",
    data(){
      return {
        firstName:"赵",
        lastName:"四",
        // fullName:"赵四"
      }
    },
    methods:{
      changeFname(){
        console.log("changeFname 被调用了")
        this.firstName="张"
      },
      changeLname(){
        console.log("changeLname 被调用了")
        this.lastName="三"
      }
    },
    // watch:{
    //   firstName(val){
    //     console.log("watch firstName 被调用了")
    //     return this.fullName=val+this.lastName;
    //   },
    //   lastName(val){
    //     console.log("watch lastName 被调用了")
    //     return this.fullName=this.firstName+val;
    //   }
    // }
    computed:{
      fullName(){
        console.log("computed fullName被调用了");
        return this.firstName+this.lastName
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>