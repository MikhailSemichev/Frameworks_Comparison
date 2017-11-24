<template>
    <div class="app">
        <CHeader />
        <router-view />
    </div>
</template>

<script>
    import CHeader from '@/components/Header.vue';

    export default {
        name: 'app',
        components: {
            CHeader
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
