import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { Header } from '../components/Header';
import { useSplashScreen } from '../hooks/useSplashScreen';
import { RootStackParamList, routes } from '../routes';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';
import EditTodo from './EditTodo';

const RootStack = createStackNavigator<RootStackParamList>();

export default function Main() {
  const isAppReady = useSplashScreen();

  return !isAppReady ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={routes.list}
        screenOptions={{
          header: (props: any) => <Header {...props} />
        }}
      >
        <RootStack.Screen name={routes.list} component={ListTodos} />
        <RootStack.Screen name={routes.add} component={AddTodo} />
        <RootStack.Screen name={routes.edit} component={EditTodo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
