<template>
    <div class="todo-list">
        <template>
            <LTodoItem
                :key="item.id"
                :id="item.id"
                :name="item.name"
                :checked="item.checked"
                v-for="item of todoItems"
            />
        </template>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import LTodoItem from './Item.vue';

    export default {
        name: 'CTodoList',
        computed: {
            ...mapState('todo', ['todoItems']),
            ...mapGetters('todo', ['getItemById'])
        },
        methods: {
            toggleItem(id) {
                const item = this.getItemById(id);
                if (item === null) { return; }

                this.updateItem({ id, checked: !item.checked });
            },

            ...mapActions('todo', { loadTodos: 'load', updateItem: 'update' })
        },
        components: {
            LTodoItem
        },
        mounted() {
            this.loadTodos();
        }
    };
</script>