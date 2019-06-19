import { ActionReducerMap } from '@ngrx/store';
import * as fromFilterActions from '../components/filter/filter.actions';
import * as fromFilter from '../components/filter/filter.reducer';
import * as fromTodo from '../components/todo/todo.reducer';
import { Todo } from '../models/todo.model';

export interface AppState {
  todos: Todo[];
  filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
