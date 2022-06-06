import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../atoms/Logo';
import Background from '../organisms/Background';
import Header from '../organisms/Header';
import LoginForm from '../organisms/LoginForm';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const handleLogin = () => {
    navigation.navigate('DashBoard');
  };

  return (
    <Background>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Header>Welcome Back</Header>
      <View style={styles.loginForm}>
        <LoginForm handleLogin={handleLogin} />
      </View>
      <Text
        style={styles.navigationText}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Reister
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
