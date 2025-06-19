import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoggedInScreen from './screens/LoggedInScreen';
import { iconInit } from './components/IconsHelper';

const Stack = createNativeStackNavigator();

export default function App() {
  // Initialize icons on app start
  useEffect(() => {
    iconInit();
  }, []);
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}