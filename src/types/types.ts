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
export interface ResError {
  message: string;
  description: string;
  code: number | undefined;
}
