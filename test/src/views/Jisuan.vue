<template>
    <div>
        计算练习
        {{shuzhi}}
        <button v-on:click="jia(5)">+++++++</button>
        <button v-on:click="fnn(2)">-------</button>
    </div>
</template>

<script> 
    import {mapState,mapMutations} from 'vuex'
    export default {
        computed: mapState(['shuzhi']),
        methods: {
            // fn(num){
            //     this.$store.commit('jia',num)
            // },
            fnn(num){
                this.$store.commit('jian',num)
            },
            ...mapMutations(['jia'])
        },
    }
</script>

<style lang="scss" scoped>

</style>