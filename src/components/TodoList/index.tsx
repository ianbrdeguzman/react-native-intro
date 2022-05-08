import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Filter, Todo } from '../../redux/features/todoSlice';
import { RootStackParamList, routes } from '../../routes';
import { filterTodos } from '../../utils/filter';
import { AddTodoButton } from '../AddTodoButton';
import { FilterButtons } from '../FilterButtons';
import { SearchBar } from '../SearchBar';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: Filter;
  query: string;
  handleFilterOnPress: (filterItem: Filter) => void;
  handleSearchOnChangeText: (text: string) => void;
  handleSearchOnPress: () => void;
  handleDeleteOnPress: (id: string) => void;
  onValueChange: (item: Todo) => void;
  handleAddTodoOnPress: () => void;
}

export function TodoList({
  todos,
  filter,
  query,
  handleFilterOnPress,
  handleSearchOnChangeText,
  handleSearchOnPress,
  handleDeleteOnPress,
  onValueChange,
  handleAddTodoOnPress
}: TodoListProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem
      item={item}
      handleEditOnPress={(id) =>
        navigation.navigate(routes.edit, {
          todoId: id
        })
      }
      handleDeleteOnPress={() => handleDeleteOnPress(item.id)}
      onValueChange={() => onValueChange(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FilterButtons
        filter={filter}
        handleFilterOnPress={handleFilterOnPress}
      />
      <SearchBar
        value={query}
        onChangeText={handleSearchOnChangeText}
        onPress={handleSearchOnPress}
      />
      {todos.length > 0 ? (
        <FlatList
          data={filterTodos(todos, filter, query)}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.text}>No Todos.</Text>
      )}
      <AddTodoButton handleAddTodoOnPress={handleAddTodoOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    color: 'darkgray'
  }
});
