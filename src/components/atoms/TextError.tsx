import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'yellow',
    marginBottom: 8,
  },
});
