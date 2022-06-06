import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default ({children}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container}>
          {children}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  background: {
    flex: 1,
    width: '100%',
    padding: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
