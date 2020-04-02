<template>
    <div>
        <van-button type='primary' @click="getData">获取数据</van-button>
        <van-button type='danger' @click="clearData">清空数据</van-button>
        <ul>
            <li v-for="(item,index) in list" :key='index'>
                {{item.id}}
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
       methods:{
           ajax(){
               //ajax原理
               let url='http://yapi.demo.qunar.com/mock/75419/wujy_test/test'
               //1.创建XMLHttpRequest对象
               let xmlhttp;
               if(window.XMLHttpRequest){
                   xmlhttp=new XMLHttpRequest();
               }else{
                   xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
               }
               //2.发送请求
               xmlhttp.open('GET',url,true);
               xmlhttp.send();
               //3.服务器端相应
               xmlhttp.addEventListener('readystatechange',()=>{
                   if(xmlhttp.readyState==4&&xmlhttp.status==200){
                       let obj=JSON.parse(xmlhttp.responseText);
                       console.log(obj);
                       this.list=obj.list;
                   }
               })
           },
           getData(){
               this.ajax();
           },
           clearData(){
               this.list=[];
           }
       }, 
    }
</script>

<style lang="scss" scoped>

</style>