import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { changeQuery } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export function Search() {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.todo);

  const handleOnPress = () => {
    if (!query) return;
    dispatch(changeQuery(query));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        placeholder="Search"
        onChangeText={(text) => dispatch(changeQuery(text))}
        onSubmitEditing={handleOnPress}
      />
      <Pressable style={styles.button} onPress={handleOnPress}>
        <Text>O</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    padding: 8,
    paddingLeft: 32,
    borderWidth: 1,
    borderRadius: 4
  },
  button: {
    padding: 8,
    position: 'absolute',
    left: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }
});
