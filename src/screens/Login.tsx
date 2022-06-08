import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import Logo from '../components/atoms/Logo';
import TextNavigation from '../components/atoms/TextNavigation';
import Title from '../components/atoms/Title';
import Background from '../components/organisms/Background';
import LoginForm from '../components/organisms/LoginForm';
import {setLastimeLogin} from '../slices/authSlice';
import {useTranslation} from 'react-i18next';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

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
      <Title>{t('welcomeBack')}</Title>
      <View style={styles.loginForm}>
        <LoginForm handleLogin={handleLogin} />
      </View>
      <TextNavigation
        onNavigation={() => {
          navigation.navigate('Register');
        }}>
        {t('register')}
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
