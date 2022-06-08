import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderNavigation from './HeaderNavigation';

type Props = {
  children: React.ReactNode;
  navigation?: NavigationProp<any>;
  name: string;
};

export default ({children, navigation, name}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <HeaderNavigation title={name} navigation={navigation} />
      </View>
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
    backgroundColor: '#2F8F9D',
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
