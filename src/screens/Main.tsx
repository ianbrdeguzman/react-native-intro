import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../routes';
import ListTodos from './ListTodos';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.list}>
        <Stack.Screen name={routes.list} component={ListTodos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
