import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SendScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SendScreen</Text>
    </View>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#082d3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
