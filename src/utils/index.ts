import { Filter, Todo } from '../redux/features/todoSlice';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

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
    case Filter.ALL:
      return query ? queryTodos(todos, query) : todos;
    case Filter.COMPLETED:
      const completedTodos = todos.filter((todo) => todo.completed === true);
      return query ? queryTodos(completedTodos, query) : completedTodos;
    case Filter.ACTIVE:
      const activeTodos = todos.filter((todo) => todo.completed === false);
      return query ? queryTodos(activeTodos, query) : activeTodos;
  }
}

export async function initializeSplashScreen() {
  try {
    await SplashScreen.preventAutoHideAsync();
    await Font.loadAsync({
      'Inter-Black': require('../../assets/fonts/Inter-Black.otf')
    });

    // simulate loading assets
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  } catch (error) {
    console.warn(error);
  } finally {
    return true;
  }
}
