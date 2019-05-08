<template>
    <div>
        <img v-for="(item,index) in musicList" :key='index' :src="item.bg" alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList=result.data.albums;
                console.log(result.data.albums);
            })
        },
    }
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>