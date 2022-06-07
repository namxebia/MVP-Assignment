import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import Logo from '../atoms/Logo';
import TextNavigation from '../atoms/TextNavigation';
import Title from '../atoms/Title';
import Background from '../organisms/Background';
import LoginForm from '../organisms/LoginForm';
import {setLastimeLogin} from '../slices/authSlice';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    var d = new Date();

    var datestring =
      d.getDate() +
      '-' +
      (d.getMonth() + 1) +
      '-' +
      d.getFullYear() +
      ' ' +
      d.getHours() +
      ':' +
      d.getMinutes() +
      ':' +
      d.getSeconds();

    dispatch(setLastimeLogin(datestring));
    navigation.navigate('DashBoard');
  };

  return (
    <Background name={'Login'}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Title>Welcome Back</Title>
      <View style={styles.loginForm}>
        <LoginForm handleLogin={handleLogin} />
      </View>
      <TextNavigation
        onNavigation={() => {
          navigation.navigate('Register');
        }}>
        Reister
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
  navigationText: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
