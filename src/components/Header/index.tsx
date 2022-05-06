import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Theme, useAppTheme } from '../../context/theme';

export function Header({ navigation, back }: NativeStackHeaderProps) {
  const { theme, setAppTheme } = useAppTheme();

  return (
    <View
      style={theme === Theme.DARK ? styles.containerDark : styles.container}
    >
      {back && (
        <Pressable onPress={navigation.goBack}>
          <Icon name="back" size={16} style={styles.back} color="#f5f6f7" />
        </Pressable>
      )}
      <Text style={styles.title}>My Todo App</Text>
      <View style={styles.switchContainer}>
        <Switch
          style={styles.switch}
          trackColor={{ false: '#ffd700', true: '#03dac6' }}
          ios_backgroundColor="#ffd700"
          thumbColor={theme === Theme.DARK ? '#00ffbb' : 'yellow'}
          onValueChange={setAppTheme}
          value={theme === Theme.DARK ? true : false}
        />
        <Icon
          name={theme === Theme.DARK ? 'moon' : 'sun'}
          size={18}
          color={theme === Theme.DARK ? '#03dac6' : 'yellow'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 16,
    backgroundColor: 'rebeccapurple',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerDark: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#242526',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
