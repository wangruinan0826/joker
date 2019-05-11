<template>
  <div id="app">
      <common-header :selectMenu='selectMenu'></common-header>
      <div class="content">
        <router-view></router-view>
      </div>
      <common-footer :menu='menu' :selectMenu='selectMenu' v-on:change='fn'></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  export default{
      data(){
        return{
          menu:[
            {
              name:'电影',
              path:'/movie',
              bg:'#ff3366'
            },
            {
              name:'音乐',
              path:'/music',
              bg:'#ffcc33'
            },
            {
              name:'书籍',
              path:'/book',
              bg:'#6666ff'
            },
            {
              name:'图片',
              path:'/photo',
              bg:'#33cc33'
            },
          ],
          selectMenu:{
              name:'电影',
              path:'/movie',
              bg:'#ff3366'
          }
        }
      },
      components:{
        CommonHeader,CommonFooter
      },
      methods:{
        fn(index){
            this.selectMenu=this.menu[index];
        }
      },
      created(){
        this.menu.forEach((item,index)=>{
          if(item.path==this.$route.path){
            this.selectMenu=item;
          }
        })
      }
  }
</script>

<style scoped>
    .content{
      margin: 1rem 0;
    }
</style>