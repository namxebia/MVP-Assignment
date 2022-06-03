import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../atoms/Logo';

export default () => {
  return (
    <View style={styles.splash}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    height: '100%',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: 80,
  },
});
