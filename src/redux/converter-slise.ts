import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rates } from '../types';
import { fetchCourse } from '../api';

type rateState = {
  rate: Rates;
  currentRate: string;
  loading: boolean;
  error: boolean;
};
const initialState: rateState = {
  rate: {},
  currentRate: 'UAH',
  loading: false,
  error: false,
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
      .addCase(fetchCourse.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.rate = action.payload;
      })
      .addCase(fetchCourse.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default exchangeSlice.reducer;
export const { changeCurrentRate } = exchangeSlice.actions;
