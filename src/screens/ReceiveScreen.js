import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReceiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ReceiveScreen</Text>
    </View>
  );
};

export default ReceiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
