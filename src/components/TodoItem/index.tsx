import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Todo } from '../../redux/features/todoSlice';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme, useAppTheme } from '../../context/theme';

interface TodoItemProps {
  item: Todo;
  handleDeleteOnPress: () => void;
  handleEditOnPress: (id: string) => void;
  onValueChange: () => void;
}

export function TodoItem({
  handleDeleteOnPress,
  handleEditOnPress,
  item,
  onValueChange
}: TodoItemProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <Checkbox
        value={item.completed}
        onValueChange={onValueChange}
        color={theme === Theme.DARK ? '#03dac6' : 'rebeccapurple'}
      />
      <Text
        style={[styles(theme).text, item.completed && styles(theme).completed]}
        numberOfLines={2}
      >
        {item.title}
      </Text>
      <View style={styles(theme).buttonsContainer}>
        <Pressable onPress={() => handleEditOnPress(item.id)}>
          <Icon
            name="edit"
            size={16}
            color={theme === Theme.DARK ? '#f5f6f7' : '#18191a'}
            style={styles(theme).button}
          />
        </Pressable>
        <Pressable onPress={handleDeleteOnPress}>
          <Icon
            name="delete"
            size={16}
            color={theme === Theme.DARK ? '#f5f6f7' : '#18191a'}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === Theme.DARK ? '#242526' : 'white',
      marginBottom: 8,
      padding: 16,
      borderRadius: 4
    },
    text: {
      flex: 1,
      marginLeft: 16,
      fontSize: 16,
      color: theme === Theme.DARK ? '#f5f6f7' : '#18191a'
    },
    completed: {
      color: 'gray',
      textDecorationStyle: 'solid',
      textDecorationLine: 'line-through'
    },
    buttonsContainer: {
      flexDirection: 'row'
    },
    button: {
      marginRight: 16
    }
  });
