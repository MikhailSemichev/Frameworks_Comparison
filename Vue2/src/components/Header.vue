<template>
    <div class='header'>
        {{title}}|
        <router-link to='/'>Page1</router-link>|
        <router-link to='/page2'>Page2</router-link>
    </div>
</template>

<script>
    export default {
        name: 'CHeader',
        data() {
            return {
                title: 'Title'
            }
        }
    };
</script>

<style lang="scss">
    .header {
        padding: 20px;
        background: #FFFFFF;
    }
</style>
