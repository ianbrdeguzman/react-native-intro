import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface FormProps {
  text: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function Form({ text, onChangeText, onPress }: FormProps) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add new todo..."
        onSubmitEditing={onPress}
      />
      <Pressable style={styles.buttonContainer} onPress={onPress}>
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
