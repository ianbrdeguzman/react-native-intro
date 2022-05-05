import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { addTodo, changeInput } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export function Form() {
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
        style={styles.input}
        onChangeText={(text) => dispatch(changeInput(text))}
        value={text}
        placeholder="Add new todo..."
        onSubmitEditing={handleAddTodo}
      />
      <Pressable style={styles.buttonContainer} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>ADD TODO</Text>
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
    bottom: 24,
    zIndex: 1
  },
  input: {
    borderBottomWidth: 1,
    padding: 16,
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 8,
    padding: 16,
    backgroundColor: 'salmon',
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});
