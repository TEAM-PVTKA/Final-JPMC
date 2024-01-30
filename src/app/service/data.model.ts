export interface UploadData {
  years: YearData[];
}

export interface YearData {
  year: number;
  months: MonthlyData[];
}

export interface MonthlyData {
  month: string;
  income: number;
  expenses: Expenses[];
}

export interface Expenses {
  category: string;
  amount: number;
}
