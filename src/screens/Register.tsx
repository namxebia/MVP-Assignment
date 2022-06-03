import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../atoms/Logo';
import Background from '../organisms/Background';
import Header from '../organisms/Header';
import RegisterForm from '../organisms/RegisterForm';
export default ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <Background>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Header>Register New Account</Header>
      <View style={styles.loginForm}>
        <RegisterForm />
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
