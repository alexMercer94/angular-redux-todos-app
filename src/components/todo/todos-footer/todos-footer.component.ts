import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/interfaces/app.reducers';
import { Todo } from '../../../models/todo.model';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {
  filtrosValidos: fromFilter.validFilters[] = ['todos', 'completados', 'pendientes'];
  actualFilter: fromFilter.validFilters;
  pendants: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.countPendants(state.todos);
      this.actualFilter = state.filter;
    });
  }

  /**
   * Change filter of the task to shown in the interface
   * @param newFilter Filter to change or apply
   */
  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  /**
   * Review this function
   */
  /* deleteAll() {
    const action = new DELETE_ALL_TODO();
    this.store.dispatch(action);
  } */

  /**
   * Count Pending tasks
   */
  countPendants(todos: Todo[]) {
    this.pendants = todos.filter(todo => !todo.completed).length;
  }
}
