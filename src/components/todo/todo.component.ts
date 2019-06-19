import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completed = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  /**
   * Mark o Desmark the tasks
   */
  toggleAll() {
    this.completed = !this.completed;
    const action = new ToggleAllTodoAction(this.completed);
    this.store.dispatch(action);
  }
}
