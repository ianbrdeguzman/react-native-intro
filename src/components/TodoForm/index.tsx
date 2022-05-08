import { Dispatch, SetStateAction } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { Theme, useAppTheme } from '../../context/theme';
import { Todo } from '../../redux/features/todoSlice';

interface TodoFormProps {
  todo?: Todo;
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  showDetails?: boolean;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
}

export function TodoForm({
  todo,
  value,
  onChangeText,
  onPress,
  showDetails,
  setShowDetails
}: TodoFormProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>
        {todo ? 'Edit todo' : 'Add new todo'}
      </Text>
      {todo ? (
        <View>
          <View>
            <Text style={styles(theme).inputLabel}>Id</Text>
            <TextInput
              style={[styles(theme).input, styles(theme).inputDisabled]}
              value={todo.id}
              editable={false}
            />
          </View>
          <View>
            <Text style={styles(theme).inputLabel}>Title</Text>
            <TextInput
              style={styles(theme).input}
              placeholder="Title"
              placeholderTextColor="gray"
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
          <View style={styles(theme).switchContainer}>
            <Text style={styles(theme).switchText}>Show Details</Text>
            <Switch
              style={styles(theme).switch}
              value={showDetails}
              onValueChange={setShowDetails}
            />
          </View>
          {showDetails && (
            <View>
              <View>
                <Text style={styles(theme).inputLabel}>Version</Text>
                <TextInput
                  style={[styles(theme).input, styles(theme).inputDisabled]}
                  value={todo.version.toString()}
                  editable={false}
                />
              </View>
              <View>
                <Text style={styles(theme).inputLabel}>Created At</Text>
                <TextInput
                  style={[styles(theme).input, styles(theme).inputDisabled]}
                  value={new Date(todo.createdAt).toLocaleString()}
                  editable={false}
                />
              </View>
              <View>
                <Text style={styles(theme).inputLabel}>Updated At</Text>
                <TextInput
                  style={[styles(theme).input, styles(theme).inputDisabled]}
                  value={
                    todo.updatedAt
                      ? new Date(todo?.updatedAt).toLocaleString()
                      : 'N/A'
                  }
                  editable={false}
                />
              </View>
            </View>
          )}
        </View>
      ) : (
        <TextInput
          style={styles(theme).input}
          placeholder="Title"
          placeholderTextColor="gray"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      )}
      <Pressable style={styles(theme).button} onPress={onPress}>
        <Text style={styles(theme).buttonText}>{todo ? 'Update' : 'Save'}</Text>
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
      marginTop: 16,
      fontSize: 16,
      backgroundColor: theme === Theme.DARK ? '#242526' : '#dddddd',
      borderRadius: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme === Theme.DARK ? '#f5f6f7' : 'gray',
      color: theme === Theme.DARK ? 'white' : '#242526'
    },
    inputDisabled: {
      color: 'gray'
    },
    inputLabel: {
      color: 'gray',
      position: 'absolute',
      top: 32,
      right: 16,
      zIndex: 1
    },
    switchContainer: {
      marginTop: 16,
      flexDirection: 'row',
      alignItems: 'center'
    },
    switch: {
      marginLeft: 8
    },
    switchText: {
      color: 'gray'
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginTop: 24,
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
