import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../redux/features/todoSlice';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme, useAppTheme } from '../../context/theme';

interface TodoItemProps {
  item: Todo;
  onPress: () => void;
  onValueChange: () => void;
}

export function TodoItem({ onPress, item, onValueChange }: TodoItemProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={theme === Theme.DARK ? styles.containerDark : styles.container}
    >
      <Checkbox
        value={item.completed}
        onValueChange={onValueChange}
        color={theme === Theme.DARK ? '#03dac6' : 'rebeccapurple'}
      />
      <Text
        style={[
          theme === Theme.DARK ? styles.textDark : styles.text,
          item.completed && styles.completed
        ]}
        numberOfLines={2}
      >
        {item.title}
      </Text>
      <Pressable onPress={onPress}>
        <Icon
          name="delete"
          size={16}
          color={theme === Theme.DARK ? '#f5f6f7' : '#18191a'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 8,
    padding: 16,
    borderRadius: 4
  },
  containerDark: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#272727',
    marginBottom: 8,
    padding: 16,
    borderRadius: 4
  },
  text: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#18191a'
  },
  textDark: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#f5f6f7'
  },
  completed: {
    color: 'gray',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  }
});
