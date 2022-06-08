import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default () => {
  return (
    <Image
      style={styles.image}
      resizeMode={'stretch'}
      source={require('../../assets/imgs/logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    maxHeight: 80,
    width: '100%',
    marginBottom: 8,
  },
});
