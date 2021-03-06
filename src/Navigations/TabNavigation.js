import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {TabIcon} from '../components';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ConfirmScreen, ReceiveScreen, SendScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  // tabBarActiveTintColor: '#6aeb76',
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#102021',
    position: 'absolute',
    bottom: 25,
    right: 20,
    left: 20,
    elevation: 0,
    borderRadius: 15, // for android
    height: 90,
  },
  // tabBarIcon({focused, name}) {
  //   return (
  //     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
  //       <Image
  //         source={require('../../assets/icons/send.png')}
  //         resizeMode="contain"
  //         style={{
  //           width: 25,
  //           height: 25,
  //           tintColor: focused ? '#6aeb76' : '#748c94',
  //         }}
  //       />

  //       <Text
  //         style={{
  //           color: focused ? '#6aeb76' : '#748c94',
  //           fontSize: 12,
  //         }}
  //       >
  //         Send
  //       </Text>
  //     </View>
  //   );
  // },
};
export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Send"
          component={SendScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={require('../../assets/icons/bitcoin-wallet.png')}
                label="wallet"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Receive"
          component={ReceiveScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={require('../../assets/icons/send.png')}
                label="send"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Confirm"
          component={ConfirmScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={require('../../assets/icons/scan.png')}
                label="scan"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
