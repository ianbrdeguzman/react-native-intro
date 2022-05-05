import Icon from 'react-native-vector-icons/AntDesign';
import { Keyboard, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { changeQuery } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Theme, useAppTheme } from '../../context/theme';

export function Search() {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.todo);
  const { theme } = useAppTheme();

  const handleOnPress = () => {
    if (!query) return;
    dispatch(changeQuery(query));
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={theme === Theme.DARK ? styles.inputDark : styles.input}
        value={query}
        placeholder="Search"
        placeholderTextColor={theme === Theme.DARK ? '#f5f6f7' : 'gray'}
        onChangeText={(text) => dispatch(changeQuery(text))}
        onSubmitEditing={handleOnPress}
      />
      <Pressable style={styles.button} onPress={handleOnPress}>
        <Icon
          name="search1"
          size={16}
          color={theme === Theme.DARK ? '#f5f6f7' : 'gray'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    padding: 8,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4
  },
  inputDark: {
    flex: 1,
    padding: 8,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#f5f6f7',
    borderRadius: 4,
    backgroundColor: '#272727',
    color: '#f5f6f7'
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
