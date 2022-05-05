import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../redux/features/todoSlice';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

interface TodoItemProps {
  item: Todo;
  onPress: () => void;
  onValueChange: () => void;
}

export function TodoItem({ onPress, item, onValueChange }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        value={item.completed}
        onValueChange={onValueChange}
        color="salmon"
      />
      <Text
        style={[styles.todo, item.completed && styles.completed]}
        numberOfLines={2}
      >
        {item.title}
      </Text>
      <Pressable onPress={onPress}>
        <Icon name="delete" size={16} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 4
  },
  todo: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: 'black'
  },
  completed: {
    color: 'gray',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  }
});
