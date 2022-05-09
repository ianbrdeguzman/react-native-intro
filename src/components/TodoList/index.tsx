import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../redux/features/todoSlice';
import { RootStackParamList, routes } from '../../routes';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  handleDeleteOnPress: (item: Todo) => void;
  handleCheckboxOnChange: (item: Todo) => void;
}

export function TodoList({
  todos,
  handleDeleteOnPress,
  handleCheckboxOnChange
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
      handleDeleteOnPress={() => handleDeleteOnPress(item)}
      handleCheckboxOnChange={() => handleCheckboxOnChange(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.text}>No Todos.</Text>}
      />
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
