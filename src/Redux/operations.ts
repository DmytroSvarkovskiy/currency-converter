import axios from 'axios';
import { ResError, Rates, Response } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://api.exchangerate.host/&latest?';

export const fetchCours = createAsyncThunk<Rates, string, { rejectValue: string }>(
  'exchangeRate/fetchCours',
  async (curency, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Response>(
        `base=${curency}&symbols=EUR,GBP,UAH,PLN,AUD,AZN,KZT,CAD,TRY,CHF,USD,CZK`
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
