<template>
    <div class="app">
        <CHeader />
        <router-view />
        <CTodo />
    </div>
</template>

<script>
    import CHeader from '@/components/Header.vue';
    import CTodo from '@/components/Todo/index.vue';

    export default {
        name: 'app',
        components: {
            CHeader,
            CTodo
        }
    };
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
</style>
