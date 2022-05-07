import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { AddTodoButton } from '../components/AddTodoButton';
import { FilterButtons } from '../components/FilterButtons';
import { SearchBar } from '../components/SearchBar';
import { TodoList } from '../components/TodoList';
import { Theme, useAppTheme } from '../context/theme';
import { routes } from '../routes';
import { RootStackParamList } from '../routes';

export default function ListTodos() {
  const { theme } = useAppTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      style={theme === Theme.DARK ? styles.containerDark : styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FilterButtons />
      <SearchBar />
      <TodoList />
      <AddTodoButton onPress={() => navigation.navigate(routes.add, {})} />
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
    backgroundColor: '#000'
  }
});
