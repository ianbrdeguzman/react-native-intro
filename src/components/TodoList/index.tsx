import { Alert, FlatList, StyleSheet, Text } from 'react-native';
import { completeTodo, deleteTodo, Todo } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterTodos } from '../../utils';
import { TodoItem } from '../TodoItem';

export function TodoList() {
  const dispatch = useAppDispatch();
  const { todos, text, filter, query } = useAppSelector((state) => state.todo);

  const handleDeleteTodo = (id: number) => {
    Alert.alert(
      'Do you want to delete this Todo?',
      `Delete "${todos[id].title}"`,
      [
        { text: 'Cancel', onPress: () => null },
        { text: 'Delete', onPress: () => dispatch(deleteTodo(id)) }
      ]
    );
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem
      item={item}
      onPress={() => handleDeleteTodo(item.id)}
      onValueChange={() => dispatch(completeTodo(item.id))}
    />
  );

  return todos.length > 0 ? (
    <FlatList
      data={filterTodos(todos, filter, query)}
      renderItem={renderItem}
      style={styles.todoList}
    />
  ) : (
    <Text style={styles.text}>No Todos.</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    color: 'darkgray'
  },
  todoList: {
    marginBottom: 124
  }
});
