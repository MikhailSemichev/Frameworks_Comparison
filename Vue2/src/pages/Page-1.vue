<template>
    <div class='page1'>
        <h1>Page1</h1>

        <CTodo />
    </div>
</template>

<script>
    import CTodo from '@/components/Todo/index.vue';

    export default {
        name: 'Page1',
        components: {
            CTodo
        }
    }
</script>


<style lang="scss">
    .page1 {
        background: #FFFFDD;
    }
</style>
