import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme, useAppTheme } from '../../context/theme';

interface AddTodoButtonProps {
  handleAddTodoOnPress: () => void;
}

export function AddTodoButton({ handleAddTodoOnPress }: AddTodoButtonProps) {
  const { theme } = useAppTheme();

  return (
    <Pressable
      style={styles(theme).container}
      onPress={handleAddTodoOnPress}
      testID="add-button"
    >
      <Icon name="plus" size={32} color="#f5f6f7" />
    </Pressable>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      borderRadius: 50,
      padding: 8,
      backgroundColor: theme === Theme.DARK ? '#03dac6' : 'rebeccapurple'
    }
  });
