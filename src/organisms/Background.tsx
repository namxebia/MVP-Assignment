import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default ({children}: Props) => {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
    padding: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
