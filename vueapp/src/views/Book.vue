<template>
    <div>
        <!-- <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe> -->
        <slide :imgs='imgs'></slide>
    </div>
</template>

<script>
    import Slide from '@/components/Slide.vue'
    // import {Swipe,SwipeItem} from 'vue-swipe'
    // require('vue-swipe/dist/vue-swipe.css');
    //用import引用也可以。
    export default {
        data(){
            return{
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ]
            }
        },
        components:{
            // Swipe,SwipeItem
            Slide
        }
    }
</script>

<style scoped>
    /* .my-swipe{
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1{
        background-color:#ff2d4b;
        color: #fff;
    }
    .slide2{
        background-color:#ffd705;
        color: #000;
    }
    .slide3{
        background-color:#0089dc;
        color: #fff;
    } */
</style>