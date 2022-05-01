import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ConfirmScreen, ReceiveScreen, SendScreen} from '../screens';
const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="Receive" component={ReceiveScreen} />
        <Stack.Screen name="Send" component={SendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
