import 'react-native-gesture-handler';
import React, { ReactNode } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';
import TodoList from '../components/TodoList';
import InitialScreen from '../screens/InitialScreen/InitialScreen';
const Stack = createStackNavigator();

const AuthNavigation: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});

export default AuthNavigation;
