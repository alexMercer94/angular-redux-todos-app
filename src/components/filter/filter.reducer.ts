import * as fromFiltro from './filter.actions';

const initialState: fromFiltro.validFilters = 'todos';

export function filterReducer(state = initialState, action: fromFiltro.actions): fromFiltro.validFilters {
  switch (action.type) {
    case fromFiltro.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
