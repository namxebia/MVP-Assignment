import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../atoms/Logo';
import Background from '../organisms/Background';
import Header from '../organisms/Header';
import LoginForm from '../organisms/LoginForm';

export default () => {
  return (
    <Background>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Header>Welcome Back</Header>
      <View style={styles.loginForm}>
        <LoginForm />
      </View>
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
