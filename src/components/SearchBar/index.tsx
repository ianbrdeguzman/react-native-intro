import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';
import GlobalStyles from '../../utils/GlobalStyles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}

export function SearchBar({ value, onChangeText, onPress }: SearchBarProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <TextInput
        style={[GlobalStyles().font, styles(theme).input]}
        value={value}
        placeholder="Search"
        placeholderTextColor="gray"
        onChangeText={onChangeText}
        onSubmitEditing={onPress}
      />
      <Pressable style={styles(theme).button} onPress={onPress}>
        <Icon name="search1" size={16} color="gray" />
      </Pressable>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: 16,
      flexDirection: 'row'
    },
    input: {
      flex: 1,
      padding: 16,
      paddingLeft: 40,
      borderWidth: 1,
      borderColor: theme === Theme.DARK ? '#f5f6f7' : 'gray',
      borderRadius: 4,
      fontSize: 16,
      backgroundColor: theme === Theme.DARK ? '#242526' : 'white',
      color: theme === Theme.DARK ? '#f5f6f7' : 'black'
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
