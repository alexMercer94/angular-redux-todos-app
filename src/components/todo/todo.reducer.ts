import { Todo } from '../../models/todo.model';
import * as fromTodo from './todo.actions';

const t1 = new Todo('Aprender React');
const t2 = new Todo('Aprender Angular');

const initalState: Todo[] = [t1, t2];

export function todoReducer(state = initalState, action: fromTodo.Accions): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    default:
      return state;
  }
}
