import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Invoice} from '../screens/DashBoard';
export default ({invoice}: {invoice: Invoice}) => {
  return (
    <View style={styles.row}>
      <View style={styles.rowItem}>
        <Text style={styles.rowItemText}>{invoice.number}</Text>
      </View>
      <View style={styles.rowItem}>
        <Text style={styles.rowItemText}>{invoice.date}</Text>
      </View>
      <View style={styles.rowItem}>
        <Text style={styles.rowItemText}>{invoice.customerName}</Text>
      </View>
      <View style={styles.rowItem}>
        <Text style={styles.rowItemText}>{invoice.amountDetails}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  rowItem: {flex: 1, alignSelf: 'stretch', fontSize: 16},
  rowItemText: {
    fontSize: 18,
  },
});
