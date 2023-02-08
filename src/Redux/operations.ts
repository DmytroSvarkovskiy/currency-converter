import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.apilayer.com/fixer';
axios.defaults.headers['apikey'] = 'AuipmJdZi6CTtOaDYfevRz9Pks46LaCc';

export const fetchCours = createAsyncThunk(
  'contacts/fetchCours',
  async (curency: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `latest?base=${curency}&symbols=EUR,GBP&symbols=EUR,GBP,UAH,PLN,AUD,AZN,KZT,CAD,TRY,CHF,CZK`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
