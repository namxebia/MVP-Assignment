import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Row from '../atoms/Row';
import {Invoice} from '../models';
type Props = {
  invoiceList: Invoice[];
  isLoading: boolean;
};
export default ({invoiceList, isLoading}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Row
        invoice={{
          number: 'Number',
          date: 'Date',
          customerName: 'Customer Name',
          amountDetails: 'Amount Details',
        }}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        invoiceList.map((invoice: Invoice) => {
          return <Row key={invoice.number} invoice={invoice} />;
        })
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1,
    width: '100%',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#FAF0D7',
  },
});
