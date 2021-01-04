<template>
    <div>
        <h3>Class组件</h3>
        <p v-bind:class="[flag?class1:class2]">测试哈哈哈哈哈</p>
        <hr>
        <p v-bind:class="[{one:flag},class2]">嘻嘻嘻嘻嘻</p>
        <hr>
        <button @click="flag=!flag">改变flag值</button>
        <hr>
        <p v-bind:style="{ color:activeColor, fontSize:fontSize+'px', backgroundColor:bg  }">嘿嘿嘿嘿嘿嘿</p>
        <hr>
        <p v-bind:style="objectStyle1">测试哈哈哈哈</p>
        <hr>
        <p v-bind:style="[objectStyle1,objectStyle2]">测试嘿嘿嘿嘿嘿嘿 </p>
        <hr>
        <my-component v-bind:class="class3"></my-component>
    </div>
</template>

<script>
import Vue from "vue";
    Vue.component("my-component",{
        template:`
            <div>
                <h3>my-component组件</h3>
                <p>测试哈哈哈</p>
            </div>
        `
    })
    export default {
        name:"Class",
        data(){
            return {
                flag:true,
                class1:"one",
                class2:"two",
                class3:"three",
                activeColor:"#f9f",
                fontSize:30,
                bg:"#09f",
                objectStyle1:{
                    color:"#ff0",
                    backgroundColor:"#f00",
                    fontSize:"25px"
                },
                objectStyle2:{
                    padding:"5px",
                    border:"1px solid #09f"
                }
            }
        }
    }
</script>

<style scoped>
    .two{
        background:#09f;
        color:#fff;
    }
    .one{
        border:1px solid #f00;
    }
    .three{
        color:#f0f;
    }
</style>