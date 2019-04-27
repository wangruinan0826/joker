<template>
    <div>
        <h1>C页面</h1>
        {{$route.params.id}}
        -------
        <!-- {{$store.state.count}} -->
        {{count}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState(['count'])
        },
    }
</script>

<style lang="scss" scoped>

</style>