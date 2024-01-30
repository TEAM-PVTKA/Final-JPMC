import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expenses, MonthlyData, UploadData, YearData } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class LimitsService {
  //written by team
  uploadedData: UploadData | null = null;
  yearData: YearData | null = null;
  monthData: MonthlyData | null = null;
  expensesData: Expenses | null = null;

  // categArray: MonthlyData[] = [];

  constructor(private http: HttpClient) {}

  //written by team
  getData() {
    return this.http.get<UploadData>('./assets/data.json', {
      responseType: 'json',
    });
  }

  //written by team
  setData() {
    this.getData().subscribe((data: UploadData) => {
      console.log(data);
      this.uploadedData = data;
    });
  }

  //written by T
  getCategoryData() {
    return this.http.get<Expenses>('./assets/data.json', {
      responseType: 'json',
    });
  }

  delCategory(p: Expenses) {
    if (this.monthData) {
      let ind = this.monthData.expenses.findIndex(
        (ele) => ele.category === p.category
      );
      // this.categArray.splice(ind, 1);

      console.log(ind);
    }
  }
  //written by team
  getMonthlyData(mm: number, yyyy: number): MonthlyData {
    const yearData: YearData = this.uploadedData?.years.filter(
      (e: YearData) => e.year === yyyy
    )[0]!;
    return yearData?.months[mm - 1];
  }
  //written by team
  getYearlyIncome(year: number): number {
    let income = 0;
    const yearData: YearData = this.uploadedData?.years.filter(
      (e: YearData) => e.year === year
    )[0]!;

    yearData?.months.forEach((e: MonthlyData) => {
      income = income + (e?.income ? +e.income : 0);
    });
    return income;
  }

  //written by T
  getMonthlyIncome(month: string): number {
    let inc = 0;
    const monthlyData: MonthlyData = this.yearData?.months.filter(
      (m: MonthlyData) => m.month == month
    )[0]!;

    return monthlyData.income;
  }
}
