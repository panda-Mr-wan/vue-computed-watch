<template>
    <div>
        <h3>Child组件</h3>
        <p>{{msg}}</p>
        <p>父组件传递过来的数据:{{message}}</p>
    </div>
</template>

<script>
export default {
    name:"Child",
    props:['message'],
    data(){
        return {
            msg:"我是Child"
        }
    }
}
</script>

<style scoped>

</style>