import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ConfirmScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ConfirmScreen</Text>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
