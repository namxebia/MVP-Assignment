import React from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  children: React.ReactNode;
};
export default (props: Props) => {
  return <Text style={styles.header} {...props} />;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
