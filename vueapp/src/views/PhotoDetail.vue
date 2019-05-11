<template>
    <div>
        <!-- <img :src="url" alt="">
        {{$route.params.index}} -->
        <router-link to="/photo">
            <v-touch class="img-box" :style="{backgroundImage:'url('+url+')'}" v-on:swipeleft='next()' v-on:swiperight='last()'>
            </v-touch>
        </router-link>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch' 
    Vue.use(VueTouch,{name:'v-touch'})
    export default {
        data(){
            return{
                idx:this.$route.params.index
            }
        },
        computed:{
            url(){
                return this.$store.state.photoData[this.idx].src
            }
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx==this.$store.state.photoData.length){
                    this.idx=0;
                }
            },
            last(){
                this.idx--;
                if(this.idx==-1){
                    this.idx=this.$store.state.photoData.length-1;
                }
            }
        }
    }
</script>

<style scoped>
    .img-box{
        position: absolute;
        left: 0;
        top: 1rem;
        bottom: 1rem;
        right: 0;
        background: #b3ee3a 0 center no-repeat;
        background-size: contain;
    }
</style>