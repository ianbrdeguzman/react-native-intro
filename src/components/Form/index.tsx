import { Dispatch, SetStateAction } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface FormProps {
  text: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  onPress: () => void;
}

export function Form({ text, onChangeText, onPress }: FormProps) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="e.g. Four"
      />
      <View style={styles.buttonContainer}>
        <Button title="ADD TODO" onPress={onPress} color="#fff" />
      </View>
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
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: 'blue'
  }
});
