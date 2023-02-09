export type Rates = {
  [x: string]: number;
  //   EUR: number;
  //   GBP: number;
  //   UAH: number;
  //   PLN: number;
  //   AUD: number;
  //   AZN: number;
  //   KZT: number;
  //   CAD: number;
  //   TRY: number;
  //   CHF: number;
  //   USD: number;
};
export type Response = {
  success: boolean;
  timestamp: number;
  base: string;
  date: Date;
  rates: Rates;
};
export interface ResError {
  message: string;
  description: string;
  code: number | undefined;
}
