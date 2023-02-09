import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rates } from '../types/types';
import { fetchCours } from './operations';

type rateState = {
  rate: Rates;
  currentRate: string;
  loading: boolean;
  error: string | null;
};
const initialState: rateState = {
  rate: {},
  currentRate: 'UAH',
  loading: false,
  error: null,
};
const exchangeSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {
    changeCurrentRate(state, action: PayloadAction<string>) {
      state.currentRate = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCours.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCours.fulfilled, (state, action) => {
        state.loading = false;
        state.rate = action.payload;
      })
      .addCase(fetchCours.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
      });
  },
});

export default exchangeSlice.reducer;
export const { changeCurrentRate } = exchangeSlice.actions;
