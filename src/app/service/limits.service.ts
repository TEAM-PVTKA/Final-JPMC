import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expenses, MonthlyData, UploadData, YearData } from './data.model';
import { AppComponent } from '../app.component';
import { CardDetails } from '../cards/cards.model';
import { CategoryList } from '../limits/limits.model';

@Injectable({
  providedIn: 'root',
})
export class LimitsService {
  //written by team
  uploadedData: UploadData | null = null;
  yearData: YearData | null = null;
  monthData: MonthlyData | null = null;
  expensesData: Expenses | null = null;

  categArray: CategoryList[] = [];

  constructor(private http: HttpClient) {}

  //written by team
  getData() {
    return this.http.get<UploadData>('./assets/data.json', {
      responseType: 'json',
    });
  }

  //written by team
  setData(appRef?: ApplicationRef) {
    this.getData().subscribe((data: UploadData) => {
      this.uploadedData = data;
      if (this.uploadedData) {
        appRef?.bootstrap(AppComponent);
      }
    });
  }

  //written by T
  getCategoryData() {
    return this.http.get<Expenses>('./assets/data.json', {
      responseType: 'json',
    });
  }

  //written by team
  getMonthlyData(mm: number, yyyy: number): MonthlyData {
    const yearData: YearData = this.uploadedData?.years.filter(
      (e: YearData) => e.year === yyyy
    )[0]!;
    return yearData?.months[mm - 1];
  }

  // getMonthlySavings(mm: number, yyyy: number): MonthlyData {
  //   const yearData: YearData = this.uploadedData?.years.filter(
  //     (e: YearData) => e.year === yyyy
  //   )[0]!;
  //   return yearData?.months[mm - 1];
  // }

  getOldMonthlyData(noOfMonths: number): MonthlyData[] {
    const oldMonthlyData = [];
    const today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    for (let i = 0; i < noOfMonths; i++) {
      oldMonthlyData.push(this.getMonthlyData(currentMonth, currentYear));
      console.log(currentMonth, currentYear);
      currentMonth = currentMonth - 1;
      if (currentMonth === 0) {
        currentMonth = 13;
        currentYear = currentYear - 1;
      }
    }
    return oldMonthlyData;
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
}
