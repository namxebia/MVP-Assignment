import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default ({
  onNavigation,
  children,
}: {
  children: React.ReactNode;
  onNavigation: () => void;
}) => {
  return (
    <Text style={styles.navigationText} onPress={onNavigation}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  navigationText: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'black',
  },
});
