export type Rates = {
  [x: string]: number;
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
