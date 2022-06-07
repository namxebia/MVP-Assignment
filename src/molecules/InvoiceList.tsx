import React from 'react';
import {StyleSheet, View} from 'react-native';
import Row from '../atoms/Row';
import {Invoice} from '../screens/DashBoard';
type Props = {
  invoiceList: Invoice[];
};
export default ({invoiceList}: Props) => {
  return (
    <View style={styles.container}>
      <Row
        invoice={{
          number: 'Number',
          date: 'Date',
          customerName: 'Customer Name',
          amountDetails: 'Amount Details',
        }}
      />
      {invoiceList.map((invoice: Invoice) => {
        return <Row key={invoice.number} invoice={invoice} />;
      })}
    </View>
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
    backgroundColor: 'pink',
  },
});
