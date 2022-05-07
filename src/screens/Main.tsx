import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { useSplashScreen } from '../hooks/useSplashScreen';
import { routes } from '../routes';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function Main() {
  const isAppReady = useSplashScreen();

  return !isAppReady ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.list}
        screenOptions={{
          header: (props) => <Header {...props} />
        }}
      >
        <Stack.Screen name={routes.list} component={ListTodos} />
        <Stack.Screen name={routes.add} component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
