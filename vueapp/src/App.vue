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
              bg:'#f00'
            },
            {
              name:'音乐',
              path:'/music',
              bg:'#ff0'
            },
            {
              name:'书籍',
              path:'/book',
              bg:'#00f'
            },
            {
              name:'图片',
              path:'/photo',
              bg:'#0f0'
            },
          ],
          selectMenu:{
              name:'电影',
              path:'/movie',
              bg:'#f00'
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
        // this.menu.forEach((item,index)=>{
        //   if(item.path==this.$route.path){
        //     this.selectMenu=item;
        //   }
        // })
        let obj=this.menu.filter((item,index)=>{
            return item.path==this.$route.path;
        })
        selectMenu=obj;
      }
  }
</script>

<style scoped>
    .content{
      margin: 1rem 0;
    }
</style>