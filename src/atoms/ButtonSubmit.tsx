import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

type Props = {
  handleSubmit: () => void;
  title: string;
};
export default ({handleSubmit, title}: Props) => {
  return (
    <TouchableHighlight style={styles.buttonSubmit} onPress={handleSubmit}>
      <Text style={styles.textSubmit}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#82DBD8',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textSubmit: {
    fontSize: 18,
    color: 'black',
  },
});
