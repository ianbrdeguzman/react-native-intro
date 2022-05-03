import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard
} from 'react-native';
import { Form } from './src/components/Form';
import { TodoItem } from './src/components/TodoItem';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, title: 'One', completed: false },
    { id: 1, title: 'Two', completed: false },
    { id: 2, title: 'Three', completed: false }
  ]);
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (!text) return;
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: text,
        completed: false
      }
    ]);
    setText('');
    Keyboard.dismiss();
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleCompleteTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem
      item={item}
      onPress={() => handleDeleteTodo(item.id)}
      onValueChange={() => handleCompleteTodo(item.id)}
    />
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <FlatList data={todos} renderItem={renderItem} style={styles.todoList} />
      <Form text={text} onChangeText={setText} onPress={handleAddTodo} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  todoList: {
    marginBottom: 124
  }
});
