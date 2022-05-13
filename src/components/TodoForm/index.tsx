import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch
} from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';
import { Todo } from '../../redux/features/todoSlice';
import GlobalStyles from '../../utils/GlobalStyles';

interface TodoFormProps {
  todo?: Todo;
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function TodoForm({
  todo,
  value,
  onChangeText,
  onPress
}: TodoFormProps) {
  const { theme } = useAppTheme();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>
        {todo ? 'Edit todo' : 'Add new todo'}
      </Text>
      {todo ? (
        <View>
          <View>
            <Text style={[GlobalStyles().fontBold, styles(theme).inputLabel]}>
              Id
            </Text>
            <TextInput
              style={[
                GlobalStyles().font,
                styles(theme).input,
                styles(theme).inputDisabled
              ]}
              placeholder={todo.id}
              placeholderTextColor="gray"
              editable={false}
            />
          </View>
          <View>
            <Text style={[GlobalStyles().fontBold, styles(theme).inputLabel]}>
              Title
            </Text>
            <TextInput
              style={[GlobalStyles().font, styles(theme).input]}
              placeholder={todo ? todo.title : 'Title'}
              placeholderTextColor="gray"
              onChangeText={(text) => onChangeText(text)}
              value={value}
              autoFocus
            />
          </View>
          <View style={styles(theme).switchContainer}>
            <Text style={[GlobalStyles().font, styles(theme).switchText]}>
              Show Details
            </Text>
            <Switch
              style={styles(theme).switch}
              thumbColor={theme === Theme.DARK ? '#00ffbb' : 'rebeccapurple'}
              trackColor={{
                false: '#dddddd',
                true: theme === Theme.DARK ? '#03dac6' : '#8c53c6'
              }}
              ios_backgroundColor={
                theme === Theme.DARK ? '#dddddd' : 'transparent'
              }
              value={showDetails}
              onValueChange={setShowDetails}
            />
          </View>
          {showDetails && (
            <View>
              <View>
                <Text
                  style={[GlobalStyles().fontBold, styles(theme).inputLabel]}
                >
                  Version
                </Text>
                <TextInput
                  style={[
                    GlobalStyles().font,
                    styles(theme).input,
                    styles(theme).inputDisabled
                  ]}
                  placeholder={todo.version.toString()}
                  placeholderTextColor="gray"
                  editable={false}
                />
              </View>
              <View>
                <Text
                  style={[GlobalStyles().fontBold, styles(theme).inputLabel]}
                >
                  Created At
                </Text>
                <TextInput
                  style={[
                    GlobalStyles().font,
                    styles(theme).input,
                    styles(theme).inputDisabled
                  ]}
                  placeholder={new Date(todo.createdAt).toLocaleString()}
                  placeholderTextColor="gray"
                  editable={false}
                />
              </View>
              <View>
                <Text
                  style={[GlobalStyles().fontBold, styles(theme).inputLabel]}
                >
                  Updated At
                </Text>
                <TextInput
                  style={[
                    GlobalStyles().font,
                    styles(theme).input,
                    styles(theme).inputDisabled
                  ]}
                  placeholder={
                    todo.updatedAt
                      ? new Date(todo?.updatedAt).toLocaleString()
                      : 'N/A'
                  }
                  placeholderTextColor="gray"
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
          autoFocus
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
      marginLeft: 8,
      transform: [{ scale: 0.7 }]
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
