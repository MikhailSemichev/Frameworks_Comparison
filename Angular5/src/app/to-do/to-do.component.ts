/**
 * Created by Vadim_Khashev on 11/23/2017.
 */

import { Component,
          Input,
          Output,
          EventEmitter,
          HostListener,
          ChangeDetectionStrategy } from '@angular/core';
import { ToDoModel } from '../entities/to-do.model';
/*
 * to-do Component
 */
@Component({
  selector: 'app-to-do',
  styles: ['./to-do.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './to-do.component.html'
})

export class ToDoComponent {
  @Input() public model: ToDoModel;
  @Output() public stateChanged: EventEmitter<ToDoModel>;

  constructor() {
    this.stateChanged = new EventEmitter<ToDoModel>();
  }

  public changeState() {
    this.model.isDone = !this.model.isDone;
    this.stateChanged.emit(this.model);
  }

  public updateModel(e) {
    this.model.name = e.target.value;
    this.stateChanged.emit(this.model);
  }
}


