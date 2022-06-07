import {Invoice} from '../models';
import {ListResponse} from '../models/common';
import axiosClient from './axiosClient';

const invoiceApi = {
  getAll(): Promise<ListResponse<Invoice>> {
    const url = '/invoice';
    return axiosClient.get(url);
  },
};

export default invoiceApi;
