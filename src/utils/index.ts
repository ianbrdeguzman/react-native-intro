import { Filter, Todo } from '../redux/features/todoSlice';

export function filterTodos(todos: Todo[], filter: Filter) {
  switch (filter) {
    case Filter.ALL:
      return todos;
    case Filter.COMPLETED:
      return todos.filter((todo) => todo.completed === true);
    case Filter.ACTIVE:
      return todos.filter((todo) => todo.completed === false);
  }
}
