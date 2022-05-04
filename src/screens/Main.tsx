import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text
} from 'react-native';
import { Form } from '../components/Form';
import { TodoItem } from '../components/TodoItem';
import {
  addTodo,
  changeInput,
  completeTodo,
  deleteTodo,
  Todo
} from '../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function Main() {
  const dispatch = useAppDispatch();
  const { todos, text } = useAppSelector((state) => state.todo);

  const handleAddTodo = () => {
    if (!text) return;
    dispatch(addTodo(text));
    Keyboard.dismiss();
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem
      item={item}
      onPress={() => dispatch(deleteTodo(item.id))}
      onValueChange={() => dispatch(completeTodo(item.id))}
    />
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={renderItem}
          style={styles.todoList}
        />
      ) : (
        <Text style={styles.text}>No Todos.</Text>
      )}
      <Form
        text={text}
        onChangeText={(text) => dispatch(changeInput(text))}
        onPress={handleAddTodo}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
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
