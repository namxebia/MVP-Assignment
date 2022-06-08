import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Row from '../atoms/Row';
import {Invoice} from '../../models';
import {useTranslation} from 'react-i18next';
type Props = {
  invoiceList: Invoice[];
  isLoading: boolean;
};
export default ({invoiceList, isLoading}: Props) => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Row
        invoice={{
          number: t('number'),
          date: t('date'),
          customerName: t('customerName'),
          amountDetails: t('amountDetails'),
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
