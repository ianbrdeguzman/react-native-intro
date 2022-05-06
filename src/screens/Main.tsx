import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { routes } from '../routes';
import { initializeSplashScreen } from '../utils';
import ListTodos from './ListTodos';

const Stack = createNativeStackNavigator();

export default function Main() {
  useEffect(() => {
    initializeSplashScreen();
  }, []);

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
