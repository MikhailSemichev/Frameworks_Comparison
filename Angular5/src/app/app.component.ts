import { Component, OnInit } from '@angular/core';
import { ToDoModel } from './entities/to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular 5';
  public items: ToDoModel[];

  constructor() {
    this.items = [];
  }

  public ngOnInit() {
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
    this.items = fakeData(5000);
  }

  public processToDo(todo: ToDoModel) {
    alert(`toDo '${todo.name}' changed to: ${todo.isDone ? 'done' : 'planned'}`);
  }
}
