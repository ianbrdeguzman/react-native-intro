import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';

interface TodoFormProps {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function TodoForm({ value, onChangeText, onPress }: TodoFormProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Add new todo</Text>
      <TextInput
        style={styles(theme).input}
        placeholder="Title"
        placeholderTextColor="gray"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Pressable style={styles(theme).button} onPress={onPress}>
        <Text style={styles(theme).buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme === Theme.DARK ? '#000' : '#f5f6f7'
    },
    title: {
      fontSize: 24,
      color: theme === Theme.DARK ? '#f5f6f7' : '#18191a'
    },
    input: {
      padding: 16,
      marginVertical: 16,
      fontSize: 16,
      backgroundColor: theme === Theme.DARK ? '#3b3b3b' : '#dddddd',
      borderRadius: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme === Theme.DARK ? '#f5f6f7' : 'gray',
      color: theme === Theme.DARK ? 'white' : '#272727'
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginTop: 16,
      borderWidth: 1,
      flexDirection: 'row',
      alignSelf: 'flex-end',
      borderRadius: 4,
      backgroundColor: theme === Theme.DARK ? '#03dac6' : 'rebeccapurple'
    },
    buttonText: {
      color: '#f5f6f7'
    }
  });
