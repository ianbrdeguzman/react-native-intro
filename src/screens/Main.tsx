import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { FilterGroup } from '../components/Filter';
import { Form } from '../components/Form';
import { Search } from '../components/Search';
import { TodoList } from '../components/TodoList';

export default function Main() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
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
    marginTop: 24
  }
});
