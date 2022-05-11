import { Filter, Todo } from '../redux/features/todoSlice';

export function queryTodos(todos: Todo[], query: string) {
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterTodos(
  todos: Todo[],
  filter: Filter,
  query?: string
): Todo[] {
  switch (filter) {
    case Filter.ALL: {
      return query ? queryTodos(todos, query) : todos;
    }
    case Filter.COMPLETED: {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      return query ? queryTodos(completedTodos, query) : completedTodos;
    }
    case Filter.ACTIVE: {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      return query ? queryTodos(activeTodos, query) : activeTodos;
    }
    default: {
      return todos;
    }
  }
}
