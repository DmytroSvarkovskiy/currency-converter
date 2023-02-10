export type Rates = {
  [x: string]: number;
  // EUR: number;
  // GBP: number;
  // UAH: number;
  // PLN: number;
  // AUD: number;
  // AZN: number;
  // KZT: number;
  // CAD: number;
  // TRY: number;
  // CHF: number;
  // USD: number;
  // CZK:string;
};
export type Response = {
  motd: {
    msg: string;
    url: string;
  };
  success: boolean;
  base: string;
  date: Date;
  rates: Rates;
};
export interface ResError {
  message: string;
  description: string;
  code: number | undefined;
}
