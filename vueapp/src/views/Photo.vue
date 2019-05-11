<template>
    <div>
        <img v-for="(item,index) in $store.state.photoData" :key='index' :src="item.src" alt="" v-on:click='goDetail(index)'>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                // photoData:[]
            }
        },
        created(){
            axios.get('/data/photodata.json')
            .then((result)=>{
                // this.photoData=result.data.photoData;
                this.$store.commit('addPhoto',result.data.photoData);
            })
        },
        methods:{
            goDetail(index){
                this.$router.push('/photodetail/'+index);
            }
        }
    }
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>