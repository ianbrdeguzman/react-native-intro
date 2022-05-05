import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';
import { addTodo, changeInput } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export function Form() {
  const { theme } = useAppTheme();
  const dispatch = useAppDispatch();
  const { text } = useAppSelector((state) => state.todo);

  const handleAddTodo = () => {
    if (!text) return;
    dispatch(addTodo(text));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={theme === Theme.DARK ? styles.inputDark : styles.input}
        onChangeText={(text) => dispatch(changeInput(text))}
        value={text}
        placeholder="Add new todo..."
        placeholderTextColor={theme === Theme.DARK ? '#f5f6f7' : 'gray'}
        onSubmitEditing={handleAddTodo}
      />
      <Pressable
        style={
          theme === Theme.DARK
            ? styles.buttonContainerDark
            : styles.buttonContainer
        }
        onPress={handleAddTodo}
      >
        <Text style={styles.buttonText}>Add Todo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 42,
    zIndex: 1
  },
  input: {
    borderBottomWidth: 1,
    padding: 8
  },
  inputDark: {
    borderBottomWidth: 1,
    borderColor: '#f5f6f7',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#272727',
    color: '#f5f6f7'
  },
  buttonContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'rebeccapurple',
    borderRadius: 4
  },
  buttonContainerDark: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#03dac6',
    borderRadius: 4
  },
  buttonText: {
    color: '#f5f6f7',
    textAlign: 'center',
    fontSize: 16
  }
});
