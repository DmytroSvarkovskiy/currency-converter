import { configureStore } from '@reduxjs/toolkit';
import exchangeReduser from './converter-slise';
const store = configureStore({
  reducer: {
    exchangeRate: exchangeReduser,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
