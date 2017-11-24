function createFakeData(count) {
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
            let count = 0;
            for (const item of state.todoItems) {
                if (item.checked) { count += 1; }
            }
            return count;
        },
        undoneCount(state) {
            let count = 0;
            for (const item of state.todoItems) {
                if (!item.checked) { count += 1; }
            }
            return count;
        },
        newId(state) {
            let maxId = null;
            for (const item of state.todoItems) {
                if (maxId < item.id || maxId === null) { maxId += item.id; }
            }
            return maxId + 1;
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
        },
        addNew(state, { item }) {
            state.todoItems.push(item);
        },
        remove(state, { index }) {
            state.todoItems.splice(index, 1);
        },
        update(state, { index, item }) {
            state.todoItems.splice(index, 1, { ...state.todoItems[index], ...item });
        }
    },
    actions: {
        load(store) {
            store.commit('setTodoItems', createFakeData(5000));
        },
        addNew(store, item) {
            item = { ...item, id: store.getters.newId };
            store.commit('addNew', { item });
        },
        remove(store, item) {
            const index = store.getters.getIndexById(item.id)
            if (index === null) { return; }

            store.commit('remove', { index });
        },
        update(store, item) {
            const index = store.getters.getIndexById(item.id)
            if (index === null) { return; }

            item = { ...store.state.todoItems[index], ...item };
            store.commit('update', { index, item });
        }
    }
};