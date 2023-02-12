import axios from 'axios';
import { ResError, Rates, Response } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { currencyListWithFlag } from '../currencyList';
const currensyList: string[] = currencyListWithFlag.map(element => Object.keys(element)[0]);

axios.defaults.baseURL = 'https://api.exchangerate.host';

export const fetchCours = createAsyncThunk<Rates, string, { rejectValue: string }>(
  'exchangeRate/fetchCours',
  async (curency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Response>(
        `&latest?base=${curency}&symbols=${currensyList.join(',')}`
      );
      return data.rates;
    } catch (err) {
      const error = err as AxiosError<ResError>;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.message);
    }
  }
);
