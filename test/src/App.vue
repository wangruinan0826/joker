<template>
  <div>
    <div id="app">
      <router-link to='/a'>a页面</router-link>
      <!-- <router-link to='/b'>b页面</router-link> -->
      <router-link :to="{name:'b',params:{name:'zs',id:123}}">b页面</router-link>
      <router-link to="/c/666">c页面</router-link>
      <router-link to="/d/777">d页面重定向到c页面</router-link>
      <router-link to="/zxy">alias别名</router-link>
    </div>
    <transition name='fade'>
      <router-view/>
    </transition>
    <button v-on:click='goprev()'>&lt;</button>
    <button v-on:click='gonext()'>&gt;</button>
    <button v-on:click='gohome()'>home</button>
  </div>
</template>

<script>
export default {
    methods:{
        goprev(){
          this.$router.go(-1);
        },
        gonext(){
          this.$router.go(1);
        },
        gohome(){
          this.$router.push('/');
        }
    }
}
</script>

<style>
    .fade-enter{
      /* opacity:0 */
      transform:translateX(-100%)
    }
    .fade-enter-to{
      /* opacity:1 */
      transform:translateX(0)
    }
    .fade-enter-active{
      transition:transform 1s ease
    }
    .fade-leave{
      /* opacity:1 */
      transform:translateX(0)
    }
    .fade-leave-to{
      /* opacity:0 */
      transform:translateX(100%)
    }
    .fade-leave-active{
      transition:transform 1s ease
    }
</style>
