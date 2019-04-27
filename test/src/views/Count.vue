<template>
    <div>
        count
        <!-- {{$store.state.count}} -->
        {{count}}
        {{msg}}
        <!-- <button v-on:click='fn(5)'>+++</button>
        <button v-on:click="$store.commit('reduce',2)">+++</button> -->
        <button v-on:click='add(5)'>+++</button>
        <button v-on:click='reduce(2)'>---</button>
        <button v-on:click='add(7)'>xxx</button>
        -------
        {{xxx}}
        -------
        <button v-on:click='addAction(3)'>异步</button>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        // computed: {
        //     count(){
        //         return this.$store.state.count
        //     }
        // },
        computed:{...mapState(['count','msg']),...mapGetters(['xxx'])},
        // methods:{
        //     show(){
        //         console.log(this.$store.state.count)
        //     }
        // }
        methods:{
            // fn(num){
            //     this.$store.commit('add',num)
            // },
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction'])
        }
    }
</script>

<style lang="scss" scoped>

</style>