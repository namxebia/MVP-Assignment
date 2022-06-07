import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../atoms/Logo';
import Background from '../organisms/Background';
import Header from '../organisms/Header';
import MPINForm from '../organisms/MPINForm';
import {getDeviceId} from 'react-native-device-info';
import {useDispatch} from 'react-redux';
import {setDeviceId, setMpin} from '../slices/authSlice';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatch();

  const handleMPIN = (data: {mpin: string; confirmMpin: string}) => {
    const deviceId = getDeviceId();

    dispatch(setDeviceId(deviceId));
    dispatch(setMpin(data.mpin));

    navigation.navigate('Login');
  };
  return (
    <Background name="MPIN">
      <View style={styles.logo}>
        <Logo />
      </View>
      <Header>Register New Account</Header>
      <View style={styles.loginForm}>
        <MPINForm handleMPIN={handleMPIN} />
      </View>
      <Text
        style={styles.navigationText}
        onPress={() => {
          navigation.goBack();
        }}>
        Go to Login
      </Text>
    </Background>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 50,
    paddingHorizontal: 80,
  },
  loginForm: {
    width: '100%',
  },
  navigationText: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
