import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getDeviceId} from 'react-native-device-info';
import {useAppDispatch} from '../app/hooks';
import Logo from '../components/atoms/Logo';
import TextNavigation from '../components/atoms/TextNavigation';
import Header from '../components/atoms/Title';
import Background from '../components/organisms/Background';
import MPINForm from '../components/organisms/MPINForm';
import {setDeviceId, setMpin} from '../slices/authSlice';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useAppDispatch();

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
      <TextNavigation
        onNavigation={() => {
          navigation.goBack();
        }}>
        Go to Login
      </TextNavigation>
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
});
