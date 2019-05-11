<template>
    <div class="footer">
        <ul class="footer-list" :style='{background:selectMenu.bg}'>
            <li v-for="(item,index) in menu" :key='index' v-on:click="$emit('change',index)">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['menu','selectMenu']
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        /* background-color: #ff0036; */
        color: #fff;
    }
    .footer-list{ 
        display: flex;
    }
    .footer-list li{
        flex:1;
        text-align: center;
    }
    .footer li a{
        color: #000;
        outline: none;
    }
    .footer li a.router-link-active{
        color:#fff;
    }
</style>