<template>
    <div class="todo-item">
        <input type='text' :value="name" />
        <input type='checkbox' :checked="checked" @change="toggleItem" />
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'LTodoItem',
        props: {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            checked: { type: Boolean, required: true }
        },
        methods: {
            toggleItem() {
                this.updateItem({ id: this.id, checked: !this.checked });
            },

            ...mapActions('todo', { updateItem: 'update' })
        }
    };
</script>