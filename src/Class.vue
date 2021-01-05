<template>
    <div>
        <h3>Class组件</h3>
        <p>{{ message }}</p>
        <p>{{ reverseMsg }}</p>
        <p>{{ reverseMsg2() }}</p>
        <p>{{ a }}</p>
        <button @click="changeMsg">改变message值</button>
    </div>
</template>

<script>
    export default {
        name:"Class",
        data(){
            return {
                message:"我是帅哥",
                a:200
            }
        },
        mounted(){
            this.a=300
        },
        methods:{
            reverseMsg2(){
                console.log("函数 reverseMsg2被调用了")
                return this.message.split("").reverse().join("");
            },
            changeMsg(){
                if(this.message=="我是帅哥"){
                    this.message="新年快乐"
                }else{
                    this.message="我是帅哥"
                }
            }
        },
        computed:{
            reverseMsg(){
                console.log("计算属性 reverseMsg被调用了")
                return this.message.split("").reverse().join("");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>