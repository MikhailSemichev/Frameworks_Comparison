<template>
    <div class="todo-item">
        <input type='text' :value="name" />
        <input type='checkbox' :checked="checked" @change="toggle" />
    </div>
</template>

<script>
    export default {
        name: 'LTodoItem',
        props: {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            checked: { type: Boolean, required: true },
            description: { type: String }
        },
        methods: {
            toggle() {
                this.$emit('toggle', this.id);
            }
        }
    };
</script>