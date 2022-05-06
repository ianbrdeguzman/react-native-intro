import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { Header } from '../components/Header';
import { useSplashScreen } from '../hooks/useSplashScreen';
import { routes } from '../routes';
import ListTodos from './ListTodos';

const Stack = createNativeStackNavigator();

export default function Main() {
  const isAppReady = useSplashScreen();

  if (!isAppReady) {
    return <AppLoading />;
  }

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
