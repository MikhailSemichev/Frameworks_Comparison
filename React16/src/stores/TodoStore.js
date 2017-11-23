import { observable } from 'mobx';

class TodoStore {
    @observable items = fakeData(5000);
}

export default new TodoStore();

function fakeData(count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            name: `Todo Item ${i + 1}`,
            isDone: i % 3 === 0
        });
    }

    return result;
}
