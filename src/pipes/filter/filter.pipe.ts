import { Pipe, PipeTransform } from '@angular/core';
import * as fromFiltro from '../../components/filter/filter.actions';
import { Todo } from '../../models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: fromFiltro.validFilters): Todo[] {
    switch (filter) {
      case 'completados':
        return todos.filter(todo => todo.completed);

      case 'pendientes':
        return todos.filter(todo => !todo.completed);

      default:
        return todos;
    }
  }
}
