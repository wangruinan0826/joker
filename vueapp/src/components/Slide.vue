<template>
    <div>
        <transition-group name="fade" tag='ul' class="slide-box">
            <li class="slide-item" v-for="(img,index) in imgs" :key='index' v-show="index==idx">
                <img :src="img" alt="">
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props:['imgs'],
        data(){
            return{
                idx:0
            }
        },
        created(){
            setInterval(()=>{
                this.idx++;
                if(this.idx==this.imgs.length){
                    this.idx=0;
                }
            },2000)
        },
    }
</script>

<style scoped>
    .slide-box{
        position: relative;
        overflow: hidden;
        height: 4rem;
    }
    .slide-item{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 4rem;
    }
    .slide-item:first-child{
        display: block;
    }
    .slide-item img{
        width: 100%;
        height: 100%;
    }

    /* 过渡动画 */
    .fade-enter{
        transform: translateX(100%)
    }
    .fade-enter-to{
        transform: translateX(0)
    }
    .fade-enter-active{
        transition: transform 1s;
    }
    .fade-leave{
        transform: translateX(0)
    }
    .fade-leave-to{
        transform: translateX(-100%)
    }
    .fade-leave-active{
        transition:transform 1s;
    }
</style>