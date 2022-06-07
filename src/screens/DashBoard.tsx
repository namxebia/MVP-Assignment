import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import invoiceApi from '../api/invoiceApi';
import {useAppSelector} from '../app/hooks';
import {Invoice} from '../models';
import DashBoardHeader from '../molecules/DashBoardHeader';
import InvoiceList from '../molecules/InvoiceList';
import Background from '../organisms/Background';
import {getLasttimeLogin, getUsername} from '../slices/authSlice';

export default ({navigation}: {navigation: NavigationProp<any>}) => {
  const username = useAppSelector(getUsername);
  const lasttimeLogin = useAppSelector(getLasttimeLogin);

  const [invoiceList, setInvoiceList] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await invoiceApi.getAll();
        console.log('response', response);
        setInvoiceList(response.data);
      } catch (error) {
        console.log('error', error);
      }
      setIsLoading(false);
    })();
  }, []);
  return (
    <Background navigation={navigation} name={'DashBoard'}>
      <DashBoardHeader
        username={username || ''}
        lasttimeLogin={lasttimeLogin}
      />
      <InvoiceList isLoading={isLoading} invoiceList={invoiceList} />
    </Background>
  );
};
