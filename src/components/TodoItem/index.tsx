import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Todo } from '../../../App';

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
        color="green"
      />
      <Text
        style={[styles.todo, item.completed && styles.completed]}
        numberOfLines={2}
      >
        {item.title}
      </Text>
      <Button title="del" onPress={onPress} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
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
    color: 'green',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  }
});
