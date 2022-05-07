import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Theme, useAppTheme } from '../../context/theme';

export function Header({ navigation, back }: NativeStackHeaderProps) {
  const { theme, setAppTheme } = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).logoContainer}>
        {back && (
          <Pressable onPress={navigation.goBack}>
            <AntIcon
              name="back"
              size={16}
              style={styles(theme).back}
              color="#f5f6f7"
            />
          </Pressable>
        )}
        <Text style={styles(theme).title}>My Todo App</Text>
      </View>
      <View style={styles(theme).switchContainer}>
        <Switch
          style={styles(theme).switch}
          trackColor={{ false: '#ffd700', true: '#03dac6' }}
          ios_backgroundColor="#ffd700"
          thumbColor={theme === Theme.DARK ? '#00ffbb' : 'yellow'}
          onValueChange={setAppTheme}
          value={theme === Theme.DARK ? true : false}
        />
        <FeatherIcon
          name={theme === Theme.DARK ? 'moon' : 'sun'}
          size={18}
          color={theme === Theme.DARK ? '#03dac6' : 'yellow'}
        />
      </View>
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 24,
      padding: 16,
      backgroundColor: theme === Theme.DARK ? '#242526' : 'rebeccapurple',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    back: {
      marginRight: 16
    },
    title: {
      color: '#f5f6f7',
      fontSize: 24,
      fontFamily: 'Inter-Black'
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 8
    },
    switch: {
      transform: [{ scale: 0.7 }]
    }
  });
