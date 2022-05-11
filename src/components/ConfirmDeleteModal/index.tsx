import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';
import { Todo } from '../../redux/features/todoSlice';

interface ConfirmDeleteModalProps {
  selected: Todo | null;
  visible: boolean;
  onRequestClose: () => void;
  handleCancleOnpress: () => void;
  handleConfirmOnPress: () => void;
}

export function ConfirmDeleteModal({
  selected,
  visible,
  onRequestClose,
  handleCancleOnpress,
  handleConfirmOnPress
}: ConfirmDeleteModalProps) {
  const { theme } = useAppTheme();

  return (
    <View>
      <Modal
        testID="modal"
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
      >
        <View style={styles(theme).container}>
          <View style={styles(theme).content}>
            <Text style={styles(theme).title}>
              Do you want to delete this todo?
            </Text>
            <Text
              style={styles(theme).text}
            >{`Delete "${selected?.title}"`}</Text>
            <View style={styles(theme).buttonsContainer}>
              <Pressable onPress={handleCancleOnpress}>
                <Text style={styles(theme).button}>CANCEL</Text>
              </Pressable>
              <Pressable onPress={handleConfirmOnPress}>
                <Text style={styles(theme).button}>CONFIRM</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(56, 56, 56, 0.5)'
    },
    content: {
      padding: 16,
      width: 300,
      height: 200,
      backgroundColor: theme === Theme.DARK ? '#383838' : 'white',
      borderRadius: 4
    },
    title: {
      fontSize: 20,
      color: theme === Theme.DARK ? 'white' : '#18191a'
    },
    text: {
      marginTop: 24,
      flex: 1,
      fontSize: 16,
      color: theme === Theme.DARK ? 'white' : '#18191a'
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    button: {
      marginLeft: 16,
      color: theme === Theme.DARK ? '#03dac6' : 'rebeccapurple'
    }
  });
