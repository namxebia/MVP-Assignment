import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Logo from '../atoms/Logo';
import Background from '../organisms/Background';
import Header from '../organisms/Header';
import RegisterForm from '../organisms/RegisterForm';
import {setUsername} from '../slices/authSlice';
export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatch();

  const handleRegister = (data: {username: string}) => {
    dispatch(setUsername(data.username));
    navigation.navigate('MPIN');
  };

  return (
    <Background name={'Register'}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Header>Register New Account</Header>
      <View style={styles.loginForm}>
        <RegisterForm handleRegister={handleRegister} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
