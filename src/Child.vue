<template>
    <div>
        <h3>Child组件</h3>
        <p>{{ fullName }}</p>
        <button @click="changeFname">改变姓名</button>
    </div>
</template>

<script>
    export default {
        name:"Child",
        data(){
            return {
                firstName:"赵",
                lastName:"四",
            }
        },
        methods:{
            changeFname(){
                console.log("changeFname 被调用了");
                this.fullName="张三";
            }
        },
        computed:{
            fullName:{
                get(){
                    console.log("computed get方法被调用了");
                    return this.firstName+this.lastName;
                },
                set(val){
                    console.log("computed post方法被调用了");
                    let newName=val.split("");
                    this.firstName=newName[0];
                    this.lastName=newName[1];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>