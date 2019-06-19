import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/interfaces/app.reducers';
import { Todo } from 'src/models/todo.model';
import { DeleteTodoAction, EditTodoAction, ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputEdit') txtInputEdit: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;

  editing: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  /**
   * Edit a task
   */
  editTodo() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    }, 1);
  }

  /**
   * When the input's focus is lost
   */
  finishEditing() {
    this.editing = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  /**
   * Delete a task
   */
  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
