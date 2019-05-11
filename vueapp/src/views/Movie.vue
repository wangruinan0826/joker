<template>
    <div class="movie-container">
        <ul>
            <li v-for='(item,index) in movieList' :key='index' class="movie-list">
                <img class="movie-img" :src="item.images.medium" alt="">
                <div class="movie-text">
                    <h4>{{item.title}}</h4>
                    <p>
                        主演:
                        <span v-for="(cast,index) in item.casts" :key='index'>
                            {{cast.name}}
                        </span>
                    </p>
                    <p>
                        年份:
                        <span>
                            {{item.year}}
                        </span>
                    </p>
                    <p>
                        导演:
                        <span v-for="(director,index) in item.directors" :key='index'>
                            {{director.name}}
                        </span>
                    </p>
                    <p>
                        类型:
                        <span v-for="(obj,index) in item.genres" :key='index'>
                            {{obj}}
                        </span>
                    </p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="@/assets/imgs/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                movieList:[],
                isShow:true,
                isBottom:false
            }
        },
        created(){
            this.getMovie();
            window.onscroll=()=>{
                let scrollTop=document.documentElement.scrollTop;
                let clientHeight=document.documentElement.clientHeight;
                let height=document.documentElement.scrollHeight;
                console.log(scrollTop,clientHeight,height)
                if(scrollTop+clientHeight==height&&!this.isBottom){
                    this.getMovie();
                }
            }
        },
        methods:{
            getMovie(){
                this.isShow=true;
                axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
                // axios.get('/data/movie0.json')
                .then((result)=>{
                    console.log(result);
                    this.isShow=false;
                    this.movieList=[...this.movieList,...result.data.subjects];
                    if(this.movieList.length==result.data.total){
                        this.isBottom=true;
                    }
                    console.log(this.movieList);
                })
            }
        },
    }
</script>

<style scoped>
    .movie-list{
        display: flex;
        border-bottom: 1px solid #cccccc;
        padding: 0.2rem 0;
    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right: 0.2rem;
    }
    .movie-text{
        flex:1
    }
    .movie-container{
        /* padding: 0 0.2rem; */
    }
    .loading{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.5);
    }
</style>