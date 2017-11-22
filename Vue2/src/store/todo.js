function createFakeData(count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            name: `Todo Item ${i + 1}`,
            checked: Math.random() < 0.3
        });
    }

    return result;
}

export default {
    namespaced: true,
    state() {
        return {
            todoItems: []
        };
    },
    getters: {
        count(state) {
            return state.todoItems.length;
        },
        doneCount(state) {
            return state.todoItems.reduce((count, item) => count + (item.checked ? 1 : 0), 0);
        },
        undoneCount(state) {
            return state.todoItems.reduce((count, item) => count + (item.checked ? 0 : 1), 0);
        },
        newId(state) {
            return state.todoItems.reduce((maxId, item) => maxId === null || maxId < item.id ? item.id : maxId, null) + 1;
        },
        getIndexById: (state) => (id) => {
            for (let index = 0; index < state.todoItems.length; index++) {
                if (state.todoItems[index].id === id) {
                    return index;
                }
            }

            return null;
        },
        getItemById: (state, getters) => (id) => {
            const index = getters.getIndexById(id);
            return index === null ? null : state.todoItems[index];
        }
    },
    mutations: {
        setTodoItems(state, todoItems) {
            state.todoItems = todoItems;
        }
    },
    actions: {
        load(store) {
            store.commit('setTodoItems', createFakeData(5000));
        },
        addNew(store, item) {
            const todos = store.state.todoItems.concat([
                { ...item, id: store.getters.newId }
            ]);
            store.commit('setTodoItems', todos);
        },
        remove(store, item) {
            const index = store.getters.getIndexById(item.id)
            if (index === null) { return; }

            const todos = store.state.todoItems.slice();
            todos.splice(index, 1);
            store.commit('setTodoItems', todos);
        },
        update(store, item) {
            const index = store.getters.getIndexById(item.id)
            if (index === null) { return; }

            const todos = store.state.todoItems.slice();
            todos.splice(index, 1, { ...store.state.todoItems[index], ...item });
            store.commit('setTodoItems', todos);
        }
    }
};