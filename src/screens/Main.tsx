import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { useAppTheme } from '../context/theme';
import { routes } from '../routes';
import ListTodos from './ListTodos';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.list}
        screenOptions={{
          header: (props) => <Header {...props} />
        }}
      >
        <Stack.Screen name={routes.list} component={ListTodos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
