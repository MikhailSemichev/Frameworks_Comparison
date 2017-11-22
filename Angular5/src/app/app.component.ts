import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 5';
  items;

  ngOnInit() {
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
}
