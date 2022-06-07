import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import DashBoardHeader from '../molecules/DashBoardHeader';
import InvoiceList from '../molecules/InvoiceList';
import Background from '../organisms/Background';
import {getLasttimeLogin, getUsername} from '../slices/authSlice';

export type Invoice = {
  number: string;
  date: string;
  customerName: string;
  amountDetails: string;
};

export default () => {
  const username = useSelector(getUsername);
  const lasttimeLogin = useSelector(getLasttimeLogin);

  const [invoiceList, setInvoiceList] = useState<Invoice[]>([]);
  useEffect(() => {
    setInvoiceList([
      {
        number: '1',
        date: 'xxxx',
        customerName: 'A',
        amountDetails: '1000',
      },
    ]);
  }, []);
  return (
    <Background>
      <DashBoardHeader
        username={username || ''}
        lasttimeLogin={lasttimeLogin}
      />
      <InvoiceList invoiceList={invoiceList} />
    </Background>
  );
};
