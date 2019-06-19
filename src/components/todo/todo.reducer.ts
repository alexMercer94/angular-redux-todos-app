import { Todo } from '../../models/todo.model';
import * as fromTodo from './todo.actions';

const t1 = new Todo('Aprender React');
const t2 = new Todo('Aprender Angular');
const t3 = new Todo('Aprender Ruby');
t2.completed = true;

const initalState: Todo[] = [t1, t2, t3];

export function todoReducer(state = initalState, action: fromTodo.Accions): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            text: action.text
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.DELETE_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completed: action.completed
        };
      });

    default:
      return state;
  }
}
