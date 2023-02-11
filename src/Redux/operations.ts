import axios from 'axios';
import { ResError, Rates, Response } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://api.exchangerate.host';

export const fetchCours = createAsyncThunk<Rates, string, { rejectValue: string }>(
  'exchangeRate/fetchCours',
  async (curency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Response>(
        `&latest?base=${curency}&symbols=AUD,AZN,CAD,CHF,CNY,CZK,EUR,GBP,GEL,KZT,KZT,PLN,TRY,UAH,USD`
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
