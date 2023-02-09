import axios from 'axios';
import { ResError, Rates, Response } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://api.apilayer.com/fixer';
axios.defaults.headers['apikey'] = 'AuipmJdZi6CTtOaDYfevRz9Pks46LaCc';

export const fetchCours = createAsyncThunk<Rates, string, { rejectValue: string }>(
  'exchangeRate/fetchCours',
  async (curency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Response>(
        `latest?base=${curency}&symbols=EUR,GBP&symbols=EUR,GBP,UAH,PLN,AUD,AZN,KZT,CAD,TRY,CHF,CZK`
      );
      return data.rates;
    } catch (err) {
      console.log(err);
      const error = err as AxiosError<ResError>;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.message);
    }
  }
);
