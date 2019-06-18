import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styles: []
})
export class TodosAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  /**
   * Add a new Task to do
   */
  addTodo(): void {
    if (this.txtInput.invalid) {
      return;
    }

    const action = new fromTodo.AddTodoAction(this.txtInput.value);
    this.store.dispatch(action);

    this.txtInput.setValue('');
  }
}
