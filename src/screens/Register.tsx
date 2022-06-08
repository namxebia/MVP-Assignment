import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import Logo from '../components/atoms/Logo';
import TextNavigation from '../components/atoms/TextNavigation';
import Header from '../components/atoms/Title';
import Background from '../components/organisms/Background';
import RegisterForm from '../components/organisms/RegisterForm';
import {setUsername} from '../slices/authSlice';
export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useAppDispatch();

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
