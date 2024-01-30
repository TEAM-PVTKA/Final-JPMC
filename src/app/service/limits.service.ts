import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MonthlyData, UploadData, YearData } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class LimitsService {
  uploadedData: UploadData | null = null;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<UploadData>('./assets/data.json', {
      responseType: 'json',
    });
  }

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

  // getSalary() {
  //   for (let a of this.expenseData) {
  //   }
  // }

  // returning particular totalAmount

  // IM  IY EM EY

  //   totalAmount(){
  //     const targetMonth = "December";

  //           const salarydata = this.expenseData
  //             .find(monthData => monthData.month === targetMonth)
  //             ?.categories
  //             .find((a:any) => a.category === "Salary")?.amount;

  // console.log(`Salary for ${targetMonth}: ${salarydata}`);
  //   }
}
