import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Bitnob from 'bitnob-react-native';

const SendScreen = () => {
  const [balance, setBalance] = useState(0);
  const [isShowBitnob, setIsShowBitnob] = useState(false);
  const [isShowQrCode, setIsShowQrCode] = useState(false);

  const createCheckOut = () => {
    return (
      <Bitnob
        baseUrl={'https://bitnob.com/api/v1/'}
        description="Test108"
        amount={108}
        callbackUrl="https://bitnob.com/api/v1/callback"
        notificationEmail="victorvikson@gmail.com"
        customerEmail="victorvikson@gmail.com"
        satoshis={1000}
        reference="Test108"
        publicKey="test"
        failCallback={() => {
          console.log('failCallback');
          setIsShowBitnob(false);
        }}
        webViewCallback={res => {
          console.log('webViewCallback', res);
          isShowBitnob(false);
        }}
        successCallback={success => {
          console.log('successCallback', success);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar backgroundColor={'transparent'} translucent={false} />
    </SafeAreaView>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
