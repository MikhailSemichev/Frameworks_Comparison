<template>
    <div class="app">
        <CHeader />
        <router-view />

        <div class="todo-list">
            <div class="todo-item" :key="item.id" v-for="item of todoItems">
                <input type='text' :value="item.name" />
                <input type='checkbox' :checked="item.checked" />
            </div>
        </div>
    </div>
</template>

<script>
    import CHeader from '@/components/Header.vue';

    export default {
        name: 'app',
        data() {
            return {
                todoItems: []
            };
        },
        methods: {
            createFakeData(count) {
                const result = [];

                for (let i = 0; i < count; i++) {
                    result.push({
                        id: i + 1,
                        name: `Todo Item ${i + 1}`,
                        checked: i % 3 === 0
                    });
                }

                return result;
            }
        },
        mounted() {
            this.todoItems = this.createFakeData(5000);
        },
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
