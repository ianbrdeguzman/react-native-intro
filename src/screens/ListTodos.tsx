import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TodoList } from '../components/TodoList';
import { Theme, useAppTheme } from '../context/theme';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { routes } from '../routes';
import { RootStackParamList } from '../routes';
import { Alert, Keyboard, StyleSheet, View } from 'react-native';
import {
  changeFilter,
  changeQuery,
  completeTodo,
  deleteTodo,
  Filter
} from '../redux/features/todoSlice';

export default function ListTodos() {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const { todos, filter, query } = useAppSelector((state) => state.todo);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFilterOnPress = (filterItem: Filter) => {
    dispatch(changeFilter(filterItem));
  };

  const handleSearchOnChangeText = (text: string) => {
    dispatch(changeQuery(text));
  };

  const handleSearchOnPress = () => {
    dispatch(changeQuery(query));
    Keyboard.dismiss();
  };

  const handleDeleteOnPress = (id: string) => {
    Alert.alert(
      'Do you want to delete this Todo?',
      `Delete "${todos.find((todo) => todo.id === id)?.title}"`,
      [
        { text: 'Cancel', onPress: () => null },
        { text: 'Delete', onPress: () => dispatch(deleteTodo(id)) }
      ]
    );
  };

  const handleAddTodoOnPress = () => {
    navigation.navigate(routes.add, {});
  };

  return (
    <View style={styles(theme).container}>
      <TodoList
        todos={todos}
        filter={filter}
        query={query}
        handleFilterOnPress={handleFilterOnPress}
        handleSearchOnChangeText={handleSearchOnChangeText}
        handleSearchOnPress={handleSearchOnPress}
        handleDeleteOnPress={(id) => handleDeleteOnPress(id)}
        onValueChange={(item) => dispatch(completeTodo(item.id))}
        handleAddTodoOnPress={handleAddTodoOnPress}
      />
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme === Theme.DARK ? '#000' : '#f5f6f7'
    }
  });
