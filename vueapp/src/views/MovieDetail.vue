<template>
    <div v-if="isShow">
        {{$route.params.id}}
        {{movie.title}}
        <img :src="movie.images.medium"/>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                movie:{

                },
                isShow:false
            }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
            .then((result)=>{
                this.movie=result.data;
                this.isShow=true;
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>