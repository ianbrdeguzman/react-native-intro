import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { FilterGroup } from '../components/Filter';
import { Form } from '../components/Form';
import { Search } from '../components/Search';
import { TodoList } from '../components/TodoList';
import { Theme, useAppTheme } from '../context/theme';

export default function ListTodos() {
  const { theme } = useAppTheme();

  return (
    <KeyboardAvoidingView
      style={theme === Theme.DARK ? styles.containerDark : styles.container}
      behavior="height"
    >
      <FilterGroup />
      <Search />
      <TodoList />
      <Form />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f6f7'
  },
  containerDark: {
    flex: 1,
    padding: 16,
    backgroundColor: '#18191a'
  }
});
