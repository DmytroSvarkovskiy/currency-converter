import axios from 'axios';
import { Rates, Response } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { currencyListWithFlag } from '../config';
const currencyList: string[] = currencyListWithFlag.map(element => Object.keys(element)[0]);

axios.defaults.baseURL = 'https://pi.exchangerate.host';

export const fetchCourse = createAsyncThunk<Rates, string, { rejectValue: string }>(
  'exchangeRate/fetchCourse',
  async (currency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Response>('latest', {
        params: { base: `${currency}`, symbols: currencyList.join(',') },
      });
      return data.rates;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.message);
    }
  }
);
