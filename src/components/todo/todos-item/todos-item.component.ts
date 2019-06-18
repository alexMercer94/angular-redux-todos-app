import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

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

  constructor() {}

  ngOnInit() {
    console.log(this.todo);

    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
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
  }
}
