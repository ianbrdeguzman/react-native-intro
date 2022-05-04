import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../redux/features/todoSlice';
import Checkbox from 'expo-checkbox';

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
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.button}> X </Text>
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
    padding: 16
  },
  todo: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16
  },
  completed: {
    color: 'gray',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  },
  buttonContainer: {
    borderRadius: 50,
    padding: 4,
    backgroundColor: 'salmon'
  },
  button: {
    color: 'white'
  }
});
